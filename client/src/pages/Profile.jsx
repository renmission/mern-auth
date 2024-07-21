import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';

const Profile = () => {
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(null);
  const [formData, setFormData] = useState({});
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + '-' + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setImagePercent(Math.round(progress));
    }, () => {
      setImageError(true);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setFormData({ ...formData, profilePicture: downloadURL });
      });
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the update logic here
  };

  return (
    <div className='px-3 max-w-lg mx-auto'>
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
        <input 
          type="file" 
          className="hidden" 
          id="profilePicture" 
          ref={fileRef} 
          accept='image/*' 
          onChange={e => setImage(e.target.files[0])} 
        />
        <img src={formData.profilePicture || currentUser.profilePicture} onClick={() => fileRef.current.click()} alt="avatar" className="rounded-full w-24 h-24 cursor-pointer object-cover self-center" />
        
        <div className='text-sm self-center'>
          { imageError ? (
            <span className='text-red-700'>
              Error uploading image (file size must be less than 2MB)
            </span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span className='text-slate-700'>
              {`Uploading ${imagePercent}%`}
            </span>
          ) : imagePercent === 100 ? (
            <span className='text-green-700'>Image Uploaded Successfully</span>
          ) : (
            ''
          )}
        </div>


        <label htmlFor='username' className='w-full'>
          <input type='text' placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg w-full my-3' value={currentUser.username} readOnly />
        </label>
        <label htmlFor='email' className='w-full'>
          <input type='email' placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg w-full my-3' value={currentUser.email} readOnly />
        </label>
        <label htmlFor='password' className='w-full'>
          <input type='password' placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg w-full my-3' />
        </label>
        <button type='submit' className='bg-slate-900 text-white p-3 rounded-lg uppercase w-full my-3 hover:opacity-95 disabled:opacity-80'>
          Update
        </button>
      </form>
      <div className='flex justify-between mt-5 flex-wrap gap-2'>
        <span className='text-red-500 cursor-pointer'>Delete Account</span>
        <span className='text-red-500 cursor-pointer'>Sign Up</span>
      </div>
    </div>
  );
};

export default Profile;
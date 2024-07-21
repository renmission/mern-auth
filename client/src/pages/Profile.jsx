import { useSelector } from 'react-redux';

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the update logic here
  };

  return (
    <div className='px-3 max-w-lg mx-auto'>
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
        <img src={currentUser.profilePicture} alt="avatar" className="rounded-full w-24 h-24 cursor-pointer object-cover self-center" />
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
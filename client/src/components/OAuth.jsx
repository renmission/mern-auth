import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSucess } from '../redux/user/userSlice';

const OAuth = () => {
    const dispatch = useDispatch();

    const handleGoogleClick = async () => {
        try {
            const  provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                 }),
            });
            const data = await res.json();
            dispatch(signInSucess(data));
        } catch (error) {
            console.error('Error signing in with Google', error);
        }
    };

    return (
        <button onClick={handleGoogleClick} className='bg-red-500 text-white rounded-lg p-3 uppercase'>Continue with Google</button>
    )
}

export default OAuth
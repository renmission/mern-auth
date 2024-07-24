import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div  className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <input type='email' placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <input type='password' placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <button type='submit' disabled={loading} className='bg-slate-900 text-white p-3 rounded-lg uppercase'>
          { loading ? 'Loading...' : 'Sign Up' }
        </button>
      </form>
      <OAuth />
      
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to="/signin">
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
      <p className='text-red-500 mt-5'>{error && 'Something went wrong'}</p>
    </div>
  )
}

export default SignUp
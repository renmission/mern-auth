import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div  className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg' />
        <input type='email' placeholder='Email' id='Email' className='bg-slate-100 p-3 rounded-lg' />
        <input type='password' placeholder='Passsword' id='Passsword' className='bg-slate-100 p-3 rounded-lg' />
        <button type='submit' className='bg-slate-900 text-white p-3 rounded-lg'>SUBMIT</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to="/signin">
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp
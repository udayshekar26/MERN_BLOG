import { Alert, Button, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };

  const handleSubmit = async (e) => {
    if(!formData.username || !formData.password || !formData.email) {
      return setErrorMessage('Please fill all fields');
    }
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
    } catch (error) {
      
    }
  }
  // console.log(formData);


  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">

      {/* left */}
      <div className="flex-1">
      <Link
        to="/"
        className="bold dark:text-white text-4xl"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Uday's
        </span>
      </Link>
      <p className='text-sm mt-5'>
        This is Uday's blog posting everyday wisdom.
      </p>
      </div>
      {/* right  */}
      <div className="flex-1">
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className="">
          <Label value='Your username'/>
          <TextInput
            type='text'
            placeholder='Username'
            id= 'username'
            onChange={handleChange}
          />

          </div>
          <div className="">
          <Label value='Your email'/>
          <TextInput
            type='email'
            placeholder='email@company.com'
            id= 'email'
            onChange={handleChange}
          />

          </div>
          <div className="">
          <Label value='Your password'/>
          <TextInput
            type='password'
            placeholder='Password'
            id= 'password'
            onChange={handleChange}
          />

          </div>
          <Button gradientDuoTone='purpleToPink' type='submit' className='outline'>
            Sign Up
          </Button>
        </form>
        <div className=" flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to ="/sign-in" className='text-blue-500'>
          Sign In </Link>
        </div>
        {errorMessage && (
          <Alert className='mt-5' color='failure'>
            {errorMessage}
          </Alert>
        )}
      </div>
      </div>
    </div>
  )
}

export default SignUp

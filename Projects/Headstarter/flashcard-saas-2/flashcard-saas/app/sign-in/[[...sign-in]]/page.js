import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='flex justify-center mt-9'>
        <div className='text-center'>
        <p className='text-[20px] font-medium'> Sign In</p>
        <SignIn />
        </div>
    </div>
  )
}

export default SignUpPage
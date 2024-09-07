import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='flex justify-center mt-9'>
      <div className='text-center'>
        <h2 className='text-[20px] font-medium'>Sign Up</h2>
        <SignUp />
      </div>
    </div>
  )
}

export default SignUpPage
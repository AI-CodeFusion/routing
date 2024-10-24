'use client'
import link from 'next/link'
import React from 'react'
import {useRouter} from 'next/navigation'
const Login = () => {
  const route =useRouter()
  return (
    <>
    <h1 className='text text-4xl underline text-center'>Login</h1>
    <br />
    <br />
    <button onClick={()=>route.push('/')} className='bg-blue-300 m-3 w-40 text-xl text-red-700' >go to homepage</button>
    </>
  )
}

export default Login
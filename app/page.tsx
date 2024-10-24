'use client'
import link from 'next/link'
import React from 'react'
import {useRouter} from 'next/navigation'
const Mainpage = () => {
  const route=useRouter()
  return (
    <>
    <h1 className='text text-4xl text-center underline'>This is homepage</h1>
    <br />
    <br />
    <button onClick={()=>route.push('/apply')} className='bg-blue-300 m-3 w-32' >Apply Now</button>
    <br />
    <br />
    <button onClick={()=>route.push('/login')} className='bg-blue-300 m-3 w-32' >login</button>
    </>
  )
}

export default Mainpage
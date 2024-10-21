import React from 'react'
import link from 'next/link'
const Homepage = () => {
  return (
    <div className='bg-blue-500 h-12  text-xl flex justify-between'>
      <div >
<ul className='flex gap-5 text-white m-3 '>
  <a href="/home">  home</a>
  <a href="/apply"> apply </a>
  <a href="/about">about</a>
</ul>
      </div>

      <div>
        <ul className='flex gap-4 text-white m-3 cursor-pointer '>
        <a href="/signup">signup</a>
        <a href="/login">login</a>
        </ul>
      </div>

</div>
  
  )
}

export default Homepage
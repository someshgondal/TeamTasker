import React from 'react'

export default function Headd(props) {

  const Logout =()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>hello <br /> <span className='text-3xl font-semibold'>userName👋</span></h1>
      <button onClick={Logout} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

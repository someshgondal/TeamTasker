import React from 'react'
import Headd from '../../other/Headd'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'

export default function AdminDashbord(props) {
  return (
    <div className='h-screen w-full p-10'>
      <Headd changeUser={props.changeUser}/>
    <CreateTask/>
    <AllTask/>
    </div>
  )
}

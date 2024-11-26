import React from 'react'
import Headd from '../../other/Headd'
import TaskListNumber from '../../other/TaskListNumber'
import TaskList from '../../TaskList/TaskList'

export default function EmployeeDashbord(props) {
    return (
        <div className='p-20 bg[#1c1c1c] h-screen'>
            <Headd changeUser={props.changeUser} data={props.data}/>
            <TaskListNumber data={props.data}/>
            <TaskList data={props.data}/>
        </div>
    )
}

import React, { useContext,useState } from 'react'
import { AuthContext } from '../Contex/AuthProvider'

export default function CreateTask() {


    const [userData,setUserData] =  useContext(AuthContext)


    const [Title,setTitle]=useState('')
    const [Date,setDate]=useState('')
    const [Description,setDescription]=useState('')
    const [Category,setCategory]=useState('')
    const [Asign,setAsign]=useState('')

const [newTask,setNewTask]=useState('')

const submithandler=(Event)=>{
Event.preventDefault();
setNewTask({Title,Date,Description,Category,Asign,active:false,newTask:true,completed:false,failed:false})

const data = userData

data.forEach(function (elem){
    if (Asign == elem.firstName) {
        elem.tasks.push(newTask)
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1
    }
})
setUserData(data)
console.log(data);

localStorage.setItem('employees',JSON.stringify(data))
console.log("form submited");
setTitle('');
setDate('');
setDescription('');
setCategory('');
setAsign('');
}


    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={submithandler}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                        value={Title} onChange={(e)=>{setTitle(e.target.value)}}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                         value={Date} onChange={(e)=>{setDate(e.target.value)}}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input 
                         value={Asign} onChange={(e)=>{setAsign(e.target.value)}}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                         value={Category} onChange={(e)=>{setCategory(e.target.value)}}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea  value={Description} onChange={(e)=>{setDescription(e.target.value)}} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
    )
}


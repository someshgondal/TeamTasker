import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FaildTask from './FaildTask'

export default function TaskList({data}) {
  console.log(data);
  return (
    <div id='TaskList' className='h-[55%] overflow-x-auto w-full flex justify-start items-center gap-5 flex-nowrap py-1 mt-16'>
{data.tasks.map((elem,idx)=>{

  if(elem.active){
    return <AcceptTask key={idx} data={elem}/>
  }
  if(elem.newTask){
    return <NewTask key={idx} data={elem}/>
  }
  if(elem.completed){
    return <CompleteTask key={idx} data={elem}/>
  }
  if(elem.failed){
    return <FaildTask key={idx} data={elem}/>
  }

})}
    </div>
  )
}

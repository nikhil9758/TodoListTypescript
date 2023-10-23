import React from 'react'
import Task from './Task'
import Todo from './Todo'
import { useSelector } from 'react-redux'

// interface TodoListProps{
//     tasks:Todo[]
// }

interface RootState{
  Todoreducer:{
  todo:Todo[]}
}

const TasksList :React.FC = () => {
    // const {tasks}= props
    // console.log(tasks)
    const todos= useSelector((store : RootState)=>{return store.Todoreducer.todo})
    console.log("data",todos)
  return (
    <div>
        {
            todos?.map((task : Todo ): React.ReactNode=>{
                    return <Task {...task} key={task.id}/>
            })
        }
    </div>
  )
}

export default TasksList
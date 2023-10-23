import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import {useDispatch} from 'react-redux'
import { deleteTodo, editTodo } from '../Features/TodoSlice'
const Task: React.FC<Todo> = ({id,name,completed}) => {
    // const{id,name,completed}= props
    const[status,setStatus]=useState<string>('edit')
    const[text,setText]=useState<string>(name)
    const[isCompleted,setIsCompleted]= useState(completed)
    const dispatch= useDispatch()
    useEffect(()=>{
        handleontaskchange()
    },[isCompleted])
    const handleonchange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }
    const handleonedit=(e:React.SyntheticEvent)=>{
      if(status==='edit'){
        setStatus('save')
      }else{
        dispatch(editTodo({id,name:text,isCompleted}))
        setStatus('edit')}
    }

    const handleontaskchange=()=>{
      // setIsCompleted(!isCompleted)
      dispatch(editTodo({id,name:text,isCompleted}))
    }
  return (
    <div>
        <input type='checkbox' onClick={()=>setIsCompleted(!isCompleted)}/>
        {status==='edit'? name:<input type='text' name='task' value={text} onChange={handleonchange}/>}
        <button onClick={handleonedit}>{status==='edit'?'edit':'save'}</button>
        <button onClick={()=>dispatch(deleteTodo({id}))}>delete</button>
    </div>
  )
}

export default Task
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/TodoSlice'

const InputField = () => {
    const[text,setText] =useState<string>('')
    const[finalText,setFinalText] =useState<string>('')

    useEffect(()=>{
        handlefocus()
    },[])
    const dispatch = useDispatch()
    const inputRef= useRef<HTMLInputElement| null>(null)

    const handlefocus=(): void=>{
        inputRef.current?.focus()
    }

    const handleonchange=(e: React.ChangeEvent<HTMLInputElement>): void=>{
        setText(e.target.value)
    }

    const handleonsubmit=(): void=>{
        setFinalText(text)
        dispatch(addTodo({name:text}))
        setText('')
    }

  return (
    <div>
        <input ref={inputRef} type='text' value={text} name='task' onChange={handleonchange}/>
        <Button onclick={()=>handleonsubmit()}/>
    </div>
  )
}

export default InputField
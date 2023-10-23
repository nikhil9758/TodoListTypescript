import {createSlice} from '@reduxjs/toolkit' 
import Todo from '../Components/Todo'
import taskItems from '../TaskItem'

interface TodoState{
    todo:Todo[]
}

const initialState: TodoState={
    todo:[...taskItems]
}

const TodoSlice=createSlice({
    name: 'Todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const{name}= action.payload
            state.todo=[...state.todo,{id:state.todo.length+1,name,completed:false}]
            console.log("herecome")
        },
        editTodo:(state,action)=>{
            const{id,name,isCompleted}=action.payload
            state.todo=state.todo.map((item : Todo)=>{
                if(item.id===id){
                    return {...item,name,completed:isCompleted}
                }else{
                    return item
                }
            })
        },
        deleteTodo:(state,action)=>{
            const{id}=action.payload
            console.log(id)
            state.todo=state.todo.filter((item)=>item.id!==id)
        }
    }
})

export const {addTodo, deleteTodo, editTodo}= TodoSlice.actions

export default TodoSlice.reducer
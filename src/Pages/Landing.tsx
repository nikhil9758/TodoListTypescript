import React from 'react'
import InputField from '../Components/InputField'
import Button from '../Components/Button'
import TasksList from '../Components/TasksList'
// import taskItems from '../TaskItem'

const Landing : React.FC= () => {
  return (
    <div>
        <div style={{display:'flex'}}>
            <InputField/>
            {/* <Button/> */}
        </div>
        active tasks
        <TasksList/>
        completed tasks
    </div>
  )
}

export default Landing
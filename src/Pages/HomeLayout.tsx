import React from 'react'
import { Outlet } from 'react-router-dom'
 
const HomeLayout = () => {
  return (
    <div>
        Taskify
        <Outlet/>
    </div>
  )
}

export default HomeLayout
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomeLayout from './Pages/HomeLayout';
import Landing from './Pages/Landing';
import { Provider } from 'react-redux';
import store from './store';
// import  from 'react-redux'

const router=createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    children:[
      {
        index: true,
        element:<Landing/>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <Provider store={store}>
         <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;

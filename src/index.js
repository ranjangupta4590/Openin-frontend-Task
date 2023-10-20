import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from 'react-router-dom';
import App from './App';
import Signin from './component/Signin';
import Protected from './component/authen/Protected';
import Dashboard from './component/Dashboard';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/signin' element={<Signin/>} />
      <Route path='/' element={<Protected/>}>
         <Route path='/' index element={<Dashboard/>} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router= {router} />
)

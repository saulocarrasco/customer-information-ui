import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import RootLayout from './routes/RootLayout';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';

var router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children:[
    {path: '/customer', element: <CustomerForm/>},
    {path: '/customer/:id', element: <CustomerForm/>},
    {path: '/customers-list', element: <CustomerList/>}
  ]}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

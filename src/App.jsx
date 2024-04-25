import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

import './App.css'

import { Header } from './components/header/Header';
import { Invoices } from './features/invoice/Invoices'
export const App = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <RouterProvider router={router}/>
      </main>
    </>
  )
}
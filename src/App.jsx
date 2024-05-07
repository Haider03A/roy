import { useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom';

import { Header } from './components/header/Header';
import './App.css'


export const App = () => {
  return (
    <div>
      <Header />
      <main className='container pt-3'>
        <Outlet />
      </main>
    </div>
  )
}
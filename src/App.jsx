import { useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom';

import { Header } from './components/header/Header';
import './App.css'


export const App = () => {
  const {popUpActive} = useSelector(state => state.invoice)
  return (
    <div className='min-h-[500px] h-screen'>
      <Header />
      <main className='h-[calc(100%-64px)] container pt-3'>
        <Outlet />
      </main>
    </div>
  )
}
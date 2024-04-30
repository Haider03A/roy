import { useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom';

import { Header } from './components/header/Header';
import './App.css'


export const App = () => {
  const popUpActive = useSelector(state => state.invoice.popUpActive)
  return (
    <div className={`${popUpActive ? 'h-screen overflow-y-hidden' : ''}`}>
      <Header />
      <main className='container pt-3'>
        <Outlet />
      </main>
    </div>
  )
}
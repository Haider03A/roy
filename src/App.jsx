import { Outlet } from 'react-router-dom';

import { Header } from './components/header/Header';
import './App.css'


export const App = () => {

  return (
    <div className='h-dvh'>
      <Header />

      <main className='h-[calc(100%-64px)] container pt-3'>
        <Outlet />
      </main>
    </div>
  )
}
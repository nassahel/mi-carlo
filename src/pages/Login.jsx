import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Vcomplet from '../components/vcomplet'
import Vbasic from '../components/Vbasic'
import HeaderLog from '../components/HeaderLog'
import Footer from '../components/Footer'



const Login = () => {
  const act = 'border-b-4 border-b-red-600 text-center pb-1 text-red-600 w-full';
  const noAct = 'border-b-2 border-b-slate-400 pb-1 text-center w-full'

  // const versBas = noAct
  const [versComp, setVersComp] = useState(act);
  const [versBas, setVersBas] = useState(noAct);



  const activComp = () => {
    setVersComp(act);
    setVersBas(noAct)
  }
  const activBas = () => {
    setVersComp(noAct); setVersBas(act)
  }

 

  return (
    <div className='h-screen  subpixel-antialiased'>
      <HeaderLog />
      <main className='p-3 h-claro '>
        <section className='claro-shadow bg-white rounded-md p-4 max-w-2xl mx-auto'>
          <h2 className='font-bold text-lg text-center mb-6'>Ingresá a Carlo</h2>
          <div className='flex justify-evenly text-sm mb-4'>
            <Link to='/vcomp' onClick={activComp} className={versComp}>VERSIÓN COMPLETA</Link>
            <Link to='/vbas' onClick={activBas} className={versBas}>VERSIÓN BÁSICA</Link>
          </div>
          <Routes>
            <Route path='vcomp' element={<Vcomplet />} />
            <Route path='vbas' element={<Vbasic />} />
          </Routes>
        </section>
      </main>
      <Footer />

    </div>
  )
}

export default Login
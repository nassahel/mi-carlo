import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const vcomplet = () => {

  // VALIDAR CORREO
  const [corr, setCorr] = useState('');
  const [valid, setValid] = useState('');


  return (
    <div className=''>
      <form action="">
        <input value={corr} onChange={(e) => { setCorr(e.target.value) }} type="email" name="" placeholder='E-mail' id="" className='border border-slate-300 p-4 text-md rounded-md w-full mb-2 focus:outline-none active:outline-none' />
        <Link className='text-xs pl-3 text-cyan-600 '>Olvidé mi e-mail</Link>
        <div className='flex mt-3'>
          <input type="checkbox" className='w-5 mr-3 checked:bg-cyan-800' defaultChecked name="" id="" />
          <p className='text-sm'>Mantenerme conectado</p>
        </div>

        <div className='w-full mt-8'>
          <Link to='/pass' className='block boton-shadow text-center text-white bg-red-600 py-2 rounded-full'>Continuar</Link>
        </div>
        <div className='text-center mt-5'>
          <p>¿Aún no te registraste?</p>
          <Link to='/register'  className='block text-cyan-600 hover:text-cyan-700 border border-cyan-600 py-2 mt-2 rounded-full'>Registrarme</Link>
        </div>

      </form>
    </div>
  )
}

export default vcomplet
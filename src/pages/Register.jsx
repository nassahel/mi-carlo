import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import HeaderLog from '../components/HeaderLog'
import { useState } from 'react'

const Register = () => {


  const [eye, setEye] = useState(true)

  const changeIcon = () => {
    eye == true ? setEye(false) : setEye(true);
  }
  const eyeIcon = <EyeIcon onClick={changeIcon} className="h-6 w-6 text-gray-500" />;
  const eyeSlashIcon = <EyeSlashIcon onClick={changeIcon} className="h-6 w-6 text-gray-500" />;


  return (

    <div className='h-screen'  >
      <HeaderLog />
      <div className='h-claro p-3'>
        <form action="" className='claro-shadow bg-white rounded-md  p-4 max-w-2xl mx-auto'>
          <p className='text-center mb-5 font-bold text-lg'>Registrate en Carlo </p>
          <input className='border border-slate-300 p-4 rounded-md w-full mb-5' type="text" name="" id="" placeholder='Nombre' />
          <input className='border border-slate-300 p-4 rounded-md w-full mb-5' type="text" name="" id="" placeholder='Apellido' />
          <input className='border border-slate-300 p-4 rounded-md w-full mb-5' type="email" name="" id="" placeholder='E-mail' />
          <div className='flex items-center'>

            <div className='border border-slate-300 p-4 rounded-md w-full mb-5 flex '>
              <input type={eye ? 'password' : 'text'} name="" placeholder='Contraseña nueva' id="" className='w-full active:outline-none focus:outline-none number-input' />
              {eye ? eyeSlashIcon : eyeIcon}
            </div>
          </div>

          <div className='flex items-center'>
            <div className='border border-slate-300 p-4 rounded-md w-full mb-2 flex '>
              <input type={eye ? 'password' : 'text'} name="" placeholder='Repetir contraseña nueva' id="" className='w-full active:outline-none focus:outline-none number-input' />
              {eye ? eyeSlashIcon : eyeIcon}
            </div>
          </div>

          <div className='w-full mt-10'>
            <Link className='block boton-shadow text-center text-white bg-red-600 py-2 rounded-full'>Registrarte</Link>
          </div>
          <div className='text-center mt-6'>
          <p>¿Ya estás registrado?</p>
          <Link to='/vcomp'  className='block text-cyan-600 hover:text-cyan-700 border border-cyan-600 py-2 mt-2 rounded-full'>Ingresar</Link>
        </div>


        </form>
      </div>
      <Footer />



    </div>
  )
}

export default Register
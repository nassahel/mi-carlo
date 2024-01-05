import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer className='text-xs pl-4 bg-white border border-t-gray-300 pt-2  w-full h-16 flex flex-col justify-center bottom-0'>
    <p className='mb-2'>Todos los derechos reservados, Carlo 2024</p>
    <Link className=' text-cyan-600'>Legal y Regulatorio</Link>
   </footer>
  )
}

export default Footer
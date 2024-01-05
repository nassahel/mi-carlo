import React from 'react'
import { Link } from 'react-router-dom'

const FooterTwo = () => {
  return (
    <section className='text-xs pl-4 bg-white border border-t-gray-300 pt-2  w-full h-16 flex flex-col justify-center bottom-0'>
    <p className='mb-2'>Información legal</p>
    <Link className=' text-cyan-600'>Defensa de las y los consumidores. Para reclamos ingrese aquí</Link>
   </section>
  )
}

export default FooterTwo
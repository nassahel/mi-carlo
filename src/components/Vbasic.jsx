import React from 'react'
import { Link } from 'react-router-dom'
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

const vbasic = () => {
  return (
    <div>
      <form action="">
        <p className='text-center mb-4'>Te enviaremos un PIN de verificación por SMS.</p>

        <div className='flex items-center'>
          <div className='border text-lg border-slate-300 p-3 rounded-md w-full mb-2 flex active:border-b-black focus:outline-b-black active:outline-b-2 outline:border-b-2'>
            <DevicePhoneMobileIcon className="h-6 w-6 text-gray-500 mr-3" />
            <input type="number" name=""  placeholder='Número de línea' id="" className='w-full active:outline-none focus:outline-none number-input' />
          </div>
          <InformationCircleIcon className="w-7 text-gray-500 ml-3" />
        </div>

        <p className='text-xs pl-3 text-gray-500 '>Código de área + línea (10 dígitos). Ej: 33855467378</p>

        <div className='w-full mt-8'>
          <Link className='block boton-shadow text-center text-white bg-red-600 py-2 rounded-full'>Enviar PIN</Link>
        </div>

      </form>
    </div>
  )
}

export default vbasic
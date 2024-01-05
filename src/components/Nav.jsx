import { useState } from 'react'
import { Bars3Icon, DevicePhoneMobileIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import { Link } from 'react-router-dom';
import anonUser from "../assets/images/user.png";


const Nav = () => {

  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className={` ${!open && "opacity-0 hidden"} w-full min-h-screen bg-black/50 fixed top-0 left-0 right-0 transition-all duration-300`} onClick={() => setOpen(false)}></div>

      <div className={` ${!open ? "w-0" : "w-72"} bg-white min-h-screen fixed top-0 left-0 overflow-hidden transition-all duration-300`}>
        <div className='bg-red-600 w-full px-4 py-4 border-b-xs pr-12 hover:bg-red-700 duration-300'>
          <Link className='flex'>
            <img src={anonUser} alt="" className='w-9 h-9' />
            <div className='text-white ml-3'>
              <p className='font-md'>nasaelias@hotmail.com</p>
              <p className='text-xs'> Ver perfil</p>
            </div>
          </Link>
        </div>
        <div className='bg-red-600 hover:bg-red-700 duration-300 w-full px-4 py-4 text-white  border-b-xs'>
          <Link className='flex'>
            <DevicePhoneMobileIcon className=" w-5 text-white mr-2" />
            <p>Nassa</p>
            <ChevronRightIcon className=" w-6 text-white ml-auto" />
          </Link>
        </div>
        <div className='bg-red-600 hover:bg-red-700 duration-300 px-4 w-full py-4 text-white  border-b-xs'>
          <Link className='flex'>
            <PlusCircleIcon className=" w-4 text-white mr-2" />
            <p className='truncate'>Asociar más líneas</p>
          </Link>
        </div>

        <XMarkIcon onClick={() => setOpen(false)} className={`${!open && "hidden"} transition-all duration-500 w-10 text-white p-2 fixed top-2 left-72 ml-2 hover:bg-black hover:bg-opacity-20 rounded-full cursor-pointer`} />
      </div>


      <nav className='bg-red-600 h-12  pl-2 pr-4  text-white subpixel-antialiased  font flex justify-between items-center'>
        <div className='flex items-center text-xl'>
          <div onClick={() => setOpen(true)} className='duration-200 p-2 rounded-full hover:bg-red-700 cursor-pointer '>
            <Bars3Icon className="h-6 w-6 text-white font-bold" />
          </div>
          <Link className='font-medium'>MiCarlo</Link>
        </div>
        <div className='bg-red-700 rounded-full px-4 py-1.5 hover:bg-red-800 duration-300 flex cursor-pointer'>
          <DevicePhoneMobileIcon className=" w-5 text-white mr-2" />
          <h2>Nassa</h2>
          <ChevronRightIcon className=" w-6 text-white ml-2" />
        </div>
      </nav>

    </div>

  )
}

export default Nav
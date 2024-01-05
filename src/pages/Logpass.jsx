import React from 'react';
import HeaderLog from '../components/HeaderLog';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';

const Logpass = () => {

    const [eye, setEye] = useState(true)

    const changeIcon = () => {
        eye == true ? setEye(false) : setEye(true);
    }
    const eyeIcon = <EyeIcon onClick={changeIcon} className="h-6 w-6 text-gray-500" />;
    const eyeSlashIcon = <EyeSlashIcon onClick={changeIcon} className="h-6 w-6 text-gray-500" />;




    return (
        <div className='h-screen'>
            <HeaderLog />
            <div className='h-screen p-3'>
                <form action="" className='claro-shadow bg-white rounded-md  p-4 max-w-2xl mx-auto'>
                    <p className='text-center mb-2 mt-6'>Ingresa la contraseña de <span className='font-bold'>correo@electronico.com</span> </p>

                    <div className='flex items-center'>
                        <div className='border border-slate-300 p-4 rounded-md w-full mb-2 flex '>
                            <input type={eye ? 'password' : 'text'} name="" placeholder='Contraseña' id="" className='w-full active:outline-none focus:outline-none number-input' />
                            {eye ? eyeSlashIcon : eyeIcon}
                        </div>

                    </div>

                    <Link className=' text-cyan-600 text-xs'>Olvidé mi contraseña</Link>

                    <div className='w-full mt-4'>
                        <Link to='/inicio' className='block boton-shadow text-center text-white bg-red-600 py-2 rounded-full'>Ingresar</Link>
                    </div>
                    <div className=' text-cyan-600 text-center text-md pt-8 pb-1 '>
                        <Link to='/vcomp' >Volver</Link>

                    </div>

                </form>
            </div>


            <Footer />

        </div>
    )
}

export default Logpass
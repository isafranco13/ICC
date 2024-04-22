"use client";
import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react'; // Import signOut
import type { User } from "next-auth";
import CustomButton from './CustomButton';
//import styles from './NavbarUser.module.css'; // Import styles module
import { BsList, BsX } from 'react-icons/bs';

const styles={
    navLinks: "rounded-full bg-emerald-50 font-semibold textButton flex ",
    navTextUser: "text-black text-center justify-center userName absolute"
}

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
        
        return (
                <header className="headerAdmin"> 
                    <nav className='navAdmin'>
                        <div className='divAdmin'>
                        <Link href="/admin/home" className="flex justify-center items-center sm:px-12">
                            <Image
                                src="/atomo.svg"
                                alt="atomo"
                                width={50}
                                height={50}
                                className="object-contain logo" 
                            />  <p className='navBarName'><strong>HealthSync</strong></p>
                        </Link><br/><br/>
                            <div className='divOptionsAdmin'>
                                <ul className='ulAdmin'> 
                                    <li className={`${styles.navLinks}`}> 
                                        <Link href="/admin/home">
                                            <CustomButton
                                                title="Inicio"
                                                btnType="button"
                                                containerStyles="text-green-700 rounded-full bg-emerald-50 font-semibold textButton w-44"
                                            />
                                        </Link>
                                    </li>
                                    <li className={`${styles.navLinks}`}> 
                                        <Link href="/admin/users">
                                            <CustomButton
                                                title="Lista usuarios"
                                                btnType="button"
                                                containerStyles="text-green-700 rounded-full bg-emerald-50 font-semibold textButton w-44"
                                            />
                                        </Link>                    
                                    </li>
                                    <li className={`${styles.navLinks}`}> 
                                        <Link href="/admin/altaTerapeuta">
                                            <CustomButton
                                                title="Alta terapeuta"
                                                btnType="button"
                                                containerStyles="text-green-700 rounded-full bg-emerald-50 font-semibold textButton w-44"
                                            />
                                        </Link>
                                    </li>
                                    <li className={`${styles.navLinks}`}> 
                                        <Link href="/admin/configApp">
                                            <CustomButton
                                                title="Aplicación"
                                                btnType="button"
                                                containerStyles="text-green-700 rounded-full bg-emerald-50 font-semibold textButton w-44"
                                            />
                                        </Link>                    
                                    </li>
                                    <li className={`${styles.navLinks}`}> 
                                        <Link href="/signin">
                                            <CustomButton
                                                title="Cerrar Sesión"
                                                btnType="button"
                                                containerStyles="text-green-700 rounded-full bg-emerald-50 font-semibold textButton w-44"
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                                <div onClick={toggleMenu} 
                                    className='sm:hidden cursor-pointer pl-24'> 
                                        <BsList className='h-8 w-8 text-pink-400'/>
                                </div>
                            </div>                            
                            <div className= {
                                menuOpen
                                ? 'fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#f5fffb] p-10 ease-in-out duration-500'
                                : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500'
                                }
                            >
                                <div className='flex w-full items-center justify-end'>
                                    <div onClick={toggleMenu} 
                                        className='cursor-pointer'>
                                            <BsX className='h-8 w-8 text-pink-400'/>
                                    </div>
                                </div>
                            
                                    <div className='flex-col py-4'>
                                        <ul>
                                            <li onClick={() => setMenuOpen(false)} 
                                                className='links'>
                                                    <Link href="/admin/home">
                                                        Inicio
                                                    </Link>
                                            </li>
                                            <li onClick={() => setMenuOpen(false)} 
                                                className='links'>
                                                    <Link href="/admin/users">
                                                        Lista usuarios
                                                    </Link>
                                            </li>
                                            <li onClick={() => setMenuOpen(false)} 
                                                className='links'>
                                                    <Link href="/admin/altaTerapeuta">
                                                        Alta terapeuta
                                                    </Link>
                                            </li>
                                            <li onClick={() => setMenuOpen(false)} 
                                                className='links'>
                                                    <Link href="/admin/configApp">
                                                        Aplicación
                                                    </Link>
                                            </li>
                                            <li onClick={() => setMenuOpen(false)} 
                                                className='links'>
                                                    <Link href="/admin">
                                                        Cerrar sesión
                                                    </Link>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                    </nav>
        </header>
        )
}

export default Navbar;
  ;




/*import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { CustomButton } from '@/components';

const NavbarAdmin = () => {
    
    return (
        <header className="w-full absolute z-10"> 

            <nav className="h-full fixed top-0 left-0 bg-violet-700	 text-white p-4">
                <div className="mb-4">
                    <Link href="/" className="flex justify-center items-center">
                        <Image
                            src="/atomo.svg"
                            alt="atomo"
                            width={50}
                            height={50}
                            className="object-contain logo" 
                        />  
                        <p className='navBarName'><strong>HealthSync</strong></p>
                    </Link>
                </div>

                <div className="NavAdminDiv">
                    <Link href="/signup">
                        <CustomButton
                            title="Crear Cuenta"
                            btnType="button"
                            containerStyles="text-white rounded-full bg-pink-400 font-semibold textButton"
                        />
                    </Link>
                    <Link href="/signin">
                        <CustomButton
                            title="Iniciar Sesión"
                            btnType="button"
                            containerStyles="text-white rounded-full bg-pink-400 font-semibold textButton"
                        />
                    </Link>                    
                </div>
            </nav>
        </header>
    )
}

export default NavbarAdmin;
*/

/*
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { BsList, BsX } from 'react-icons/bs';

import CustomButton from './CustomButton';
import React, { useState } from 'react';

const styles={
    navLinks: "ml-10 uppercase border-b border-white hover:border-(#F6B519) text-xl",
};

const NavbarAdmin = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    
    return (
        <header> 
            <nav className="h-full w-full shadow-xl bg-black">

                {/*Desktop menu*//*}/*
                <div className='flex items-center justify-between h-full px-4'>
                    <Link href="/" className="flex justify-center items-center">
                        <Image
                            src="/atomo.svg"
                            alt="atomo"
                            width={50}
                            height={50}
                            className="object-contain logo cursor-pointer" 
                        />  <p className='navBarName'><strong>HealthSync</strong></p>
                    </Link>
                    <div className='text-white hidden sm:flex'>                        <ul className='hidden sm:flex'>
                            <li className={styles.navLinks}>
                                <Link href="/admin">About</Link>
                            </li>
                            <li className={styles.navLinks}>
                                <Link href="/admin">Contact</Link>
                            </li>                            
                            <li className='flex items-center space-x-5 text-[#F6B519] ml-10'>
                                <h3 className='cursor-pointer border border-[#F6B519] px-4 py-1 rounded-full bg-[#F6B519]
                                    text-black hover:bg-black hover:text-[#F6B519] ease-in-out duration-300'>Idk</h3>
                            </li>
                        </ul>
                    </div>

                    {/*Mobile menu*//*}/*
                    <div className="sm:hidden cursor-pointer pl-24">
                        <BsList className="h-8 w-8 text-[#F6B519]"/>
                    </div>
                </div>

                <div className={
                    menuOpen 
                    ? 'fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500' 
                    : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500'
                    }
                >

                    <div className='flex w-full items-center justify-end'>
                        <div onClick={toggleMenu}
                        className='cursor-pointer'>
                            <BsX className="h-8 w-8 text-[#F6B519]"/>
                        </div>
                    </div>

                    {/*Mobile Menu Links*//*}/**//*
                    <div className='flex-col py-4'>
                        <ul>
                            <li onClick={() => setMenuOpen(false)}
                            className='py-4 hover:underline hover:decoration-[#F6B519]'><Link href="/admin">About</Link></li>

                            <li onClick={() => setMenuOpen(false)}
                            className='py-4 hover:underline hover:decoration-[#F6B519]'><Link href="/admin">Contact</Link></li>
                            <li className='flex items-center py-4 text-[#F6B519]'>
                                <p className='cursor-pointer px-4 py-1 rounded-full bg-[#F6B519] text-black hover:bg-black 
                                    hover:text-[#F6B519] ease-in-out duration-300'>Idk</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
         </header>
    )
}

export default NavbarAdmin
*/





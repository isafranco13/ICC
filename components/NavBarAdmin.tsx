"use client";
import { useState } from 'react'
import  styles from './Navbar.module.css';

function Navbar() {
        // adding the states 
        const [isActive, setIsActive] = useState(false);
        //add the active class
        const toggleActiveClass = () => {
            setIsActive(!isActive);
        };
        //clean up function to remove the active class
        const removeActive = () => {
            setIsActive(false)
        }
        return (
            <div className="App">
                <header className="App-header">
                    <nav className={`${styles.navbar}`}>
                         {/* logo */}
                        <img
                            src="/atomo.png"
                            alt="atomo"
                            width={80}
                            height={48}
                            className=""/>
                        <a href='#home' className={`${styles.logo}`}>HealthSync </a>
                        <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                            <li onClick={removeActive}>
                                <a href='#home' className={`${styles.navLink}`}>Inicio</a>
                            </li>
                            <li onClick={removeActive}>
                                <a href='#home' className={`${styles.navLink}`}>Lista usuarios</a>
                            </li>
                            <li onClick={removeActive}>
                                <a href='#home' className={`${styles.navLink}`}>Alta terapista</a>
                            </li>
                            <li onClick={removeActive}>
                                <a href='#home' className={`${styles.navLink}`}>Aplicación</a>
                            </li>
                            <li onClick={removeActive}>
                                <a href='#home' className={`${styles.navLink}`}>Cerrar sesión</a>
                            </li>
                        </ul>
                        <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
                            <span className={`${styles.bar}`}></span>
                            <span className={`${styles.bar}`}></span>
                            <span className={`${styles.bar}`}></span>
                        </div>
                    </nav>
                </header>
            </div>
        );
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





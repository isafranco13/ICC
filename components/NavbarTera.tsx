"use client"
import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react'; // Import signOut
import type { User } from "next-auth";
import CustomButton from './CustomButton';
//import styles from './NavbarUser.module.css'; // Import styles module
import { BsList, BsX } from 'react-icons/bs';

type Props ={
    user: User,
}

const styles={
    navLinks: "rounded-full bg-pink-400 font-semibold textButton m-3",
    navTextUser: "text-black text-center justify-center userName mt-6 m-3"
}

const NavbarTera = () => {
    const { data: session }: any = useSession();

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

            return (
                    <header>
                        <nav className='w-full h-24'> {/*<nav className={`${styles.navbar}`}>*/}
                            <div className='flex items-center justify-between h-full px-4 w-full'>
                            <Link href="/" className="flex justify-center items-center sm:px-12">
                                <Image
                                    src="/atomo.svg"
                                    alt="atomo"
                                    width={50}
                                    height={50}
                                    className="object-contain logo" 
                                />  <p className='navBarName'><strong>HealthSync</strong></p>
                            </Link>
                                <div className='text-white hidden sm:flex'>
                                    <ul className='hidden sm:flex'> {/*<ul className={`${styles.navMenu}`}>*/}
                                    <li className={`${styles.navTextUser}`}> 
                                            <Link href="/terapeuta">
                                                <strong>Perfil</strong>
                                            </Link>
                                        </li>
                                        <li className={`${styles.navTextUser}`}> 
                                        {session && session.user && session.user.name} {/*{session?.user?.name}*/}
                                        </li>
                                        <li className={`${styles.navLinks}`}> 
                                            <button onClick={() => {signOut();}} 
                                                className="text-white rounded-full bg-pink-400 font-semibold textButtonSignOut">
                                                Cerrar Sesión
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                
                                    {/*Mobile Menu*/}
                                    <div onClick={toggleMenu} 
                                        className='sm:hidden cursor-pointer pl-24'> {/*<div className={`${styles.hamburger}`}>*/}
                                            <BsList className='h-8 w-8 text-pink-400'/>
                                    </div>
                                </div>                            
                                <div className= {
                                    menuOpen
                                    ? 'fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#f5fffb] p-10 ease-in-out duration-500' 
                                    : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500'
                                    } 
                                > {/* bg-[#f5fffb]  */}
                                    <div className='flex w-full items-center justify-end'>
                                        <div onClick={toggleMenu} 
                                            className='cursor-pointer'>
                                                <BsX className='h-8 w-8 text-pink-400'/>
                                        </div>
                                    </div>
                                
                                {/*Mobile Menu Links*/}
                                        <div className='flex-col py-4'>
                                            <ul>
                                                <li onClick={() => setMenuOpen(false)} 
                                                    className='py-4 text-2xl'>
                                                            {session && session.user && session.user.name}
                                                </li>
                                                <li onClick={() => setMenuOpen(false)} 
                                                    className='py-4 hover:underline hover:decoration-[#e669d1fa] text-base'>
                                                        <Link href="/terapeuta">
                                                            Perfil
                                                        </Link>
                                                </li>
                                                <li onClick={() => setMenuOpen(false)} 
                                                    className='py-4 text-base'>
                                                    <button onClick={() => {signOut();}} 
                                                        className="text-black font-semibold hover:underline hover:decoration-[#e669d1fa]">
                                                        Cerrar Sesión
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                        </nav>
                    </header>
   
    )
}

export default NavbarTera
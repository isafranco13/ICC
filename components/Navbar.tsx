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
    navLinks: "rounded-full bg-pink-400 font-semibold textButton m-3",
    navTextUser: "text-black text-center justify-center userName mt-6 m-3"
}

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    
    return (
        <header className="w-full absolute z-10"> 
                        <nav className='w-full h-24'>
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
                                    <ul className='hidden sm:flex'> 
                                        <li className={`${styles.navLinks}`}> 
                                            <Link href="/signup">
                                                <CustomButton
                                                    title="Crear Cuenta"
                                                    btnType="button"
                                                    containerStyles="text-white rounded-full bg-pink-400 font-semibold textButton"
                                                />
                                            </Link>
                                        </li>
                                        <li className={`${styles.navLinks}`}> 
                                            <Link href="/signin">
                                                <CustomButton
                                                    title="Iniciar Sesión"
                                                    btnType="button"
                                                    containerStyles="text-white	rounded-full bg-pink-400 font-semibold textButton"
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
                                                    className='py-4 hover:underline hover:decoration-[#e669d1fa] text-base'>
                                                        <Link href="/signup">
                                                            Crear Cuenta
                                                        </Link>
                                                </li>
                                                <li onClick={() => setMenuOpen(false)} 
                                                    className='py-4 hover:underline hover:decoration-[#e669d1fa] text-base'>
                                                        <Link href="/signin">
                                                            Iniciar Sesión
                                                        </Link>
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                        </nav>
         </header>
    )
}

export default Navbar





/*
"use client";
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
    navLinks: "rounded-full bg-pink-400 font-semibold textButton m-3"
}

const NavbarUser = () => {
    const { data: session }: any = useSession();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

            return (
                    <header>
                        <nav className='w-full h-24 shadow-xl bg-yellow-100'> 
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
                                <ul className='hidden sm:flex'> 
                                    <li className={`${styles.navLinks}`}> 
                                        <Link href="/signup">
                                            <CustomButton
                                                title="Crear Cuenta"
                                                btnType="button"
                                                containerStyles='text-white'
                                            />
                                        </Link>
                                    </li>
                                    <li className={`${styles.navLinks}`}> 
                                        <Link href="/signin">
                                        <CustomButton
                                            title="Iniciar Sesión"
                                            btnType="button"
                                            containerStyles="text-white"
                                        />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                                <div onClick={toggleMenu} 
                                    className='sm:hidden cursor-pointer pl-24'> 
                                        <BsList className='h-8 w-8 text-red-500'/>
                                </div>
                            </div>                            
                            <div className= {
                                menuOpen
                                ? 'fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500'
                                : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500'
                                }
                            >
                                <div className='flex w-full items-center justify-end'>
                                    <div onClick={toggleMenu} 
                                        className='cursor-pointer'>
                                            <BsX className='h-8 w-8 text-red-500'/>
                                    </div>
                                </div>
                            
                                        <div className='flex-col py-4'>
                                            <ul>
                                                <li onClick={() => setMenuOpen(false)} 
                                                    className='py-4 hover:underline hover:decoration-[#e669d1fa]'>
                                                        <Link href="/about">
                                                            Crear Cuenta
                                                        </Link>
                                                </li>
                                                <li onClick={() => setMenuOpen(false)} 
                                                    className='py-4 hover:underline hover:decoration-[#e669d1fa]'>
                                                        <Link href="/contact">
                                                            Iniciar Sesión
                                                        </Link>
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                        </nav>
                    </header>
   
    )
}

export default NavbarUser
*/

/*

HTML
<button id="optionsButton">Opciones</button>
<div id="optionsContainer" style="display: none;">
    <a href="/signup">Crear Cuenta</a>
    <a href="/signin">Iniciar Sesión</a>
</div>

JS
const optionsButton = document.getElementById('optionsButton');
const optionsContainer = document.getElementById('optionsContainer');

optionsButton.addEventListener('click', function() {
    optionsContainer.classList.toggle('show');
});




CSS
#optionsContainer {
    display: none;
}

@media (max-width: 414px) {
    #optionsContainer {
        display: block;
    }
}


*/
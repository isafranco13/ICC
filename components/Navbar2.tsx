"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import CustomButton from './CustomButton';

const Navbar2 = () => {
    
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
                </div>
            </nav>
         </header>
    )
}

export default Navbar2;

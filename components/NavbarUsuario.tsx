"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react'; // Import signOut
import type { User } from "next-auth";
import CustomButton from './CustomButton';

type Props ={
    user: User,
}
const NavbarUsuer = () => {
    const { data: session }: any = useSession();

    return (
        <header className="w-full absolute z-10"> 
            <nav className="mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/dashboardU" className="flex justify-center items-center">
                    <Image
                        src="/atomo.svg"
                        alt="atomo"
                        width={50}
                        height={18}
                        className="object-contain logo" 
                    /> <p className='navBarName'><strong>HealthSync</strong></p>
                </Link>

                <div className="ml-auto flex space-x-5 items-center">
                    <a href="/historial_c"><strong>Historial Clinico</strong></a>
                    <div className='text-black text-center justify-center userName'>
                    {session?.user?.name} {/*{session && session.user && session.user.name} */}
                    </div>
                    <button onClick={() => {signOut();}} 
                        className="text-white rounded-full bg-pink-400 font-semibold textButtonSignOut">
                        Cerrar Sesión
                    </button>
                </div>
                
            </nav>
         </header>
    )
}

export default NavbarUsuer
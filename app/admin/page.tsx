"use client"
import Link from "next/link"
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import {signIn, useSession} from 'next-auth/react'
import { Navbar2 } from "@/components";
import { useRouter } from "next/navigation";
import React, {useEffect, useState} from "react";

<<<<<<< HEAD
export default function Home() {

    return (
        
        <main className="overflow-hidden">

            <div>
                <h1>Bienvenido admin</h1>
            </div>
=======
export default function Form(){
    const router = useRouter();

    return(
        <>
        <Navbar2 />

        <main className="flex flex-col justify-center items-center w-full flex-1">
            <br /><br /><br /><br />
            <div className="flex max-w-2xl yellowContainer"> {/*div principal */}
                {/*Sección de iniciar sesión*/}
                <div className="logoContainer"> 
                    <Image
                        src="/atomo.png"
                        alt="atomo"
                        width={80}
                        height={48}
                        className="object-contain mx-auto logoSignIn" 
                    />
                    <div className="divYellowContainer"><h1 className="text-3xl font-bold text-center titleSignIn">Iniciar Sesión</h1><br />
                        <div className="flex flex-col w-full pl-4">
                            <form className="flex flex-col items-center w-full">                                 
                                <input type="text" className="bg-white rounded-lg outline-none text-base h-12 pl-2 w-3/4 input" placeholder="Usuario"/>
                                <br />
                                <input type="password" className="bg-white rounded-lg outline-none text-base h-12 pl-2 w-3/4 input" placeholder="Contraseña"/>
                            
                                <CustomButton
                                    btnType="submit"
                                    title="Iniciar Sesión"
                                    containerStyles="text-white rounded-full bg-[#FC83A1] hover:bg-[#E55E7F] font-medium mt-10 textButton"
                                />
                            </form><br />                    
                        </div>
                    </div>
                </div>
            </div> <br />
>>>>>>> dba5574d2b0e42eca59c4b2c5b7a5949e480babf
        </main>
        </>
    )
}









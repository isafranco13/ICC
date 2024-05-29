"use client"
import Link from "next/link"
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import {signIn, useSession} from 'next-auth/react'
import { Navbar2 } from "@/components/Navbar2";
import { useRouter } from "next/navigation";
import React, {useEffect, useState} from "react";

export default function Form(){
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();
    
    useEffect(() => {
        if (sessionStatus === "authenticated") {
            if(session?.user?.roles[0] === "usuario"){
                router.push("/usuario"); //router.replace
        }else if(session?.user?.roles[0] === "terapeuta"){
            router.push("/terapeuta");
        }else if(session?.user?.roles[0] === "admin"){
            router.push("/admin");
        }
        }
        
    }, [sessionStatus, router]);
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
                            
                            <a href="/admin/home">Abrir</a>
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
        </main>
        </>
    )
}









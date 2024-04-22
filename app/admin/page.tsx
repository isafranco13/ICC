"use client"
import Link from "next/link"
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import {signIn, useSession} from 'next-auth/react'
import { Navbar2 } from "@/components";
import { useRouter } from "next/navigation";
import React, {useEffect, useState} from "react";
import CustomAlert from '@/components/CustomAlert';

export default function Form(){
    const router = useRouter();
    // const session = useSession();
    const { data: session, status: sessionStatus } = useSession();
    const [alertMessage, setAlertMessage] = useState(""); // Mensaje de alerta
    const [isVisible, setIsVisible] = useState(false);

    
    /*useEffect(() => {
        if (sessionStatus === "authenticated") {
            if(session?.user?.role === "usuario"){
                router.replace("/usuario");
        }else if(session?.user?.role === "terapeuta"){
            router.replace("/terapeuta");
        }
    }
    }, [sessionStatus, router]);*/
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setAlertMessage("Contraseña y/o correo eléctronico incorrecto");
            setIsVisible(true);
           if (res?.url) router.replace("/admin");
        }
    };

    if (sessionStatus === "loading") {
        return <h1>Loading...</h1>;
    }
    
    
    return(
        <>
        <Navbar2 />

        <main className="flex flex-col justify-center items-center w-full flex-1 bg-[#F5FFFC]">
            <br /><br /><br /><br />
            <div className="flex max-w-3xl yellowContainer"> {/*div principal */}
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
                            <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>                                 
                                <input type="email" className="bg-white rounded-lg outline-none text-base h-12 pl-2 w-3/4 input" placeholder="Correo"/>
                                <br />
                                <input type="password" className="bg-white rounded-lg outline-none text-base h-12 pl-2 w-3/4 input" placeholder="Contraseña"/>
                            
                                <CustomButton
                                    btnType="submit"
                                    title="Iniciar Sesión"
                                    containerStyles="text-white rounded-full bg-[#FC83A1] hover:bg-[#E55E7F] font-medium mt-10 textButton"
                                />
                            </form><br />

                            {/* Renderizar alerta */}
                            {isVisible && (
                                <CustomAlert
                                    status="warning"
                                    variant="subtle"
                                    title="Error"
                                    description={alertMessage}
                                    setIsVisible={setIsVisible}
                                />
                            )}                            
                        </div>
                    </div>
                </div>
            </div> <br />
        </main>
        </>
    )
}
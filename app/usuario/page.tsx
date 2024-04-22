"use client"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from 'next/image';
import NavbarUsuario from "@/components/NavbarUsuario";
import {useSession} from 'next-auth/react';
//import React, {useState} from 'react';
//import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { useEffect } from 'react';


  
const Dashboard =  () => { // async ({user}: Props)  -> NO BORRAR ESTA EN PRUEBA
    //const session = getServerSession();
    //console.log(session)
    /*const session = await getServerSession(authOptions)
    if (!session) {
      redirect("/signin");
    }*/
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession()
    
    useEffect(() => {
        if (sessionStatus === "authenticated") {
            if (session?.user?.role === "usuario") {
                router.replace("/usuario");
            } else {
                router.replace("/terapeuta");
            }
        } else if (sessionStatus === "unauthenticated") {
            router.replace("/signin");
        }
    }, [sessionStatus, session, router]);
    return (
        <>                            <NavbarUsuario/>

                  {/*  <div className="containerUser">
                        <div className="navbarUser">
                            <NavbarUsuario/>
                        </div>/*}
                        <div>
                           {/*<pre>{JSON.stringify(session, null, 2)}</pre>*/} 
                           <p>Nombre: {session?.user?.name}</p>
                             <p>Rol: {session?.user?.role}</p>
                        
                        <div className="section-1 h-max">
                            <h1 className="font-bold text-2xl">Terapeutas</h1>
                                <div className="therapistAppointment">
                                    <div className="flex items-center"> 
                                        <Image
                                        src="/user.png"
                                        alt="perfil"
                                        width={66} //97
                                        height={66} //96
                                        className=" object-contain rounded-full bg-white " 
                                        />
                                    </div>
                                    <div className="ms-[15px] flex flex-col">
                                        <h2 className="subtitleHome">Psic. Lorena</h2>
                                        <div className="flex flex-row">
                                            <Image
                                            src="/reloj.png"
                                            alt="reloj"
                                            width={20} 
                                            height={20} 
                                            className=" object-contain" 
                                            />
                                            <p className="ms-[10px] font-medium text-[20px]">8:00-19:00</p>
                                        </div>

                                        <div className="flex flex-row">
                                            <Image
                                            src="/calendario.png"
                                            alt="calendario"
                                            width={20} 
                                            height={20} 
                                            className=" object-contain" 
                                            />
                                            <a href="#"><p className="ms-[10px] font-medium text-[20px] hover:text-[#05814E]">Ver agenda</p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/*fin seccion 1*/}




                            <div className="section-2 h-max">
                            <h1 className="font-bold text-2xl">Próxima Cita</h1>
                                <div className="therapistAppointment items-center">
                                    <div className="flex bg-white rounded-[29px] w-[70px] h-[70px] relative">
                                        <h3 className="pl-[10px] font-semibold text-[28px] absolute top-0 left-0">Jun</h3>
                                        <h3 className="pl-[20px] font-semibold text-[28px] absolute bottom-0 left-0">10</h3>
                                    </div>
                                    <div className="ms-[15px] flex flex-col">
                                        <h2 className="subtitleHome">Psic. Lorena</h2>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <div className="flex flex-row">
                                                    <Image
                                                    src="/reloj.png"
                                                    alt="reloj"
                                                    width={20} 
                                                    height={20} 
                                                    className=" object-contain mr-2" 
                                                    />
                                                    <p className="font-medium text-[20px]">10:00am</p>
                                                </div>

                                                <div className="flex items-center">
                                                    <Image
                                                    src="/ubicacion.png"
                                                    alt="ubi"
                                                    width={20} 
                                                    height={20} 
                                                    className=" object-contain mr-2 ms-[40px]" 
                                                    />
                                                    <a href="#"><p className="font-medium text-[20px] hover:text-[#05814E]">Ver ubicación</p></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/*fin seccion 2*/}
                   {/* </div>*/}
                </>
);
};

export default Dashboard;
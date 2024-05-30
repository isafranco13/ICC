"use client"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from 'next/image';
import NavbarUsuario from "@/components/NavbarUsuario";
import { useEffect, useState } from 'react';
import {useSession} from 'next-auth/react';
//import React, {useState} from 'react';
import { useRouter } from "next/navigation";


  
const Dashboard =  () => { // async ({user}: Props)  -> NO BORRAR ESTA EN PRUEBA
    //const session = getServerSession();
    //console.log(session)
    /*const session = await getServerSession(authOptions)
    if (!session) {
      redirect("/signin");
    }*/
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession()
    //console.log(session);
    //console.log(sessionStatus);
    const [citas, setCitas] = useState<{ _id: string, fecha: Date, hora: string, nombre: string, apellidoPaterno: string }[]>([]);
    //console.log("roles", session?.user?.roles[0])
    useEffect(() => {
        if (sessionStatus === "authenticated") {
            if (session?.user?.roles[0] === "usuario") {
                router.replace("/usuario");
            } else if(session?.user?.roles[0] === "terapeuta"){
                router.replace("/terapeuta");
            }/*else{
                router.replace("/admin");
            }*/
        } else if (sessionStatus === "unauthenticated") {
            router.replace("/signin");
        }
    }, [sessionStatus, session, router]);

    const [terapeutas, setTerapeutas] = useState<{ _id: string, nombre: string, apellidoPaterno: string, apellidoMaterno: string }[]>([]);

    useEffect(() => {
        if (session) {
            //const usuarioId = session.user.id;
            fetch(`/api/citasUsuario?usuarioId=${session.user.id}`)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        console.error(data.error);
                    } else {
                        setCitas(data);
                    }
                })
                .catch(error => {
                    console.error("Error al obtener citas del usuario:", error);
                });
        }
            fetch('/api/terapeutas')
                .then(response => response.json())
                .then(data => setTerapeutas(data.terapeutas));
    }, []);

    const formatNombreCompleto = (terapeuta: { nombre?: string, apellidoPaterno?: string, apellidoMaterno?: string }) => {
        const { nombre, apellidoPaterno, apellidoMaterno } = terapeuta;
        return `${nombre || ''} ${apellidoPaterno || ''} ${apellidoMaterno || ''}`.trim();
    };
    return (
        <>                            <NavbarUsuario/>

                  {/*  <div className="containerUser">
                        <div className="navbarUser">
                            <NavbarUsuario/>
                        </div>/*}
                        <div>
                           {/*<pre>{JSON.stringify(session, null, 2)}</pre>*/} 
                           {/*<p>Nombre: {session?.user?.name}</p>
                             <p>Rol: {session?.user?.roles[0]}</p>
    <p>Id: {session?.user?.id}</p>*/}
                        
                        <div className="section-1 h-max">
                <h1 className="font-bold text-2xl">Terapeutas</h1>
                {terapeutas.map((terapeuta) => (
                    <div key={terapeuta._id} className="therapistAppointment">
                        <div className="flex items-center">
                            <Image
                                src="/user.png"
                                alt="perfil"
                                width={66}
                                height={66}
                                className=" object-contain rounded-full bg-white "
                            />
                        </div>
                        <div className="ms-[15px] flex flex-col">
                            <h2 className="subtitleHome">{`Psic. ${formatNombreCompleto(terapeuta)}`}</h2>
                            <div className="flex flex-row">
                                <Image
                                    src="/reloj.png"
                                    alt="reloj"
                                    width={20}
                                    height={20}
                                    className=" object-contain"
                                />
                                <p className="ms-[10px] font-medium text-[20px]">8:00-16:00</p>
                            </div>

                            <div className="flex flex-row">
                                <Image
                                    src="/calendario.png"
                                    alt="calendario"
                                    width={20}
                                    height={20}
                                    className=" object-contain"
                                />
                                <a href="/usuario/agendar-cita"><p className="ms-[10px] font-medium text-[20px] hover:text-[#05814E]">Agendar cita</p></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="section-2 h-max">
                <h1 className="font-bold text-2xl">Próximas Citas</h1>
                {citas.length > 0 ? (
                    citas.map((cita) => (
                    <div key={cita._id} className="therapistAppointment items-center">
                        <div className="flex bg-white rounded-[29px] w-[70px] h-[70px] relative">
                        <h3 className="pl-[10px] font-semibold text-[28px] absolute top-0 left-0">
                            {new Date(cita.fecha).toLocaleString('es-ES', { month: 'short' })}
                        </h3>
                        <h3 className="pl-[20px] font-semibold text-[28px] absolute bottom-0 left-0">
                            {new Date(cita.fecha).getDate()}
                        </h3>
                        </div>
                        <div className="ms-[15px] flex flex-col">
                        <h2 className="subtitleHome">Psic. María Cristina Franco Terrazas</h2>
                        <div className="flex items-center">
                            <Image
                            src="/reloj.png"
                            alt="reloj"
                            width={20}
                            height={20}
                            className="object-contain mr-2"
                            />
                            <p className="font-medium text-[20px]">{cita.hora}</p>
                        </div>
                        </div>
                    </div>
                    ))
                ) : (
                    <p>No tienes citas programadas</p>
                )}
                </div>
        </>
    );
};
export default Dashboard;
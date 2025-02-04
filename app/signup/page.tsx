"use client"
import Link from "next/link"
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import Navbar2 from "@/components/Navbar2";
import {signIn, useSession} from 'next-auth/react';
import { useRouter } from "next/navigation";
import React, {useState} from "react";
import CustomAlert from '@/components/CustomAlert';

export default function Form(){
    const router = useRouter();
    //const {data: session}=useSession()
    const { data: session, status: sessionStatus } = useSession();
    const [alertMessage, setAlertMessage] = useState(""); // Mensaje de alerta
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
            const res = await fetch("/api/usuarios",{
                method: "POST",
                body: JSON.stringify(formData),
                headers:{
                    "Content-Type": "application/json"
                }
                
            })
            const data = await res.json(); // Aquí obtenemos el cuerpo de la respuesta
            //console.log(data.message); //respuesta de usuarios/route.js
            //console.log(data.message);//console.log(session); //debe decir la sesión de nuestro usuario
            if(data.message === "correo"){ //!res.ok &&
                setAlertMessage("Correo Electronico ya registrado, inicie sesión");
                setIsVisible(true);
            }else{
                router.replace("/usuario");
            }
           
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const startingUsuariosData={
        nombre: "",
        apellido: "",
        correo: "",
        contrasena: "",
        role: "usuario",
    };
    console.log(startingUsuariosData)
    const [formData, setFormData] = useState(startingUsuariosData);
    
        return(
            <>
                <Navbar2 />

                <main className="flex justify-center items-center w-full flex-1 main">
                    <br /><br /><br /><br />
                    <div className="divSignUp"> {/*div principal */}
                        <div className="w-full px-50"> {/*Sección de imagen y frase py-36 px-12*/}
                        <br /><br /><br /><br />
                            <h2 className="text-3xl text-[#FC83A1] font-bold cuidaTuMenteTitle" >Cuida tu mente 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transforma tu vida</h2>
                            <Image
                                src="/mental.png"
                                alt="mental"
                                width={1000}
                                height={1000}
                                className="cuidaTuMente" 
                            />
                        </div>
                        {/*Sección de crear cuenta*/}
                        <div className="container"> 
                        <div className="divYellowContainer"><h1 className="text-3xl font-bold titleSignIn">Crear Cuenta</h1><br />
                        
                            <form className="flex flex-col w-full pl-4" method="post" onSubmit={handleSubmit}>
                            <div className="flex flex-wrap"> {/* div de nombre y apellido*/}
                                <div className="w-1/2 pl-4"><p className="text-black font-medium form">Nombre</p>
                                <input value={formData.nombre} name="nombre"  id="nombre" type="text" className="bg-white rounded-lg outline-none text-base w-full h-9 pl-2" onChange={handleChange} required={true} /></div>
                                <div className="w-1/2 pl-4"><p className="text-black font-medium form">Apellido</p>
                                <input  name="apellido" id="apellido" type="text" className="bg-white rounded-lg outline-none text-base w-full h-9 pl-2"  onChange={handleChange} required={true} value={formData.apellido}/></div>
                            </div>
                            <div className="flex flex-col w-full pl-4">
                                <p className="text-black font-medium form">Correo</p>
                                <input id="correo" name="correo" type="email" className="bg-white rounded-lg outline-none text-base h-9 pl-2" onChange={handleChange} required={true} value={formData.correo}/>
                                <p className="text-black font-medium form">Contraseña</p>
                                <input id="contrasena" name="contrasena" type="password" className="bg-white rounded-lg outline-none text-base h-9 pl-2"  onChange={handleChange} required={true} value={formData.contrasena}/>
                                <p className="text-black font-medium form">Confirmar Contraseña</p>
                                <input type="password" className="bg-white rounded-lg outline-none text-base h-9 pl-2"/>
                                <CustomButton
                                    btnType="submit"
                                    title="Crear Cuenta"
                                    containerStyles="text-white rounded-lg bg-pink-400 min-w-[100px] font-medium textButton mt-5 hover:bg-[#E55E7F] h-10"
                                />
                                {isVisible && (
                                <CustomAlert
                                    status="warning"
                                    variant="subtle"
                                    title="Error"
                                    description={alertMessage}
                                    setIsVisible={setIsVisible}
                                />
                                )} 
                                <br />
                            </div>
                            <div className="block ">
                                <p className="text-black text-[17px] font-medium prSignUp">¿Ya tienes una cuenta? <Link href="/signin" className="text-[#E55E7F]">Inicia sesión</Link></p>
                            </div> <br />
                                <div className="flex flex-wrap items-center justify-stretch">
                                    <div className="border-2 border-[#FC83A1] inline-block mb-2 pinkLine"></div>
                                    &nbsp;&nbsp;&nbsp;
                                    <p className="text-black text-[15px] font-bold">O</p>
                                    &nbsp;&nbsp;&nbsp;
                                    <div className="border-2 border-[#FC83A1] inline-block mb-2 pinkLine"></div>
                                </div>
                                <br />
                                <div className="flex justify-center my-2">
                                <button onClick={() => signIn('google', { callbackUrl: '/usuario' })} className="flex items-center justify-center w-[310px] h-[59px] 
                                border-2 border-[#FFFFFF] bg-[#FFFFFF] rounded px-15 py-2 font-light text-center"> <Image
                                src="/buscar.png"
                                alt="mental"
                                width={40}
                                height={40}
                                className="mr-2 googleLogo" 
                                /> Continuar con Google</button> {/*'google', { callbackUrl: '/dashboard' }*/ }
                                </div>
                            </form>   
                            
                            </div>
                            </div>
                    </div>
                    <br/><br/>
                </main><br/><br/>
            </>
            )
        }

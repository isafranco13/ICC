"use client"
import { Footer, NavbarSignOut} from "@/components";
import Link from "next/link"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CustomButton from '../../../components/CustomButton';
import MyListbox from "@/components/listboxHijo";
//import React, {useState} from "react";


const Perfil = async () => {
    
    return (
        <>
            <main className="formUser">
                {/*contenedor del formulario*/}
                <div className="bg-[#FFEBA9] rounded-3xl"> 
                    <div className="flex flex-col">                 
                        {/*titulo e instrucciones */}
                        <div className="items-start px-[50px]"><br />
                            <div className="flex justify-end"><Link href="/terapeuta" className="hover:text-[#E55E7F] font-extrabold text-[22px]">Omitir</Link></div>
                            <h1 className="formUserTitle">Editar Perfil</h1>
                        </div>
                    </div>
                    <div className="formUserDiv items-center justify-center"> 
                        <div className="formUserDiv"> 
                            {/*titulo e instrucciones */}
                            <div className="formUserForm"><br />
                                <form className="w-full pl-4" method="post">{/*onSubmit={handleSumbmit}*/}
                                    <h3 className="formUserSubtitle">Datos del paciente</h3> 
                                
                                    <div className="mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Nombre(s)</p>
                                            <input required={true} name="nombre" id="nombre" type="text" className="w-3/4 outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" />
                                        </div>
                                    </div>

                                    <div className="formUserDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4 mr-10">
                                            <p className="formUserText">Apellido paterno</p>
                                            <input required={true} name="apellidoPaterno" id="apellidoPaterno" type="text" className="outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" />     
                                        </div>
                                        <div className="mb-4">
                                            <p className="formUserText">Apellido materno</p>
                                            <input required={true} name="apellidoMaterno" id="apellidoMaterno" type="text" className="outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" />     
                                        </div>
                                    </div>

                                    <div className="formUserDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4 mr-10">
                                            <p className="formUserText">Teléfono</p>
                                            <input required={true} name="telefono" id="telefono" type="number" className="outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" />     
                                        </div>
                                    </div>

                                    <h3 className="formUserSubtitle">Día y hora de la cita</h3>
                                    <div className="mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Seleccione fecha y hora</p>
                                        </div>
                                    </div>

                                    <CustomButton
                                        btnType="submit"
                                        title="Agendar cita"
                                        containerStyles="btnStyle min-w-[100px] font-medium textButton mt-5 h-10"
                                    />
                                    <br/>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <br/><br/><br/>
            </main>
            
        </>
    );
};

export default Perfil;
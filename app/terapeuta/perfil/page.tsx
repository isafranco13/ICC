"use client"
import { Footer, NavbarSignOut} from "@/components";
import Link from "next/link"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CustomButton from '../../../components/CustomButton';
import MyListbox from "@/components/listboxHijo";
import InputNumber from "@/components/InputNumber";
//import React, {useState} from "react";


const Perfil = async () => {
    
    return (
        <>
            <main className="formUser bg-[#F5FFFC]">
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
                                    <h3 className="formUserSubtitle">Datos personales</h3> 
                                
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
                                        <div className="mb-4">
                                            <p className="formUserText">Edad</p>
                                            <InputNumber/>    
                                        </div>
                                    </div>

                                    <h3 className="formUserSubtitle">Datos del consultorio</h3>
                                    <div className="mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Calle</p>
                                            <input required={true} name="calle" id="calle" type="text" className="w-3/4 outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" />
                                        </div>
                                    </div>

                                    <div className="formDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4 formDivW">
                                            <p className="formUserText">Número ext.</p>
                                            <input required={true} name="numExt" id="numExt" type="number" className="w-3/4 outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" />     
                                        </div>
                                        <div className="mb-4 formDivW">
                                            <p className="formUserText">Número int.</p>
                                            <input required={true} name="numInt" id="numInt" type="number" className="w-3/4 outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" />     
                                        </div>
                                        <div className="mb-4 formDivW">
                                            <p className="formUserText">C.P.</p>
                                            <input required={true} name="cp" id="cp" type="number" className="w-3/4 outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" />     
                                        </div>
                                    </div>

                                    <div className="w-3/4 mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Indicaciones adicionales del consultorio (color, entre que calles está, que hay alrededor, etc.)</p>
                                            <textarea  name="indicaciones"  id="indicaciones" className="flex w-full inputBox resize-none bg-white h-[170px] whitespace-normal break-words pt-2"></textarea>
                                        </div>
                                    </div>

                                    <h3 className="formUserSubtitle">Datos de sus terapias</h3>
                                    <div className="w-3/4 mt-[20px] pl-[30px]">
                                        <div className="mb-8">
                                            <p className="formUserText">En pocas palabras, describa ¿En qué se enfocan sus terapias?</p>
                                            <textarea  name="descripcionTerapias"  id="descripcionTerapias" className="flex w-full inputBox resize-none bg-white h-[170px] whitespace-normal break-words pt-2"></textarea>
                                        </div>
                                    </div>

                                    <CustomButton
                                        btnType="submit"
                                        title="Guardar"
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
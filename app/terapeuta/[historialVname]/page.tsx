"use client"
import Link from "next/link"
import { redirect, usePathname, useSearchParams} from "next/navigation";
import CustomButton from '../../../components/CustomButton';
import {useSession} from 'next-auth/react';
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation';


export default function HistorialVDetails ()  { 
    const router= useRouter();
    const searchParams = useSearchParams();
    const name = searchParams.get("name");   
    
    //console.log("name",name); -> Ver el nombre del paciente
    const [formData, setFormData] = useState({
        name: "",
        telefono: "",
        edad: "",
        estadoCivil: "",
        papas: "",
        noHijo: "",
        hijoPropio: "",
        operaciones: "",
        medicamentos: "",
    });
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch(`/api/historial?name=${name}`); 
                const data = await res.json();
                if(res.ok){
                    setFormData(data.historial);
                }else{
                    console.error(data.message)
                }
            }catch(error){
                console.log(error);
            }
        };
        if(name){
            fetchData();
        }
    }, [name]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
       
            <main className="formUser">
                {/*contenedor del formulario*/}
                <div className="bg-[#FFEBA9] rounded-lg"> 
                    <div className="flex flex-col rounded-lg">                 
                        <div className="items-start px-[50px] py-[10px]"><br />
                            <div className="flex justify-end"><Link href="/terapeuta" className="hover:text-[#E55E7F] font-extrabold text-[22px]">Salir</Link></div>
                            <h1 className="formUserTitle">Historial clínico de {name}</h1>
                            <p>Historial clinico del Paciente Seleccionado</p> 
                        </div>
                    </div>
                    <div className="formUserDiv"> 
                        <div className="formUserDiv"> 
                            {/*titulo e instrucciones */}
                            <div className="formUserForm"><br />
                                <form className=" w-full pl-4" method="post" onSubmit={handleSubmit} >
                                    <h3 className="formUserSubtitle">Datos generales</h3> 
                                
                                    <div className="formUserDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Telefono</p>
                                            <input name="telefono"  value={formData.telefono} id="telefono" type="number" className="outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" readOnly/>
                                        </div>
                                        <div className="edad">
                                            <p className="formUserText">Edad</p>
                                            <input name="edad"   id="edad" value={formData.edad}  type="number" className="inputBox" readOnly/>
                                        </div>
                                    </div>

                                    <div className="formUserDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Estado Civil</p>
                                            
                                            <div className="radio"> 
                                                <div className="mr-4">
                                                    <input type="text"  value={formData.estadoCivil} id="casado" name="estadoCivil"  className="inputBox" readOnly/>
                                                </div>
                                            </div>      
                                        </div>
                                    </div>

                                    <h3 className="formUserSubtitle">Datos familiares</h3>
                                    <div className="formUserDiv pt-[10px]">
                                        <div className="w-full pl-[30px]"><p className="formUserText">Padres Fallecidos</p></div>
                                        
                                        <div className="flex flex-row pl-[30px] gap-[10px]">
                                            <input type="text" name="papas" value={formData.papas} id="papas" className="inputBox" readOnly/>
                                        </div>
                                    </div><br/>

                                    <div className="w-full pl-[30px] gap-[40px]">{/**/}
                                        <p className="formUserText">Número de hijo</p>
                                        <p className="formUserWarning">*Incluyendo abortos dentro de la familia*</p><br />
                                        <input name="noHijo"  id="noHijo" value={formData.noHijo} required={true} type="number"  className="inputBox" readOnly/>
                                        {/* <InputNumber/>*/} <br/><br/> {/*value={formData.noHijo}*/}
                                        
                                            
                                        <p className="formUserText">Hijos Propios</p>
                                        <p className="formUserWarning">*Incluyendo abortos que conozca dentro de la familia*</p><br />
                                        <input name="hijoPropio"  id="hijoPropio" value={formData.hijoPropio}  type="number"  className="inputBox" readOnly/>
                                        {/*<InputNumber/> */} <br/><br/> {/*value={formData.hijoPropio}*/}
                                    </div>

                                    <h3 className="formUserSubtitle">Datos médicos</h3> 
                                    <div className="w-full pl-[30px] gap-[40px]">{/**/}
                                        <p className="formUserText">Operaciones del Paciente</p>
                                            
                                        <textarea  name="operaciones"  required={true} value={formData.operaciones} id="operaciones"   
                                        className="flex w-full inputBox resize-none bg-white h-[170px] whitespace-normal break-words pt-2" readOnly></textarea> {/*value={formData.operaciones} */}
                                        <br /><br />

                                            <p className="formUserText">Medicamentos</p>
                                                <div className="flex flex-row  gap-[10px]"> 
                                                    
                                                </div>
                                            <textarea  name="medicamentos"  value={formData.medicamentos}  id="medicamentos"   
                                            className="flex w-full inputBox resize-none bg-white h-[170px] whitespace-normal break-words pt-2" readOnly></textarea> {/*value={formData.operaciones} */}
                                            <br /><br />
                                    </div>
                                    <Link href="/terapeuta"><CustomButton
                                        btnType="submit"
                                        title="Salir"
                                        containerStyles="text-white rounded-lg bg-pink-400 min-w-[100px] font-medium textButton mt-5 hover:bg-[#E55E7F] h-10"
                                    /> </Link>
                                    

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <br/><br/><br/>
            </main>
            
       
    );
};
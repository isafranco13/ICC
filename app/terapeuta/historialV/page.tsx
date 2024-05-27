"use client"
import { Footer, NavbarSignOut} from "@/components";
import Link from "next/link"
import { getServerSession } from "next-auth";
import { redirect, usePathname, useSearchParams} from "next/navigation";
import CustomButton from '../../../components/CustomButton';
import {useSession} from 'next-auth/react';
//import MyListbox from "@/components/listboxHijo";
import InputNumber from "@/components/InputNumber";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
//import React, {useState} from "react";


const HistorialV = () => {
    const router= useRouter();
    const searchParams = useSearchParams();
    //const nombre = usePathname();
    //console.log(nombre);
    const name = searchParams.get("name");
    //console.log(searchParams.get("nombre"));
    
    const [formData, setFormData] = useState({
        name:"",
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
                const res = await fetch("/api/historial?name=${name}");
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
    }, [name])
    //const { data: session} = useSession()
    //console.log(session);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
            const res = await fetch("/api/historial",{
                method: "GET",
                body: JSON.stringify(name),
                headers:{
                    "Content-Type": "application/json"
                }
                
            })
            
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{ //HTMLInputElement |
        const {name, value} = e.target;
        //const value = e.target.value;
        //const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    
    
    
    return (
        <>
            <main className="formUser">
                {/*contenedor del formulario*/}
                <div className="bg-[#FFEBA9] rounded-lg"> 
                    <div className="flex flex-col rounded-lg">                 
                        <div className="items-start px-[50px] py-[10px]"><br />
                            <div className="flex justify-end"><Link href="/terapeuta" className="hover:text-[#E55E7F] font-extrabold text-[22px]">Salir</Link></div>
                            <h1 className="formUserTitle">Historial clínico de {formData.name}</h1>
                            <p>Historial clinico del Paciente Seleccionado</p> 
                        </div>
                    </div>
                    <div className="formUserDiv"> 
                        <div className="formUserDiv"> 
                            {/*titulo e instrucciones */}
                            <div className="formUserForm"><br />
                                <form className=" w-full pl-4" method="post" onSubmit={handleSubmit}>
                                    <h3 className="formUserSubtitle">Datos generales</h3> 
                                
                                    <div className="formUserDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Telefono</p>
                                            <input name="telefono" onChange={handleChange} value={formData.telefono} id="telefono" type="number" className="outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" readOnly/>
                                        </div>
                                        <div className="edad">
                                            <p className="formUserText">Edad</p>
                                            <input name="edad" onChange={handleChange}  id="edad" value={formData.edad}  type="number" className="inputBox" readOnly/>
                                        </div>
                                    </div>

                                    <div className="formUserDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Estado Civil</p>
                                            
                                            <div className="radio"> 
                                                <div className="mr-4">
                                                    <input type="text" onChange={handleChange} value={formData.estadoCivil} id="casado" name="estadoCivil"  className="inputBox" readOnly/>
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
                                        <input name="noHijo" onChange={handleChange}  id="noHijo" value={formData.noHijo} required={true} type="number"  className="inputBox" readOnly/>
                                        {/* <InputNumber/>*/} <br/><br/> {/*value={formData.noHijo}*/}
                                        
                                            
                                        <p className="formUserText">Hijos Propios</p>
                                        <p className="formUserWarning">*Incluyendo abortos que conozca dentro de la familia*</p><br />
                                        <input name="hijoPropio" onChange={handleChange}  id="hijoPropio" value={formData.hijoPropio}  type="number"  className="inputBox" readOnly/>
                                        {/*<InputNumber/> */} <br/><br/> {/*value={formData.hijoPropio}*/}
                                    </div>

                                    <h3 className="formUserSubtitle">Datos médicos</h3> 
                                    <div className="w-full pl-[30px] gap-[40px]">{/**/}
                                        <p className="formUserText">Operaciones del Paciente</p>
                                            
                                        <textarea  name="operaciones" onChange={handleChange} required={true} value={formData.operaciones} id="operaciones"   
                                        className="flex w-full inputBox resize-none bg-white h-[170px] whitespace-normal break-words pt-2" readOnly></textarea> {/*value={formData.operaciones} */}
                                        <br /><br />

                                            <p className="formUserText">Medicamentos</p>
                                                <div className="flex flex-row  gap-[10px]"> 
                                                    
                                                </div>
                                            <textarea  name="medicamentos"  value={formData.medicamentos} onChange={handleChange} id="medicamentos"   
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
            
        </>
    );
};

export default HistorialV;

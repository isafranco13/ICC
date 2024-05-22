"use client"
import { Footer, NavbarSignOut} from "@/components";
import Link from "next/link"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CustomButton from '../../../components/CustomButton';
import {useSession} from 'next-auth/react';
//import MyListbox from "@/components/listboxHijo";
import InputNumber from "@/components/InputNumber";
import React, {useEffect, useState} from "react";
//import React, {useState} from "react";


const Historial = () => {
    
    /*const session = await getServerSession();
    if (!session) {
      redirect("/signin");
    }*/
    
    const { data: session} = useSession()
    console.log(session);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
            const res = await fetch("/api/historial",{
                method: "POST",
                body: JSON.stringify(formData),
                headers:{
                    "Content-Type": "application/json"
                }
                
            })
            
    }
    useEffect(() => {
        if (session?.user?.name) {
            setFormData(prevState => ({
                ...prevState,
                name: session.user.name
            }));
        }
    }, [session]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{ //HTMLInputElement |
        const {name, value} = e.target;
        //const value = e.target.value;
        //const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked; // true si está marcado, false si está desmarcado
        const name = e.target.name;
        setFormData((prevState) => {
            // Crear una copia del estado actual de 'papas'
            let updatedPapas = prevState.papas;

            // Determinar si agregar o quitar el valor
            if (checked) {
                // Agregar el valor si el checkbox está marcado
                updatedPapas = updatedPapas ? `${updatedPapas}, ${name}` : name;
            } else {
                // Quitar el valor si el checkbox está desmarcado
                const values = updatedPapas.split(', ').filter(item => item !== name);
                updatedPapas = values.join(', ');
            }

            // Devolver el nuevo estado con 'papas' actualizado
            return {
                ...prevState,
                papas: updatedPapas
            };
        });
    };
    
    const startingHistorialData={
        name: "",
        telefono: "",
        edad: "",
        estadoCivil: "",
        papas: "",
        noHijo: "",
        hijoPropio:"",
        operaciones:"",
        medicamentos:"",
    };
    const [formData, setFormData] = useState(startingHistorialData);
    return (
        <>
            <main className="formUser">
                {/*contenedor del formulario*/}
                <div className="bg-[#FFEBA9] rounded-lg"> 
                    <div className="flex flex-col rounded-lg">                 
                        {/*titulo e instrucciones */}
                        <div className="items-start px-[50px] py-[10px]"><br />
                            <div className="flex justify-end"><Link href="/terapeuta" className="hover:text-[#E55E7F] font-extrabold text-[22px]">Salir</Link></div>
                            <h1 className="formUserTitle">Historial clínico</h1>
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
                                            <input type="text" name="name" onChange={handleChange} value={formData.name} className="inputBox" readOnly/> {/*Input para tomar el nombre type="hidden"*/}
                                            <p className="formUserText">Telefono</p>
                                            <input required={true} name="telefono" onChange={handleChange} value={formData.telefono} id="telefono" type="number" placeholder="6141234567" className="outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" readOnly/>
                                        </div>
                                        <div className="edad">
                                            <p className="formUserText">Edad</p>
                                            <input name="edad" onChange={handleChange}  id="edad" value={formData.edad} required={true} type="number" placeholder="25" className="inputBox" readOnly/>
                                        </div>
                                    </div>

                                    <div className="formUserDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Estado Civil</p>
                                            
                                            <div className="radio"> 
                                                <div className="mr-4">
                                                    <input type="text" onChange={handleChange} value="" id="casado" name="estadoCivil"  className="inputBox" readOnly/>
                                                </div>
                                            </div>      
                                        </div>
                                    </div>

                                    <h3 className="formUserSubtitle">Datos familiares</h3>
                                    <div className="formUserDiv pt-[10px]">
                                        <div className="w-full pl-[30px]"><p className="formUserText">Padres Fallecidos</p></div>
                                        
                                        <div className="flex flex-row pl-[30px] gap-[10px]">
                                            <input type="text" name="papas" id="papas" className="inputBox" readOnly/>
                                        </div>
                                    </div><br/>

                                    <div className="w-full pl-[30px] gap-[40px]">{/**/}
                                        <p className="formUserText">Número de hijo</p>
                                        <p className="formUserWarning">*Incluyendo abortos dentro de la familia*</p><br />
                                        <input name="noHijo" onChange={handleChange}  id="noHijo" value={formData.noHijo} required={true} type="number" placeholder="2" className="inputBox" readOnly/>
                                        {/* <InputNumber/>*/} <br/><br/> {/*value={formData.noHijo}*/}
                                        <p className="formUserText">¿Tiene hijos?</p>
                                            <div className="flex flex-row  gap-[10px]"> 
                                                <input type="radio" id="si" value="si" name="hijos" className="textInput"/>
                                                <label htmlFor="si">Si</label>
                                                <input type="radio" id="no" value="no" name="hijos" className="textInput"/>
                                                <label htmlFor="no">No</label><br /><br />
                                            </div>
                                            
                                        <p className="formUserText">Hijos Propios</p>
                                        <p className="formUserWarning">*Incluyendo abortos que conozca dentro de la familia*</p><br />
                                        <input name="hijoPropio" onChange={handleChange}  id="hijoPropio" value={formData.hijoPropio}  type="number" placeholder="2" className="inputBox" readOnly/>
                                        {/*<InputNumber/> */} <br/><br/> {/*value={formData.hijoPropio}*/}
                                    </div>

                                    <h3 className="formUserSubtitle">Datos médicos</h3> 
                                    <div className="w-full pl-[30px] gap-[40px]">{/**/}
                                        <p className="formUserText">Operaciones del Paciente</p>
                                            
                                        <textarea  name="operaciones" onChange={handleChange} required={true} value={formData.operaciones} id="operaciones"  placeholder="Describa sus operaciones, de qué trataron" 
                                        className="flex w-full inputBox resize-none bg-white h-[170px] whitespace-normal break-words pt-2" readOnly></textarea> {/*value={formData.operaciones} */}
                                        <br /><br />

                                            <p className="formUserText">¿Toma algún medicamento?</p>
                                                <div className="flex flex-row  gap-[10px]"> 
                                                    
                                                </div>
                                            <textarea  name="medicamentos"  value={formData.medicamentos
                                            } onChange={handleChange} id="medicamentos"  placeholder="Nombre los medicamentos que toma y su función" 
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

export default Historial;
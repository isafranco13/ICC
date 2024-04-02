"use client"
import NavBarAdmin from '@/components/NavBarAdmin';
import CustomButton from '@/components/CustomButton';
import React, { useState } from 'react';
import CustomAlert from '@/components/CustomAlert';

export default function Home() {
    const [alertType, setAlertType] = useState(""); // Tipo de alerta
    const [alertMessage, setAlertMessage] = useState(""); // Mensaje de alerta

    const handleSumbmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch("/api/terapeutas",{
            method: "POST",
            body: JSON.stringify(formData),
            headers:{
                "Content-Type": "application/json"
            }
            
        })

        if(!res.ok){
            setAlertType("warning");
            setAlertMessage("Error al agregar el terapeuta");
            throw new Error("Error al crear el usuario")
        }
        // Terapeuta agregado correctamente
        setAlertType("success");
        setAlertMessage("Terapeuta agregado correctamente");

        // Limpiar el formulario después de agregar el terapeuta
        setFormData({
            nombre: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            celular: "",
            correo: "",
            contrasena: "",
        });
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const startingTerapeutasData={
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        celular: "",
        correo: "",
        contrasena: "",
    };
    const [formData, setFormData] = useState(startingTerapeutasData);
    
    return (
        <main className="overflow-hidden">
            <div className="contenedor">
                <div style={{ display: 'flex', backgroundColor: '#F5FFFC' }}>
                    <div>
                        <NavBarAdmin />
                    </div>

                    <div style={{ display: 'inline-block', width: '100%', marginLeft: '2%' , marginRight: '2%'}}>
                        {/* Titulo y descripción */}
                        <div className='text'>
                            <p className='tituloAdmin'><strong>Alta Terapeuta</strong></p>
                            <p className='text-lg'>Ingrese los datos del terapeuta</p>
                        </div>
                        {/* Formulario */}
                        <div style={{ alignItems:'center', justifyContent: 'center', padding: '2%'}}>
                            <form onSubmit={handleSumbmit} className='w-1/2 mx-auto text-right'>
                                <div className='flex mb-6'>
                                    <label className="text-black font-medium form w-1/3">Nombre</label>
                                    <input value={formData.nombre} name="nombre"  id="nombre" type="text" className="bg-white rounded-3xl outline-none text-lg text-center w-2/3 h-9 ml-2 shadow-md" onChange={handleChange} required={true} />
                                </div>
                                <div className='flex mb-6'>
                                    <label className="text-black font-medium form w-1/3">Apellido Paterno</label>
                                    <input  name="apellidoPaterno" id="apellidoPaterno" type="text" className="bg-white rounded-3xl outline-none text-lg text-center w-2/3 h-9 ml-2 shadow-md" onChange={handleChange} required={true} value={formData.apellidoPaterno}/>
                                </div>
                                <div className='flex mb-6'>
                                    <label className="text-black font-medium form w-1/3">Apellido Materno</label>
                                    <input  name="apellidoMaterno" id="apellidoMaterno" type="text" className="bg-white rounded-3xl outline-none text-lg text-center w-2/3 h-9 ml-2 shadow-md" onChange={handleChange} required={true} value={formData.apellidoMaterno}/>
                                </div>
                                <div className='flex mb-6'>
                                    <label className="text-black font-medium form w-1/3">Celular</label>
                                    <input  name="celular" id="celular" type="text" className="bg-white rounded-3xl outline-none text-lg text-center w-2/3 h-9 ml-2 shadow-md" onChange={handleChange} required={true} value={formData.celular}/>
                                </div>
                                <div className='flex mb-6'>
                                    <label className="text-black font-medium form w-1/3">Correo</label>
                                    <input  name="correo" id="correo" type="email" className="bg-white rounded-3xl outline-none text-lg text-center w-2/3 h-9 ml-2 shadow-md" onChange={handleChange} required={true} value={formData.correo}/>
                                </div>
                                <div className='flex'>
                                    <label className="text-black font-medium form w-1/3">Contraseña</label>
                                    <input  name="contrasena" id="contrasena" type="password" className="bg-white rounded-3xl outline-none text-lg text-center w-2/3 h-9 ml-2 shadow-md" onChange={handleChange} required={true} value={formData.contrasena}/>
                                </div>
                                {/* Botón */}
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <CustomButton
                                        btnType="submit"
                                        title="Registrar"
                                        containerStyles="text-white rounded-full bg-pink-400 min-w-[100px] font-medium textButton mt-5 hover:bg-pink-500 h-10"
                                    />
                                </div>
                                {/* Renderizar la alerta */}
                                {alertType && (
                                    <CustomAlert
                                        status={alertType === "success" ? "success" : "warning"}
                                        variant="subtle"
                                        title={alertType === "success" ? "Éxito" : "Advertencia"}
                                        description={alertMessage}
                                    />
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
"use client"
import NavBarAdmin from '@/components/NavBarAdmin';
import CustomButton from '@/components/CustomButton';
import React, { useState } from 'react';
import CustomAlert from '@/components/CustomAlert';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const [alertType, setAlertType] = useState(""); // Tipo de alerta
    const [alertMessage, setAlertMessage] = useState(""); // Mensaje de alerta
    const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad de la alerta

    const handleSumbmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch("/api/terapeutas",{
            method: "POST",
            body: JSON.stringify(formData),
            headers:{
                "Content-Type": "application/json"
            }
            
        });

        const data = await res.json();

        if (res.ok) {
            if (data.message === "Terapeuta ya existe") {
                setAlertType("warning");
                setAlertMessage("Ya existe un terapeuta con ese correo electrónico agregado");
                setIsVisible(true);
            } else {
                setAlertType("success");
                setAlertMessage("Terapeuta agregado correctamente");
                setIsVisible(true);
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
        } else {
            setAlertType("warning");
            setAlertMessage("Error al agregar el terapeuta");
        }
        router.refresh();
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
                <div className='contenedor2' style={{backgroundColor: '#F5FFFC' }}>
                    <div className='navBarApp'>
                        <NavBarAdmin />
                    </div>

                    <div className='adminDiv' style={{ display: 'inline-block', width: '100%', marginRight: '2%'}}>
                        {/* Titulo y descripción */}
                        <div className='text'>
                            <p className='tituloAdmin'><strong>Alta Terapeuta</strong></p>
                            <p className='text-lg'>Ingrese los datos del terapeuta</p>
                        </div>
                        {/* Formulario */}
                        <div style={{ alignItems:'center', justifyContent: 'center', padding: '2%'}}>
                            <form onSubmit={handleSumbmit} className='formTera'>
                                <div className='divForm'>
                                    <label className="labelForm">Nombre</label>
                                    <input value={formData.nombre} name="nombre"  id="nombre" type="text" className="inputForm" onChange={handleChange} required={true} />
                                </div>
                                <div className='divForm'>
                                    <label className="labelForm">Apellido Paterno</label>
                                    <input  name="apellidoPaterno" id="apellidoPaterno" type="text" className="inputForm" onChange={handleChange} required={true} value={formData.apellidoPaterno}/>
                                </div>
                                <div className='divForm'>
                                    <label className="labelForm">Apellido Materno</label>
                                    <input  name="apellidoMaterno" id="apellidoMaterno" type="text" className="inputForm" onChange={handleChange} required={true} value={formData.apellidoMaterno}/>
                                </div>
                                <div className='divForm'>
                                    <label className="labelForm">Celular</label>
                                    <input  name="celular" id="celular" type="text" className="inputForm" onChange={handleChange} required={true} value={formData.celular}/>
                                </div>
                                <div className='divForm'>
                                    <label className="labelForm">Correo</label>
                                    <input  name="correo" id="correo" type="email" className="inputForm" onChange={handleChange} required={true} value={formData.correo}/>
                                </div>
                                <div className='divForm'>
                                    <label className="labelForm">Contraseña</label>
                                    <input  name="contrasena" id="contrasena" type="password" className="inputForm" onChange={handleChange} required={true} value={formData.contrasena}/>
                                </div>
                                {/* Botón */}
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <CustomButton
                                        btnType="submit"
                                        title="Registrar"
                                        containerStyles="text-white rounded-full bg-pink-400 min-w-[100px] font-medium textButton mt-5 hover:bg-pink-500 h-10"
                                    />
                                </div>
                                {/* Renderizar alerta */}
                                {alertType && isVisible && (
                                    <CustomAlert
                                        status={alertType === "success" ? "success" : "warning"}
                                        variant="subtle"
                                        title={alertType === "success" ? "Éxito" : "Advertencia"}
                                        description={alertMessage}
                                        setIsVisible={setIsVisible}
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
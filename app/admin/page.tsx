"use client"
import NavBarAdmin from '@/components/NavBarAdmin';
import React, { useState, useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import { TfiWorld } from "react-icons/tfi";


export default function Home() {
    const [usuarios, setUsuarios] = useState<{ _id: string, nombre: string, correo: string, apellido: string }[]>([]);

    useEffect(() => {
        fetch('/api/usuarios')
            .then(response => response.json())
            .then(data => setUsuarios(data.usuarios));
    }, []);

    return (
        
        <main className="overflow-hidden">
            <div className="contenedor">
                <div style={{ display: 'flex' }}>
                    <div>
                        <NavBarAdmin />
                    </div>

                    <div style={{ display: 'inline-block', width: '100%', marginLeft: '2%' , marginRight: '2%'}}>
                        {/* Sección de visitas y número de usuarios registrados */}
                        <div style={{ display: 'flex', margin: '3%', alignItems: 'center', justifyContent: 'center' }}>
                            <div className='w-5/12 mr-6 pt-5 pb-7 bg-[#0DF591] rounded-2xl text-center text-[#F5FFFC] text-3xl font-bold'>
                                <h1>Visitas Online</h1>
                                <section className='flex items-center justify-center mt-6'>
                                    <h1 className='text-5xl mr-6'> 1000 </h1>
                                    <TfiWorld 
                                    className='text-6xl w-1/5 ml-6' />
                                </section>
                            </div>
                            <div className='w-5/12 ml-6 pt-5 pb-7 bg-[#0DF591] rounded-2xl text-center text-[#F5FFFC] text-3xl font-bold'>
                                <h1>Usuarios Registrados</h1>
                                <section className='flex items-center justify-center mt-6'>
                                    <h1 className='text-5xl mr-6'> {usuarios.length} </h1>
                                    <FaUsers
                                    className='text-6xl w-1/5 ml-6' />
                                </section>
                            </div>
                        </div>
                        {/* Sección de gráficas */}
                        <div className=''>
                            <div className=''>
                                <p>Gráficas</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    );
}
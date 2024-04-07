"use client"
import NavBarAdmin from '@/components/NavBarAdmin';
import React, { useState, useEffect } from 'react';

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

                    <div className='text'>
                        <h1>Cantidad de Usuarios: {usuarios.length}</h1><br />
                        <table className='text-center'>
                            <thead>
                                <tr>
                                    <th className='pr-10'>Nombre</th>
                                    <th className='pr-10'>Apellido</th>
                                    <th>Correo</th>
                                    {/* Agregar más columnas según la estructura de los usuarios */}
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map(usuario => (
                                    <tr key={usuario._id}>
                                        <td className='pr-10'>{usuario.nombre}</td>
                                        <td className='pr-10'>{usuario.apellido}</td>
                                        <td>{usuario.correo}</td>
                                        {/* Agregar más celdas según la estructura de los usuarios */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
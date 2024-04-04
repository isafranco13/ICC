"use client"
import NavBarAdmin from '@/components/NavBarAdmin';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Home() {
    const router = useRouter();
    //USUARIOS
    const [usuarios, setUsuarios] = useState<{ _id: string, nombre: string, correo: string, apellido: string }[]>([]);

    useEffect(() => {
        fetch('/api/usuarios')
            .then(response => response.json())
            .then(data => setUsuarios(data.usuarios));
    }, []);

    const handleDeleteUser = async ( id: string ) => {
        const res = await fetch(`/api/usuarios?id=${id}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            setUsuarios(usuarios.filter(usuario => usuario._id !== id));
            router.refresh();
        }
    }
    
    //TERAPEUTAS
    const [terapeutas, setTerapeutas] = useState<{ _id: string, nombre: string, apellidoPaterno: string, apellidoMaterno: string, celular: string, correo: string }[]>([]);

    useEffect(() => {
        fetch('/api/terapeutas')
            .then(response => response.json())
            .then(data => setTerapeutas(data.terapeutas));
    }, []);

    const handleDeleteTerap = async ( id: string ) => {
        const res = await fetch(`/api/terapeutas?id=${id}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            setTerapeutas(terapeutas.filter(terapeuta => terapeuta._id !== id));
            router.refresh();
        }
    }

    return (
        
        <main className="overflow-hidden">
            <div className="contenedor">
                <div style={{ display: 'flex' }}>
                    <div>
                        <NavBarAdmin />
                    </div>

                    <div style={{ display: 'inline-block', width: '100%', marginLeft: '2%' , marginRight: '2%'}}>
                        <div className='text'>
                            <p className='tituloAdmin'><strong>Usuarios</strong></p>
                        </div>

                        <div className='text bg-[#FFEBA9] rounded-3xl justify-center items-center'>
                            <table className='text-center mx-auto w-full'>
                                <thead className='text-[#F5FFFC] bg-pink-400'>
                                    <tr className='px-5'>
                                        <th className='rounded-t-xl'>Nombre</th>
                                        <th className='rounded-t-xl'>Apellido</th>
                                        <th className='rounded-t-xl'>Correo</th>
                                        <th className='rounded-t-xl'>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-green-500 bg-green-50'>
                                    {usuarios.map(usuario => (
                                        <tr key={usuario._id} className='px-5 py-1'>
                                            <td className='py-1.5'>{usuario.nombre}</td>
                                            <td className='py-1.5'>{usuario.apellido}</td>
                                            <td className='py-1.5'>{usuario.correo}</td>
                                            <td className='py-1.5 flex text-2xl justify-center items-center'>
                                                <button className='text-green-400 cursor-pointer mr-1'><FaRegEdit /></button>
                                                <button className='text-red-400 cursor-pointer' onClick={() => handleDeleteUser(usuario._id)}><RiDeleteBin6Line /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* TERAPEUTAS */}
                        <div className='text'>
                            <p className='tituloAdmin'><strong>Terapeutas</strong></p>
                        </div>

                        <div className='text bg-[#FFEBA9] rounded-3xl justify-center items-center'>
                            <table className='text-center mx-auto w-full'>
                                <thead className='text-[#F5FFFC] bg-pink-400'>
                                    <tr className='px-5'>
                                        <th className='rounded-t-xl'>Nombre</th>
                                        <th className='rounded-t-xl'>Apellido Paterno</th>
                                        <th className='rounded-t-xl'>Apellido Materno</th>
                                        <th className='rounded-t-xl'>Celular</th>
                                        <th className='rounded-t-xl'>Correo</th>
                                        <th className='rounded-t-xl'>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-green-500 bg-green-50'>
                                    {terapeutas.map(terapeuta => (
                                        <tr key={terapeuta._id} className='px-5 py-1'>
                                            <td className='py-1.5'>{terapeuta.nombre}</td>
                                            <td className='py-1.5'>{terapeuta.apellidoPaterno}</td>
                                            <td className='py-1.5'>{terapeuta.apellidoMaterno}</td>
                                            <td className='py-1.5'>{terapeuta.celular}</td>
                                            <td className='py-1.5'>{terapeuta.correo}</td>
                                            <td className='py-1.5 flex text-2xl justify-center items-center'>
                                                <button className='text-green-400 cursor-pointer mr-1'><FaRegEdit /></button>
                                                <button className='text-red-400 cursor-pointer' onClick={() => handleDeleteTerap(terapeuta._id)}><RiDeleteBin6Line /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
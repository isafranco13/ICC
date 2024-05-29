"use client"
import NavBarAdmin from '@/components/NavBarAdmin';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import CustomAlertDialog from '@/components/CustomAlertDialog';

export default function Home() {
    const router = useRouter();
    const [selectedItemId, setSelectedItemId] = useState('');
    const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
    const [alertDialogTitle, setAlertDialogTitle] = useState('');
    const [alertDialogBody, setAlertDialogBody] = useState('');
    //USUARIOS
    const [usuarios, setUsuarios] = useState<{ _id: string, nombre: string, correo: string, apellido: string }[]>([]);

    useEffect(() => { //cargar usuarios
        async function fetchUsuarios() {
            try {
                const response = await fetch('/api/usuarios');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsuarios(data.usuarios);
            } catch (error) {
                console.error('Failed to fetch usuarios:', error);
            }
        }

        fetchUsuarios();
    }, []);

    /*const handleDeleteUser = async ( id: string ) => {
        const res = await fetch(`/api/usuarios?id=${id}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            setUsuarios(usuarios.filter(usuario => usuario._id !== id));
            router.refresh();
        }
    }*/

    const handleDeleteUserConfirmation = async (userId: string) => {
        setSelectedItemId(userId);
        setAlertDialogTitle('Eliminar Usuario');
        setAlertDialogBody('¿Estás seguro de que deseas eliminar este usuario? No podrás deshacer esta acción después.');
        setIsAlertDialogOpen(true);
    };
    
    //TERAPEUTAS
    const [terapeutas, setTerapeutas] = useState<{ _id: string, nombre: string, apellidoPaterno: string, apellidoMaterno: string, celular: string, correo: string }[]>([]);

    useEffect(() => {
        fetch('/api/terapeutas')
            .then(response => response.json())
            .then(data => setTerapeutas(data.terapeutas));
    }, []);

    /*const handleDeleteTerap = async ( id: string ) => {
        const res = await fetch(`/api/terapeutas?id=${id}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            setTerapeutas(terapeutas.filter(terapeuta => terapeuta._id !== id));
            router.refresh();
        }
    }*/

    const handleDeleteTerapConfirmation = async (terapId: string) => {
        setSelectedItemId(terapId);
        setAlertDialogTitle('Eliminar Terapeuta');
        setAlertDialogBody('¿Estás seguro de que deseas eliminar este terapeuta? No podrás deshacer esta acción después.');
        setIsAlertDialogOpen(true);
    };

    //Función para eliminar después de la confirmación de la eliminación de un usuario o terapeuta
    const handleDelete = async () => {
        const res = await fetch(`/api/usuarios?id=${selectedItemId}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            setUsuarios(usuarios.filter(usuario => usuario._id !== selectedItemId));
            setTerapeutas(terapeutas.filter(terapeuta => terapeuta._id !== selectedItemId));
            router.refresh();
        }
        setIsAlertDialogOpen(false);
        setSelectedItemId('');
    };

    return (
        
        <main className="overflow-hidden">
            <div className="contenedor">
                <div  className='contenedor2' style={{backgroundColor: '#F5FFFC' }}>
                    <div className='navBarApp'>
                        <NavBarAdmin />
                    </div>

                    <div className='adminDiv' style={{ display: 'inline-block', width: '100%', marginRight: '2%' }}>
                        <div className='text'>
                            <p className='tituloAdmin'><strong>Usuarios</strong></p>
                        </div>

                        <div className='text bg-[#FFEBA9] rounded-3xl justify-center items-center tableDiv'>
                            <table className='table'>
                                <thead className='text-[#F5FFFC] bg-pink-400 tableDivSmall'>
                                    <tr className='trTableTera'>
                                        <th className='rounded-t-xl textUserTitle'>Nombre</th>
                                        <th className='rounded-t-xl textUserTitle'>Apellido</th>
                                        <th className='rounded-t-xl textUserTitle'>Correo</th>
                                        <th className='rounded-t-xl textUserTitle'>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-green-500 bg-green-50'>
                                    {usuarios.map(usuario => (
                                        <tr key={usuario._id} className='trTable'>
                                            <td className='textUser'>{usuario.nombre}</td>
                                            <td className='textUser'>{usuario.apellido}</td>
                                            <td className='textUser'>{usuario.correo}</td>
                                            <td className='textUser flex text-2xl justify-center items-center'>
                                                <button className='text-green-400 cursor-pointer mr-1'><FaRegEdit /></button>
                                                <button className='text-red-400 cursor-pointer' onClick={() => handleDeleteUserConfirmation(usuario._id)}><RiDeleteBin6Line /></button>
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

                        <div className='text bg-[#FFEBA9] rounded-3xl justify-center items-center tableDivTera'>
                            <table className='tableTera'>
                                <thead className='text-[#F5FFFC] bg-pink-400 tableDivSmallTera'>
                                    <tr className='trTableTera'>
                                        <th className='rounded-t-xl textUserTitleTera'>Nombre</th>
                                        <th className='rounded-t-xl textUserTitleTera'>Apellido Paterno</th>
                                        <th className='rounded-t-xl textUserTitleTera'>Apellido Materno</th>
                                        <th className='rounded-t-xl textUserTitleTera'>Celular</th>
                                        <th className='rounded-t-xl textUserTitleTera'>Correo</th>
                                        <th className='rounded-t-xl textUserTitleTera'>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-green-500 bg-green-50'>
                                    {terapeutas.map(terapeuta => (
                                        <tr key={terapeuta._id} className='trTableTera'>
                                            <td className='textUserTera'>{terapeuta.nombre}</td>
                                            <td className='textUserTera'>{terapeuta.apellidoPaterno}</td>
                                            <td className='textUserTera'>{terapeuta.apellidoMaterno}</td>
                                            <td className='textUserTera'>{terapeuta.celular}</td>
                                            <td className='textUserTera'>{terapeuta.correo}</td>
                                            <td className='textUserTera flex text-2xl justify-center items-center'>
                                                <button className='text-green-400 cursor-pointer mr-1'><FaRegEdit /></button>
                                                <button className='text-red-400 cursor-pointer' onClick={() => handleDeleteTerapConfirmation(terapeuta._id)}><RiDeleteBin6Line /></button>
                                            </td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                            {/* Componente AlertDialog */}
                            <CustomAlertDialog
                                isOpen={isAlertDialogOpen}
                                headerText={alertDialogTitle}
                                bodyText={alertDialogBody}
                                cancelText='Cancelar'
                                confirmText='Eliminar'
                                colorScheme='red'
                                onConfirm={handleDelete}
                                onClose={() => setIsAlertDialogOpen(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
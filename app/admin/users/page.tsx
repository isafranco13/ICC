"use client"
<<<<<<< HEAD
import NavbarAdmin from '@/components/NavBarAdmin';
import React, { useState, useEffect } from 'react';

export default function Home() {
    const [usuarios, setUsuarios] = useState<{ _id: string, nombre: string, correo: string, apellido: string }[]>([]);

    useEffect(() => {
=======
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
>>>>>>> dba5574d2b0e42eca59c4b2c5b7a5949e480babf
        fetch('/api/usuarios')
            .then(response => response.json())
            .then(data => setUsuarios(data.usuarios));
    }, []);

<<<<<<< HEAD
    return (
        
        <main className="overflow-hidden">

            <div>
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
=======
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
        // Verificar si el selectedItem es un usuario o un terapeuta
        const isUser = usuarios.some(usuario => usuario._id === selectedItemId);
        if (isUser) {
            // Es un usuario, realizar la eliminación
            const res = await fetch(`/api/usuarios?id=${selectedItemId}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                setUsuarios(usuarios.filter(usuario => usuario._id !== selectedItemId));
                router.refresh();
            }
        } else {
            // Es un terapeuta, realizar la eliminación
            const res = await fetch(`/api/terapeutas?id=${selectedItemId}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                setTerapeutas(terapeutas.filter(terapeuta => terapeuta._id !== selectedItemId));
                router.refresh();
            }
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

                    <div style={{ display: 'inline-block', width: '100%', marginLeft: '2%' , marginRight: '2%' }}>
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
>>>>>>> dba5574d2b0e42eca59c4b2c5b7a5949e480babf
            </div>
        </main>
    );
}
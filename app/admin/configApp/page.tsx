"use client"

import { useState } from 'react';
import { Switch } from '@headlessui/react';
import NavBarAdmin from '@/components/NavBarAdmin';

export default function ConfigApp() {
    const [enabled1, setEnabled1] = useState(false);
    const [enabled2, setEnabled2] = useState(false);
    const [enabled3, setEnabled3] = useState(false);

    const handleToggle1 = () => {
        setEnabled1(!enabled1);
        if (!enabled1) {
            window.open('mantenimiento', '_blank');
        }
    };
    
    const handleToggle2 = () => {
        setEnabled2(!enabled2);
        if (!enabled2) {
            window.open('otoño', '_blank');
        }
    };
    
    const handleToggle3 = () => {
        setEnabled3(!enabled3);
        if (!enabled3) {
            window.open('navidad', '_blank');
        }
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
                            <p className='tituloAdmin'><strong>Configuración de la aplicación</strong></p>
                        </div>

                        {/*<div className="py-5 flex items-center justify-between m-6 bg-white rounded-xl p-3">
                            <p className= 'text-pink-400 font-bold' style={{marginRight: '10px' }}>Modo mantenimiento</p>
                                    <Switch
                                        checked={enabled1}
                                        onChange={handleToggle1}
                                        className={`${enabled1 ? 'bg-lime-400' : 'bg-teal-50'}
                                        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent drop-shadow-xl shadow-md transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                                    >
                                        <span className="sr-only">Use setting</span>
                                        <span
                                            aria-hidden="true"
                                            className={`${enabled1 ? 'translate-x-9' : 'translate-x-0'}
                                            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                        />
                                    </Switch>
                            </div>
                        */}

                            <div className="py-5 flex items-center justify-between m-6 bg-white rounded-xl p-3">
                            <p className= 'text-pink-400 font-bold' style={{marginRight: '10px' }}>Modo mantenimiento</p>
                                    <Switch
                                        checked={enabled1}
                                        onChange={handleToggle1}
                                        className={`${enabled1 ? 'bg-lime-400' : 'bg-teal-50'}
                                        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent drop-shadow-xl shadow-md transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                                    >
                                        <span className="sr-only">Use setting</span>
                                        <span
                                            aria-hidden="true"
                                            className={`${enabled1 ? 'translate-x-9' : 'translate-x-0'}
                                            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                        />
                                    </Switch>
                            </div>


                            <div className="py-5 flex items-center justify-between m-6 bg-white rounded-xl p-3">
                                <p className= 'text-pink-400 font-bold' style={{marginRight: '10px' }}>Otoño</p>
                                <Switch
                                    checked={enabled2}
                                    onChange={handleToggle2}
                                    className={`${enabled2 ? 'bg-lime-400' : 'bg-teal-50'}
                                    relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent drop-shadow-xl shadow-md transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                                >
                                    <span className="sr-only">Use setting</span>
                                    <span
                                        aria-hidden="true"
                                        className={`${enabled2 ? 'translate-x-9' : 'translate-x-0'}
                                        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                    />
                                </Switch>
                            </div>

                            <div className="py-5 flex items-center justify-between m-6 bg-white rounded-xl p-3">
                                <p className= 'text-pink-400 font-bold' style={{marginRight: '10px' }}>Navidad</p>
                                <Switch
                                    checked={enabled3}
                                    onChange={handleToggle3}
                                    className={`${enabled3 ? 'bg-lime-400' : 'bg-teal-50'}
                                    relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent drop-shadow-xl shadow-md transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                                >
                                    <span className="sr-only">Use setting</span>
                                    <span
                                        aria-hidden="true"
                                        className={`${enabled3 ? 'translate-x-9' : 'translate-x-0'}
                                        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                    />
                                </Switch>
                        
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
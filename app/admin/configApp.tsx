"use client"

import { useState } from 'react';
import { Switch } from '@headlessui/react';
import NavBarAdmin from '@/components/NavBarAdmin';

export default function Home() {
    const [enabled, setEnabled] = useState(false);

    return (
        <main className="overflow-hidden">
            <div className="contenedor">
                <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                    <div className='navBarApp'>
                        <NavBarAdmin />
                    </div>

                    <div className='text'>
                        <p className='tituloAdmin'><strong>Configuración de la aplicación</strong></p>
                        <div className='app'>
                        <div className="py-5 flex items-center justify-between m-6">
                                <p className= 'text-pink-400 font-bold	' style={{marginRight: '10px' }}>Modo mantenimiento</p>
                                <Switch
                                    checked={enabled}
                                    onChange={setEnabled}
                                    className={`${enabled ? 'bg-lime-400' : 'bg-teal-50'}
                                    relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent drop-shadow-xl shadow-md transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                                >
                                    <span className="sr-only">Use setting</span>
                                    <span
                                        aria-hidden="true"
                                        className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                                        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                    />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
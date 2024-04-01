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
                    </div>
                </div>
            </div>
        </main>
    );
}
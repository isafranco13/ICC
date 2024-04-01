"use client";

import React from 'react';

const MaintenanceMode = () => {
  return (
    <div className="relative mt-72">
      <div className="absolute inset-1 flex items-center justify-center">
        <div className="bg-gradient-to-br from-yellow-100 to-red-300 text-white text-center p-10 mx-5 rounded-lg w-full flex flex-col">
            <div className="flex items-center justify-center mb-4 pt-6">
                <img src="atomo.svg" alt="Atom" className="object-contain bg-white rounded-full w-16 p-1" />
                <p className='navBarName text-black font-bold'>HealthSync</p>
            </div>
            <div>
                <p className='text-4xl font-black p-5 text-black'>Aviso de Mantenimiento:</p>
                <p className='text-xl p-3  text-black'>Estamos realizando mejoras en nuestro sitio web para brindarte una <br/> experiencia aún mejor.</p>

                <div className="flex items-center justify-center mb-4 p-5">
                    <img src="mantenimiento.png" alt="Atom" className="object-contain rounded-full w-1/12"/>
                </div>

                <p className='text-base p-4 text-black'>Si quieres agendar una cita de emergencia, puedes contactarte al (614) 197 40 31</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MaintenanceMode;
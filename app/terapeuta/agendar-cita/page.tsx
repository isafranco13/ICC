"use client"
import NavbarTera from "@/components/NavbarTera";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";
import CustomButton from '@/components/CustomButton';
import React, {useState, ChangeEvent} from "react";
import { Calendar } from "@/components/ui/calendar";

export default function AgendarCita() {
    const router = useRouter();
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [availableHours, setAvailableHours] = React.useState<string[]>([]);
    const [selectedHour, setSelectedHour] = React.useState<string | undefined>(undefined);
    
    const terapeutaId = "65f87fb82a912a8beba100f5"; // Reemplaza esto con el ID real del terapeuta

    const [formData, setFormData] = useState({
        fecha: date,
        hora: selectedHour,
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        celular: "",
        terapeutaId,
    });

    const fetchAvailableHours = async (selectedDate: Date) => {
        const response = await fetch(`/api/citas?fecha=${selectedDate.toISOString()}`);
        const hours = await response.json();
        setAvailableHours(hours);
        setSelectedHour(undefined); // Reset selected hour when date changes
    };

    React.useEffect(() => {
        if (date) {
        fetchAvailableHours(date);
        }
    }, [date]);

    const formatDate = (date: Date | undefined) => {
        if (!date) return "";
        return date.toLocaleDateString("es-ES", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        });
    };

    const handleSumbmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!date || !selectedHour) return;

        const dataToSend = {
            ...formData,
            fecha: date, // Asegúrate de que la fecha esté en formato Date
            hora: selectedHour,
        };

        const res = await fetch('/api/citas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        });
        if (res.ok) {
            router.push('/terapeuta');
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ //Actualiza el formData
            ...prev,
            [name]: value,
        }));
    };

    React.useEffect(() => {
        setFormData(prev => ({
            ...prev,
            fecha: date,
            hora: selectedHour
        }));
    }, [date, selectedHour]); // Dependencias que, al cambiar, disparan este efecto

    return (
        <>
            <NavbarTera />
            <main className="formUser">
                {/*contenedor del formulario*/}
                <div className="bg-[#FFEBA9] rounded-3xl"> 
                    <div className="flex flex-col">                 
                        {/*titulo*/}
                        <div className="items-start px-[50px]"><br />
                            <div className="flex justify-end"><Link href="/terapeuta" className="hover:text-[#E55E7F] font-extrabold text-[22px]">Volver</Link></div>
                            <h1 className="formUserTitle">Nueva Cita</h1>
                        </div>
                    </div>
                    <div className="formUserDiv items-center justify-center"> 
                        <div className="formUserDiv"> 
                            {/*titulo e instrucciones */}
                            <div className="formUserForm"><br />
                                <form className="w-full pl-4" onSubmit={handleSumbmit}>{/*Formulario*/}
                                    <h3 className="formUserSubtitle">Datos del paciente</h3> 
                                
                                    <div className="mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Nombre(s)</p>
                                            <input required={true} name="nombre" id="nombre" type="text" value={formData.nombre} onChange={handleChange} className="w-3/4 outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" />
                                        </div>
                                    </div>

                                    <div className="formUserDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4 mr-10">
                                            <p className="formUserText">Apellido paterno</p>
                                            <input required={true} name="apellidoPaterno" id="apellidoPaterno" type="text" value={formData.apellidoPaterno} onChange={handleChange} className="outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" />     
                                        </div>
                                        <div className="mb-4">
                                            <p className="formUserText">Apellido materno</p>
                                            <input required={false} name="apellidoMaterno" id="apellidoMaterno" type="text" value={formData.apellidoMaterno} onChange={handleChange} className="outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" />     
                                        </div>
                                    </div>

                                    <div className="formUserDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4 mr-10">
                                            <p className="formUserText">Teléfono</p>
                                            <input required={false} name="celular" id="celular" type="number" value={formData.celular} onChange={handleChange} className="outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" />     
                                        </div>
                                    </div>

                                    <h3 className="formUserSubtitle">Día y hora de la cita</h3>
                                    <div className="mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Seleccione fecha y hora</p>
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                className="rounded-md border w-full"
                                            />
                                            
                                        </div>
                                        <div className="flex justify-center">
                                            <div className="my-2">
                                                <p className="mt-4 text-center items-center">{formatDate(date)}</p>
                                            </div>
                                            
                                            {date && (
                                                <div className="my-4 flex flex-col items-center">
                                                    <select 
                                                    className="outline-none text-base p-2 border-gray-300 rounded-lg w-1/2"
                                                    value={selectedHour || ''}
                                                    onChange={(e) => setSelectedHour(e.target.value)}
                                                    >
                                                    <option value="" disabled>Seleccione una hora</option>
                                                    {availableHours.length > 0 ? (
                                                        availableHours.map((hour) => <option key={hour} value={hour}>{hour}</option>)
                                                    ) : (
                                                        <option value="" disabled>No hay horas disponibles</option>
                                                    )}
                                                    </select>
                                                </div>
                                            )}
                                        </div>
                                        
                                    </div>
                                    {selectedHour && (
                                        <div className="my-4 text-center">
                                            <CustomButton
                                                btnType="submit"
                                                title="Agendar"
                                                containerStyles="btnStyle min-w-[100px] font-medium textButton mt-5 h-10"
                                            />
                                        </div>
                                    )} <br />
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            
        </>
    );
};
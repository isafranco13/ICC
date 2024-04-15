"use client"
import { Footer} from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { AuthOptions } from "next-auth";
import Image from 'next/image';
import CustomButton from '../../components/CustomButton';
import NavbarTera from "@/components/NavbarTera";
import {Calendar, dayjsLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';





const Dashboard = async () => { // async ({user}: Props)  -> NO BORRAR ESTA EN PRUEBA
    const session = await getServerSession();
    if (!session) {
      redirect("/signin");
    }
    
    //componentes del calendario
    const localizer = dayjsLocalizer(dayjs);
    
    return (
        <>
            <NavbarTera />
            <main className="flex justify-center items-center w-full flex-1 main">
                <br /><br /><br /><br />
            {/*1 er div - div principal*/}
            <div className="flex flex-row gap-[50px]">
                <div className="w-full items-center justify-center">{/* px-50 2do div- seccion citas */}
                    <h1 className="font-bold text-[30px] text-[#05814E] items-center">Calendario</h1>
                    <br />
                    <div className="h-[500px] w-[500] items-center">
                    <Calendar
                        localizer={localizer}
                        style={{
                            borderRadius: 20,
                            height: '100%',
                            width: '100%',
                        }}
                        components={{
                            
                        }}
                        length={1}
                    /></div>
                    <CustomButton
                                    btnType="submit"
                                    title="Añadir Cita"
                                    containerStyles="text-white rounded-lg bg-pink-400 min-w-[100px] w-full font-medium textButton mt-5 hover:bg-[#E55E7F]"
                                /> 
                </div> {/* fin de calendario */}

                    {/*3er div - seccion de citas */}
                    <div className="divYellowContainer bg-[#FFEBA9CC] rounded-[40px] ">
                    <h1 className="pl-[30px] font-bold text-2xl">Citas</h1>
                    <div className="flex justify-start items-center w-full h-[120px] rounded-lg pl-2 mt-[14px]"> {/*div de terapeuta*/}
                        <div className="flex items-center"> 
                            <Image
                            src="/userb.png"
                            alt="perfil"
                            width={66} //97
                            height={66} //96
                            className=" object-contain rounded-full bg-[#0DF591] " 
                            />
                        </div>
                        <div className="ms-[15px] flex flex-col flex-grow items-stretch">
                            <h2 className="font-semibold text-[20px]">Sutanito Perez</h2>
                            <div className="flex items-center">
                                    <div className="flex items-center"> {/*div de hora */}
                                    <Image
                                        src="/calendario.png"
                                        alt="reloj"
                                        width={20} 
                                        height={20} 
                                        className=" object-contain mr-2" 
                                     />
                                    <p className="font-medium text-[19px]">20-marzo-2024 15:00</p>
                                    </div>
                                    <div className="flex items-center "> {/*div de historial*/}
                                    <Image
                                        src="/descargar.png"
                                        alt="ubi"
                                        width={20} 
                                        height={20} 
                                        className=" object-contain mr-2 ms-[40px]" 
                                    />
                                    <a href="#"><p className="font-medium text-[19px] hover:text-[#05814E]">Descargar Historial Clinico</p></a>
                                    </div>
                            </div>
                        </div>
                    </div>{/*fin div de terapeuta*/}
                        <div className=" bg-white rounded-[20px] w-[620px] h-[280px]"> {/*Cuadro de cita */}
                            <br />
                            <h1 className="pl-[30px] font-bold text-2xl">Notas</h1>
                            <form action="">
                            <textarea name="notas" id="notas" placeholder="Agregue sus notas aqui" className="resize-none bg-white outline-none text-base mx-[30px] w-[570px] h-[170px] whitespace-normal break-words"></textarea>
                             {/* Sección piscologo, fecha y ubicación */}
                             <div className="flex justify-end">
                             <CustomButton
                                    btnType="submit"
                                    title="Guardar"
                                    containerStyles="text-white rounded-lg bg-pink-400 min-w-[100px] font-medium textButton mt-5 hover:bg-[#E55E7F] h-10 mt-[.5px] mr-[18px]"
                                    
                                /> 
                             </div>
                            </form>
                             
                        </div> {/*Fin cuadro de cita */}
                    </div> {/*Fin 3 div */}
            </div>{/* Fin 1er div */}
            </main>
        </>
    );
};

export default Dashboard;

"use client"
import { Footer} from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { AuthOptions } from "next-auth";
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import NavbarTera from "@/components/NavbarTera";
import {Calendar, dayjsLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import type { User } from "next-auth"
import Link from "next/link"

const Dashboard = async () => {
    /*const session = await getServerSession();
    if (!session) {
      redirect("/signin");
    }
    */
    //componentes del calendario
    const localizer = dayjsLocalizer(dayjs);
    
    return (
        <>                             <NavbarTera />
                   {/* <div className="containerUser">
                        <div className="navbarUser">
                            <NavbarTera />
                        </div>
    */}    

                        <div className="section-3 h-max">
                            {/*<h1 className="font-bold text-[30px] text-[#05814E] items-center">Calendario</h1>*/}
                            
                            <div className="h-[500px] w-[500] items-center">
                                    <Calendar
                                        localizer={localizer}
                                        style={{
                                            backgroundColor: 'white',
                                            borderRadius: 20,
                                            height: '100%',
                                            width: '100%',
                                        }}
                                        components={{
                                            
                                        }}
                                        length={1}
                                    />
                            </div>
                            <Link href="/terapeuta/agendar-cita">
                                <CustomButton
                                    btnType="button"
                                    title="Añadir Cita"
                                    containerStyles="text-white rounded-lg bg-pink-400 min-w-[100px] w-full font-medium textButton mt-5 hover:bg-[#E55E7F]"
                                /> 
                            </Link>                            
                        </div>

                        <div className="section-4 h-max">
                            <h1 className="font-bold text-2xl">Citas</h1>
                            <div className="flex justify-start items-center w-full h-[120px] rounded-lg pl-2 mt-[14px]">
                                <div className="flex items-center"> 
                                    <Image
                                    src="/userb.png"
                                    alt="perfil"
                                    width={66} 
                                    height={66}
                                    className=" object-contain rounded-full bg-[#0DF591] " 
                                    />
                                </div>
                                <div className="ms-[15px] flex flex-col flex-grow items-stretch">
                                    <h2 className="font-semibold text-[20px]">Sutanito Perez</h2>
                                    <div className="flex items-center">
                                        <div className="flex items-center"> 
                                            <Image
                                                src="/calendario.png"
                                                alt="reloj"
                                                width={20} 
                                                height={20} 
                                                className=" object-contain mr-2" 
                                            />
                                            <p className="font-medium text-[19px]">20-marzo-2024 15:00</p>
                                        </div>
                                        <div className="flex items-center "> 
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
                            </div>

                            <div className="section-5 h-max">
                                <h1 className="pl-[30px] font-bold text-2xl">Notas</h1>
                                    <form action="">
                                        <textarea name="notas" id="notas" placeholder="Agregue sus notas aqui" className="resize-none bg-white outline-none text-base w-full h-36 whitespace-normal break-words"></textarea>
                                        <div className="flex justify-end">
                                            <CustomButton
                                                btnType="submit"
                                                title="Guardar"
                                                containerStyles="text-white rounded-lg bg-pink-400 min-w-[100px] font-medium textButton mt-5 hover:bg-[#E55E7F] h-10 mt-[.5px] mr-[18px]"
                                            /> 
                                        </div>

                                    </form>
                            </div>
                        </div>

    {/*
                        <div className="section-3 h-max">
                            <h1 className="font-bold text-[30px] text-[#05814E] items-center">Calendario</h1>
                            
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
                                />
                            </div>
                            <CustomButton
                                    btnType="submit"
                                    title="Añadir Cita"
                                    containerStyles="text-white rounded-lg bg-pink-400 min-w-[100px] w-full font-medium textButton mt-5 hover:bg-[#E55E7F]"
                            /> 
                        </div>




                        <div className="section-4 h-max">
                            <h1 className="font-bold text-2xl">Citas</h1>
                            <div className="flex justify-start items-center w-full h-[120px] rounded-lg pl-2 mt-[14px]">
                                <div className="flex items-center"> 
                                    <Image
                                    src="/userb.png"
                                    alt="perfil"
                                    width={66} 
                                    height={66}
                                    className=" object-contain rounded-full bg-[#0DF591] " 
                                    />
                                </div>
                                <div className="ms-[15px] flex flex-col flex-grow items-stretch">
                                    <h2 className="font-semibold text-[20px]">Sutanito Perez</h2>
                                    <div className="flex items-center">
                                        <div className="flex items-center"> 
                                            <Image
                                                src="/calendario.png"
                                                alt="reloj"
                                                width={20} 
                                                height={20} 
                                                className=" object-contain mr-2" 
                                            />
                                            <p className="font-medium text-[19px]">20-marzo-2024 15:00</p>
                                        </div>
                                        <div className="flex items-center "> 
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
                            </div>

                            <div className="section-5 h-max">
                                <h1 className="pl-[30px] font-bold text-2xl">Notas</h1>
                                    <form action="">
                                        <textarea name="notas" id="notas" placeholder="Agregue sus notas aqui" className="resize-none bg-white outline-none text-base w-full h-36 whitespace-normal break-words"></textarea>
                                        <div className="flex justify-end">
                                            <CustomButton
                                                btnType="submit"
                                                title="Guardar"
                                                containerStyles="text-white rounded-lg bg-pink-400 min-w-[100px] font-medium textButton mt-5 hover:bg-[#E55E7F] h-10 mt-[.5px] mr-[18px]"
                                            /> 
                                        </div>

                                    </form>
                            </div>
                        </div>
    */}
                {/*   </div>   */}
                </>
    );
};

export default Dashboard;
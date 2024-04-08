import { Footer} from "@/components"; {/*{ Footer, NavbarSignOut } */}
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from 'next/image';
import NavbarUsuario from "@/components/NavbarUsuario";
import type { User } from "next-auth"


type Props = {
    user: User,
}
  
const Dashboard = async () => { // async ({user}: Props)  -> NO BORRAR ESTA EN PRUEBA
    const session = await getServerSession();
    if(session?.user.rol !== "terapeuta" && !session){
        redirect("/signin");
    }
    
    if (!session) {
      redirect("/signin");
    }
    
    return (
        <>
            <NavbarUsuario></NavbarUsuario>
            <main className="flex justify-center items-center w-full flex-1 main">
                <br /><br /><br /><br />
            {/*1 er div - div principal*/}
            <div className="flex flex-row gap-[50px]">
                <div className="w-full">{/* px-50 2do div- seccion terpeutas */}
                    <h1 className="font-bold text-2xl">Terapeutas</h1>
                    <div className="flex justify-start w-[357px] h-[120px] bg-[#0DF59147] rounded-lg pl-2 mt-[14px]"> {/*div de terapeuta*/}
                        <div className="flex items-center"> 
                            <Image
                            src="/user.png"
                            alt="perfil"
                            width={66} //97
                            height={66} //96
                            className=" object-contain rounded-full bg-white " 
                            />
                        </div>
                        <div className="ms-[15px] flex flex-col">
                            <h2 className="font-semibold text-[30px]">Psic. Lorena</h2>
                            <div className="flex flex-row">
                                <Image
                                src="/reloj.png"
                                alt="reloj"
                                width={20} 
                                height={20} 
                                className=" object-contain" 
                                />
                                <p className="ms-[10px] font-medium text-[20px]">8:00-19:00</p>
                            </div>
                            <div className="flex flex-row">
                                <Image
                                src="/calendario.png"
                                alt="reloj"
                                width={20} 
                                height={20} 
                                className=" object-contain" 
                                />
                                <a href="#"><p className="ms-[10px] font-medium text-[20px] hover:text-[#05814E]">Ver agenda</p></a>
                            </div>
                        </div>
                    </div>{/*fin div de terapeuta*/}
                </div> {/* fin de sección terpeutas */}

                    {/*3er div - seccion de citas */}
                    <div className="divYellowContainer bg-[#FFEBA9CC] rounded-[40px] ">
                        <div className=" bg-white rounded-[20px] w-[620px] h-[280px]"> {/*Cuadro de cita */}
                            <br />
                            <h1 className="pl-[30px] font-bold text-2xl">Próxima Cita</h1>
                             {/* Sección piscologo, fecha y ubicación */}
                            <div className=" flex items-center bg-[#0DF59147] rounded-[20px] pl-2 mt-[20px] m-8 h-[150px]">
                                <div className="flex flex-column bg-white rounded-[29px] items-stretch w-[80px] h-[80px] relative ms-[15px]">
                                    <h3 className="pl-[15px] font-semibold text-[32px] absolute top-0 left-0">Jun</h3>
                                    <h3 className="pl-[25px] font-semibold text-[32px] absolute bottom-0 left-0">10</h3>
                                </div>
                                <div className="ms-[15px] flex flex-col flex-grow "> {/* flex-col flex-grow Agripación de doc, fecha ubi */}
                                    <h2 className="font-semibold text-[30px]">Pisc.Lorena</h2>
                                    <div className="flex items-center">
                                    <div className="flex items-center"> {/*div de hora */}
                                    <Image
                                        src="/reloj.png"
                                        alt="reloj"
                                        width={20} 
                                        height={20} 
                                        className=" object-contain mr-2" 
                                     />
                                    <p className="font-medium text-[20px]">10:00am</p>
                                    </div>
                                    <div className="flex items-center "> {/*div de ubicacion */}
                                    <Image
                                        src="/ubicacion.png"
                                        alt="ubi"
                                        width={20} 
                                        height={20} 
                                        className=" object-contain mr-2 ms-[40px]" 
                                    />
                                    <a href="#"><p className="font-medium text-[20px] hover:text-[#05814E]">Ver Ubicacion</p></a>
                                    
                                    </div>
                                    </div>
                                    
                                </div> 
                            </div>{/*Fin sección psicologo, fecha y ubi */}
                        </div> {/*Fin cuadro de cita */}
                    </div> {/*Fin 3 div */}
            </div>{/* Fin 1er div */}
            </main>
        </>
    );
};

export default Dashboard;
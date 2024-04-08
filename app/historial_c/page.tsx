"use client"
import { Footer, NavbarSignOut} from "@/components";
import Link from "next/link"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CustomButton from '../../components/CustomButton';
import MyListbox from "@/components/listboxHijo";
//import React, {useState} from "react";


const Historial = async () => {
    //Hay que cambiar para que funcione la session y el listboxHijo
    /*const session = await getServerSession();
    if (!session) {
      redirect("/signin");
    }*/
    
    return (
        <>
           {/*<NavbarSignOut />*/}
            {/*<br /><br /><br />*/}
            <main className="py-[58px] px-[142px]  h-[1932px] flex-1">
                {/*contenedor del formulario*/}
                <div className="flex flex-col  bg-[#FFEBA9] rounded-lg"> 
                    {/*titulo e instrucciones */}
                    <div className="items-start px-[50px] py-[10px]"><br />
                        <div className="flex justify-end"><Link href="/dashboardU" className="hover:text-[#E55E7F] font-extrabold text-[22px]">Omitir</Link></div>
                        <h1 className="font-bold text-[44px]">Historial clinico</h1>
                        <p>Por favor llene este formulario para una mejor experiencia con el terapeuta</p> 
                    </div>
                    {/*contenido del formulario*/}
                    <div className="items-center w-full h-full px-[221px] py-[30px]">
                        <form className=" w-full pl-4" method="post">{/*onSubmit={handleSumbmit}*/}
                            <h3 className="text-[#5c5a5a] text-[30px] font-semibold">Datos generales</h3>
                            <div className="flex flex-wrap mt-[20px]"> {/*div principal de datos generales */}
                                <div className="w-[100px] pl-[30px]">
                                    <input type="hidden" name="name"  /> {/*Input para tomar el nombre */}
                                <p className="text-[20px] text-black font-medium">Telefono</p>
                                <input required={true} name="telefono"  id="telefono" type="number" placeholder="6145153999" 
                                className="rounded-[20px] w-[147px] h-[25px] outline-none text-base pl-2"/></div> {/*value={formData.telefono}  onChange={handleChange}*/}
                                <div className="w-[150px] pl-[100px]">
                                    <p className="text-[20px] text-black font-medium">Edad</p>
                                    <input name="edad"  id="edad"  required={true} type="number" placeholder="25" 
                                    className="rounded-[20px] w-[147px] h-[25px] outline-none text-base pl-2"/></div>
                                </div>
                                <div className="flex flex-wrap pt-[10px]">
                                <div className="w-full pl-[30px]">
                                <p className="text-[20px] text-black font-medium">Estado Civil</p></div>
                                </div>
                                <div className="flex flex-row pl-[30px] gap-[10px]">
                                <input type="checkbox" id="casado" name="casado" className="w-6 h-6 outline-none text-base"/>
                                <label htmlFor="casado" className="text-[19px]">Casado(a)</label>
                                <input type="checkbox" id="soltero" name="soltero" className="w-6 h-6 outline-none text-base"/>
                                <label htmlFor="soltero" className="text-[19px]">Soltero(a)</label>
                            </div><br />

                            <h3 className="text-[#5c5a5a] text-[30px] font-semibold">Datos familiares</h3>
                        <div className="flex flex-wrap pt-[10px]">
                            <div className="w-full pl-[30px]"><p className="text-[20px] text-black font-medium">Seleccione si uno de sus padres ha fallecido</p></div>
                            
                            <div className="flex flex-row pl-[30px] gap-[10px]">
                                <input type="checkbox" id="mama" name="mama" className="w-6 h-6 outline-none text-base"/>
                                <label htmlFor="mama" className="text-[19px]">Mamá</label>
                                <input type="checkbox" id="papa" name="papa" className="w-6 h-6 outline-none text-base"/>
                                <label htmlFor="papa" className="text-[19px]">Papá</label>
                            </div>
                        </div>
                        <br />
                        <div className="w-full pl-[30px] gap-[40px]">{/**/}
                        <p className="text-[20px] text-black font-medium">Número de hijo</p>
                        <p className="text-[15px] text-red-500 italic">*Incluyendo abortos que conozca dentro de su familia*</p><br />
                            <MyListbox/>
                        <br /><br />
                        <p className="text-[20px] text-black font-medium">¿Tiene Hijos?</p>
                            <div className="flex flex-row  gap-[10px]"> 
                                <input type="checkbox" id="si" name="si" className="w-6 h-6 outline-none text-base"/>
                                <label htmlFor="si">Si</label>
                                <input type="checkbox" id="no" name="no" className="w-6 h-6 outline-none text-base"/>
                                <label htmlFor="no">No</label><br /><br />
                            </div>
                            
                        <p className="text-[20px] text-black font-medium">¿Cuántos hijos tiene?</p>
                        <p className="text-[15px] text-red-500 italic">*Incluyendo abortos que conozca dentro de su familia*</p><br />
                            <MyListbox/><br /><br />
                        </div>
                        
                            <h3 className="text-[#5c5a5a] text-[30px] font-semibold">Datos medicos</h3>
                            <div className="flex flex-wrap pt-[10px] ">
                                <div className="w-full pl-[30px]">
                                <p className="text-[20px] text-black font-medium">¿Ha tenido operaciones?</p></div>
                                <div className="flex flex-row pl-[30px] gap-[10px]"> 
                                <input type="checkbox" id="si" name="si" className="w-6 h-6 outline-none text-base"/>
                                <label htmlFor="si">Si</label>
                                <input type="checkbox" id="no" name="no" className="w-6 h-6 outline-none text-base"/>
                                <label htmlFor="no">No</label><br /><br />
                                </div>
                                <textarea  name="operaciones"  id="operaciones"  placeholder="Describa sus operaciones, de que trataron" 
                                className="resize-none bg-white outline-none text-base mx-[30px] w-[570px] h-[170px] whitespace-normal break-words rounded-[20px] pl-2 pt-2"></textarea> {/*value={formData.operaciones} */}
                                <br /><br />
                                <div className="w-full pl-[30px]"><br />
                                <p className="text-[20px] text-black font-medium">¿Tóma algun medicamento?</p></div>
                                <div className="flex flex-row pl-[30px] gap-[10px]"> 
                                <input type="checkbox" id="si" name="si" className="w-6 h-6 outline-none text-base"/>
                                <label htmlFor="si">Si</label>
                                <input type="checkbox" id="no" name="no" className="w-6 h-6 outline-none text-base"/>
                                <label htmlFor="no">No</label><br /><br />
                                </div>
                                <textarea name="medicamentos"  id="medicamentos" placeholder="Nombre los medicamentos que toma y su función" 
                                className="resize-none bg-white outline-none text-base mx-[30px] w-[570px] h-[170px] whitespace-normal break-words rounded-[20px] pl-2 pt-2"></textarea>
                                
                            </div><br />
                               
                            <CustomButton
                                    btnType="submit"
                                    title="Guardar"
                                    containerStyles="text-white rounded-lg bg-pink-400 min-w-[100px] font-medium textButton mt-5 hover:bg-[#E55E7F] h-10"
                                /> 
                        </form>
                    </div>  
                </div>
            </main>
            
        </>
    );
};

export default Historial;
"use client"
import { Footer, NavbarSignOut} from "@/components";
import Link from "next/link"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CustomButton from '../../../components/CustomButton';
import MyListbox from "@/components/listboxHijo";
import InputNumber from "@/components/InputNumber";
//import React, {useState} from "react";


const Historial = async () => {
    //Hay que cambiar para que funcione la session y el listboxHijo
    /*const session = await getServerSession();
    if (!session) {
      redirect("/signin");
    }*/
    
    return (
        <>
            <main className="formUser">
                {/*contenedor del formulario*/}
                <div className="bg-[#FFEBA9] rounded-lg"> 
                    <div className="flex flex-col rounded-lg">                 
                        {/*titulo e instrucciones */}
                        <div className="items-start px-[50px] py-[10px]"><br />
                            <div className="flex justify-end"><Link href="/usuario" className="hover:text-[#E55E7F] font-extrabold text-[22px]">Omitir</Link></div>
                            <h1 className="formUserTitle">Historial clínico</h1>
                            <p>Por favor llene este formulario para una mejor experiencia con el terapeuta</p> 
                        </div>
                    </div>
                    <div className="formUserDiv"> 
                        <div className="formUserDiv"> 
                            {/*titulo e instrucciones */}
                            <div className="formUserForm"><br />
                                <form className=" w-full pl-4" method="post">{/*onSubmit={handleSumbmit}*/}
                                    <h3 className="formUserSubtitle">Datos generales</h3> 
                                
                                    <div className="formUserDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <input type="hidden" name="name"  /> {/*Input para tomar el nombre */}
                                            <p className="formUserText">Telefono</p>
                                            <input required={true} name="telefono"  id="telefono" type="number" placeholder="6145153999" className="outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" />
                                        </div>
                                        <div className="edad">
                                            <p className="formUserText">Edad</p>
                                            <input name="edad"  id="edad"  required={true} type="number" placeholder="25" className="inputBox" />
                                        </div>
                                    </div>

                                    <div className="formUserDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Estado Civil</p>
                                            
                                            <div className="radio"> 
                                                <div className="mr-4">
                                                    <input type="radio" id="casado" name="estadoCivil" value="casado" className="textInput" />
                                                    <label htmlFor="casado" className="ml-2 text-[19px]">Casado(a)</label>
                                                </div>

                                                <div>
                                                    <input type="radio" id="soltero" name="estadoCivil" value="soltero" className="textInput" />
                                                    <label htmlFor="soltero" className="ml-2 text-[19px]">Soltero(a)</label>
                                                </div>
                                            </div>      
                                        </div>
                                    </div>

                                    <h3 className="formUserSubtitle">Datos familiares</h3>
                                    <div className="formUserDiv pt-[10px]">
                                        <div className="w-full pl-[30px]"><p className="formUserText">Seleccione si uno de sus padres ha fallecido</p></div>
                                        
                                        <div className="flex flex-row pl-[30px] gap-[10px]">
                                            <input type="checkbox" id="mama" name="mama" className="textInput"/>
                                            <label htmlFor="mama" className="text-[19px]">Mamá</label>
                                            <input type="checkbox" id="papa" name="papa" className="textInput"/>
                                            <label htmlFor="papa" className="text-[19px]">Papá</label>
                                        </div>
                                    </div><br/>

                                    <div className="w-full pl-[30px] gap-[40px]">{/**/}
                                        <p className="formUserText">Número de hijo</p>
                                        <p className="formUserWarning">*Incluyendo abortos que conozca dentro de su familia*</p><br />
                                        <InputNumber/> <br/><br/>
                                        <p className="formUserText">¿Tiene hijos?</p>
                                            <div className="flex flex-row  gap-[10px]"> 
                                                <input type="radio" id="si" name="hijos" className="textInput"/>
                                                <label htmlFor="si">Si</label>
                                                <input type="radio" id="no" name="hijos" className="textInput"/>
                                                <label htmlFor="no">No</label><br /><br />
                                            </div>
                                            
                                        <p className="formUserText">¿Cuántos hijos tiene?</p>
                                        <p className="formUserWarning">*Incluyendo abortos que conozca dentro de su familia*</p><br />
                                        <InputNumber/> <br/><br/>
                                    </div>

                                    <h3 className="formUserSubtitle">Datos médicos</h3> 
                                    <div className="w-full pl-[30px] gap-[40px]">{/**/}
                                        <p className="formUserText">¿Ha tenido operaciones?</p>
                                            <div className="flex flex-row  gap-[10px]"> 
                                                <input type="radio" id="si" name="operaciones" className="textInput"/>
                                                <label htmlFor="si">Si</label>
                                                <input type="radio" id="no" name="operaciones" className="textInput"/>
                                                <label htmlFor="no">No</label><br /><br />
                                            </div>

                                        <textarea  name="operaciones"  id="operaciones"  placeholder="Describa sus operaciones, de qué trataron" 
                                        className="flex w-full inputBox resize-none bg-white h-[170px] whitespace-normal break-words pt-2"></textarea> {/*value={formData.operaciones} */}
                                        <br /><br />

                                            <p className="formUserText">¿Toma algún medicamento?</p>
                                                <div className="flex flex-row  gap-[10px]"> 
                                                    <input type="radio" id="si" name="medicamento" className="textInput"/>
                                                    <label htmlFor="si">Si</label>
                                                    <input type="radio" id="no" name="medicamento" className="textInput"/>
                                                    <label htmlFor="no">No</label><br /><br />
                                                </div>
                                            <textarea  name="medicamentos"  id="medicamentos"  placeholder="Nombre los medicamentos que toma y su función" 
                                            className="flex w-full inputBox resize-none bg-white h-[170px] whitespace-normal break-words pt-2"></textarea> {/*value={formData.operaciones} */}
                                            <br /><br />
                                    </div>

                                    <CustomButton
                                        btnType="submit"
                                        title="Guardar"
                                        containerStyles="text-white rounded-lg bg-pink-400 min-w-[100px] font-medium textButton mt-5 hover:bg-[#E55E7F] h-10"
                                    /> 

                                </form>
                            </div>
                        </div>

                    </div>



                </div>
            </main>
            
        </>
    );
};

export default Historial;
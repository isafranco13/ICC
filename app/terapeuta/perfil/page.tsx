"use client"
import { useEffect, useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; 
import CustomButton from '@/components/CustomButton';
import NavbarTera from "@/components/NavbarTera";

export default function Perfil() {
    const router = useRouter();
    const id = "6652d97eb490e1357e8bbc59";
    const [formData, setFormData] = useState({
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        celular: "",
        edad: "",
        calle: "",
        numExt: "",
        numInt: "",
        cp: "",
        detallesDireccion: "",
        terapias: "",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/perfiles/${id}`);
            const data = await res.json();
            setFormData(data);
            setLoading(false);
        };

        fetchData();
    }, [id]);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch(`/api/perfiles/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            router.push('/terapeuta');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <>  <NavbarTera />
            <main className="formUser bg-[#F5FFFC]">
                <div className="bg-[#FFEBA9] rounded-3xl">
                    <div className="flex flex-col">
                        <div className="items-start px-[50px]"><br />
                            <div className="flex justify-end"><Link href="/terapeuta" className="hover:text-[#E55E7F] font-extrabold text-[22px]">Omitir</Link></div>
                            <h1 className="formUserTitle">Editar Perfil</h1>
                        </div>
                    </div>
                    <div className="formUserDiv items-center justify-center">
                        <div className="formUserDiv">
                            <div className="formUserForm"><br />
                                <form className="w-full pl-4" onSubmit={handleSubmit}>
                                    <h3 className="formUserSubtitle">Datos personales</h3>
                                    <div className="mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Nombre(s)</p>
                                            <input required={true} name="nombre" id="nombre" type="text" className="w-3/4 outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" value={formData.nombre} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="formUserDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4 mr-10">
                                            <p className="formUserText">Apellido paterno</p>
                                            <input required={true} name="apellidoPaterno" id="apellidoPaterno" type="text" className="outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" value={formData.apellidoPaterno} onChange={handleChange} />
                                        </div>
                                        <div className="mb-4">
                                            <p className="formUserText">Apellido materno</p>
                                            <input required={true} name="apellidoMaterno" id="apellidoMaterno" type="text" className="outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" value={formData.apellidoMaterno} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="formUserDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4 mr-10">
                                            <p className="formUserText">Teléfono</p>
                                            <input required={true} name="celular" id="celular" type="number" className="outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" value={formData.celular} onChange={handleChange} />
                                        </div>
                                        <div className="mb-4">
                                            <p className="formUserText">Edad</p>
                                            <input required={true} name="edad" id="edad" type="number" className="outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" value={formData.edad} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <h3 className="formUserSubtitle">Datos del consultorio</h3>
                                    <div className="mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Calle</p>
                                            <input required={true} name="calle" id="calle" type="text" className="w-3/4 outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" value={formData.calle} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="formDiv mt-[20px] pl-[30px]">
                                        <div className="mb-4 formDivW">
                                            <p className="formUserText">Número ext.</p>
                                            <input required={true} name="numExt" id="numExt" type="number" className="w-3/4 outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" value={formData.numExt} onChange={handleChange} />
                                        </div>
                                        <div className="mb-4 formDivW">
                                            <p className="formUserText">Número int.</p>
                                            <input required={false} name="numInt" id="numInt" type="number" className="w-3/4 outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" value={formData.numInt} onChange={handleChange} />
                                        </div>
                                        <div className="mb-4 formDivW">
                                            <p className="formUserText">C.P.</p>
                                            <input required={true} name="cp" id="cp" type="number" className="w-3/4 outline-none text-base pl-2 border-gray-300 rounded-lg py-2 px-4" value={formData.cp} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="w-3/4 mt-[20px] pl-[30px]">
                                        <div className="mb-4">
                                            <p className="formUserText">Indicaciones adicionales del consultorio (color, entre que calles está, que hay alrededor, etc.)</p>
                                            <textarea name="detallesDireccion" id="detallesDireccion" className="flex w-full inputBox resize-none bg-white h-[170px] whitespace-normal break-words pt-2" value={formData.detallesDireccion} onChange={handleChange}></textarea>
                                        </div>
                                    </div>
                                    <h3 className="formUserSubtitle">Datos de sus terapias</h3>
                                    <div className="w-3/4 mt-[20px] pl-[30px]">
                                        <div className="mb-8">
                                            <p className="formUserText">En pocas palabras, describa ¿En qué se enfocan sus terapias?</p>
                                            <textarea name="terapias" id="terapias" className="flex w-full inputBox resize-none bg-white h-[170px] whitespace-normal break-words pt-2" value={formData.terapias} onChange={handleChange}></textarea>
                                        </div>
                                    </div>
                                    <CustomButton
                                        btnType="submit"
                                        title="Guardar"
                                        containerStyles="btnStyle min-w-[100px] font-medium textButton mt-5 h-10"
                                    />
                                    <br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

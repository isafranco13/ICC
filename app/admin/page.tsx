"use client"
import NavBarAdmin from '@/components/NavBarAdmin';
import React, { useState, useEffect, useRef } from 'react';
import { FaUsers } from 'react-icons/fa';
import { TfiWorld } from "react-icons/tfi";
import { BsFillBarChartFill } from "react-icons/bs";
import Chart from 'chart.js/auto';

export default function Home() {
    const [usuarios, setUsuarios] = useState<{ _id: string }[]>([]);
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<Chart>();
    const chartRef2 = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef2 = useRef<Chart>();

    useEffect(() => {
        fetch('/api/usuarios')
            .then(response => response.json())
            .then(data => setUsuarios(data.usuarios));
    }, []);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                // Destruir el gráfico anterior si existe
                if (chartInstanceRef.current) {
                    chartInstanceRef.current.destroy();
                }
                // Crear un nuevo gráfico
                chartInstanceRef.current = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['2023', '2022', '2021', '2020', '2019', '2018'],
                        datasets: [{
                            label: 'Usuarios Registrados',
                            data: [12, 19, 3, 6, 5, 9],
                            backgroundColor: ['#FC83A1'],
                            borderColor: ['#FC83A1'],
                            borderWidth: 0,
                            borderRadius: 15
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                              beginAtZero: true,
                              display: false
                            },
                            x: {
                                grid: {
                                    display: false
                                },
                                ticks: {
                                    color: '#05814E', // Cambia el color de las etiquetas del eje X
                                    font: {
                                        size: 14 // Cambia el tamaño de las etiquetas del eje X a 14px
                                    }
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false // Oculta la leyenda completamente
                            }
                        }
                    }
                });
            }
        }
        if (chartRef2 && chartRef2.current) {
            const ctx2 = chartRef2.current.getContext('2d');
            if (ctx2) {
                // Destruir el gráfico anterior si existe
                if (chartInstanceRef2.current) {
                    chartInstanceRef2.current.destroy();
                }
                chartInstanceRef2.current = new Chart(ctx2, {
                    type: 'line',
                    data: {
                        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                        datasets: [{
                            label: 'Usuarios Registrados',
                            data: [12, 19, 18, 16, 22, 13],
                            backgroundColor: ['rgba(250, 160, 182, 0.3)'],
                            borderColor: ['#FC83A1'],
                            borderWidth: 2,
                            fill: true
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                              beginAtZero: true,
                              display: false
                            },
                            x: {
                                display: false
                            }
                        },
                        plugins: {
                            legend: {
                                display: false // Oculta la leyenda completamente
                            }
                        }
                    }
                });
            }
        }
    }, []);

    return (
        
        <main className="overflow-hidden">
            <div className="contenedor">
                <div style={{ display: 'flex' }}>
                    <div>
                        <NavBarAdmin />
                    </div>

                    <div style={{ display: 'inline-block', width: '100%', marginLeft: '2%' , marginRight: '2%'}}>
                        {/* Sección de visitas y número de usuarios registrados */}
                        <div style={{ display: 'flex', margin: '3%', alignItems: 'center', justifyContent: 'center' }}>
                            <div className='w-5/12 h-44 mr-6 pt-5 pb-7 bg-[#0DF591] rounded-2xl text-center text-[#F5FFFC] text-3xl font-bold'>
                                <h1>Visitas Online</h1>
                                <section className='flex items-center justify-center mt-6'>
                                    <h1 className='text-5xl mr-6'> 1000 </h1>
                                    <TfiWorld 
                                    className='text-6xl w-1/5 ml-6' />
                                </section>
                            </div>
                            <div className='w-5/12 h-44 ml-6 pt-5 pb-7 bg-[#0DF591] rounded-2xl text-center text-[#F5FFFC] text-3xl font-bold'>
                                <h1>Usuarios Registrados</h1>
                                <section className='flex items-center justify-center mt-6'>
                                    <h1 className='text-5xl mr-6'> {usuarios.length} </h1>
                                    <FaUsers
                                    className='text-6xl w-1/5 ml-6' />
                                </section>
                            </div>
                        </div>
                        {/* Sección de gráficas */}
                        <div className='w-full text p-3'>
                            <h1 className='flex text-[#0DF591] text-2xl font-bold mb-3 items-center'><BsFillBarChartFill className='mr-2'/> Estadísticas</h1>
                            {/* Gráfico de barras */}
                            <div className='w-full h-80 mb-24'>
                                <p className='text-[#05814E] font-medium mb-3'>Usuarios registrados los últimos 6 años</p>
                                <canvas ref={chartRef} className='w-full h-full m-auto'></canvas>
                            </div>
                            {/* Gráfico de linea */}
                            <div className='w-full h-96 my-6'>
                                <p className='text-[#F8C743] font-semibold'>Usuarios registrados los últimos 6 meses</p>
                                <canvas ref={chartRef2} className='w-full h-full m-auto'></canvas>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    );
}
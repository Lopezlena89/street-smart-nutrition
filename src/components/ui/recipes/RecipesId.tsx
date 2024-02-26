import { Navigate, redirect, useParams } from "react-router-dom"
import { NavbarPage } from "../NavbarPage"
import { getrecipe } from "../../../tools/get-data-category"
import { Encabezado } from "../categories"
import { Divider, Image } from "@nextui-org/react"
import { Copiright, FormRecetas } from "../principal"

interface Props {
    
    category: string[];
    title: string;
    subtitle: string;
    img: string;
    tiempoPreparacion: string;
    horaCocinar: string;
    TiempoTotal: string;
    PreparacionEquipo: string[];
    PreparacionIngredientes: string[];
    PreparacionIntrucciones: string[];
    preparacionNotas: string;
    
}


export const RecipesId = () => {
    const {name} = useParams()
    
    const data:Props = getrecipe(name!);
    if(!data){
        return <Navigate to="/"/>
    }
    const {
        title,
        subtitle,
        img,
        tiempoPreparacion,
        horaCocinar,
        TiempoTotal,
        PreparacionEquipo,
        PreparacionIngredientes,
        PreparacionIntrucciones,
        preparacionNotas,
    } = data
    
    
  return (
    <>
       <div className="w-full h-auto flex flex-col items-center">
        <NavbarPage/>
        <div className="w-full h-[1000px] md:w-[75%] flex flex-col justify-start items-start mt-[70px] p-5" >
            <Encabezado title={title} subtitle={''}/>
            <div className="w-full h-auto flex flex-col z-0">
                <div className="w-full h-auto p-5 grid grid-cols-1 lg:grid-cols-3">
                    <div className="lg:col-span-1 h-full w-full flex justify-center p-5">
                        <Image
                        width={400}
                            alt="NextUI hero Image"
                            src={`/assets/${img}.png`}
                            className="lg:col-span-1   "
                        />
                    </div>
                    <div className="mt-5 lg:mt-0 lg:col-span-2 px-5">
                        <div className="w-full h-auto">
                            {subtitle}
                        </div>
                        <div className="mt-5">
                            <Divider className="my-full bg-black" />
                            <div className="w-full h-[75px] grid grid-cols-3">
                                <div className="w-full h-auto flex  justify-between ">
                                    <div className="flex flex-col justify-center items-center w-[99%]">
                                        <span className="text-sm">Tiempo de preparación</span>
                                        <span className="font-bold">{tiempoPreparacion}</span>
                                    </div>
                                    <div className="h-full flex items-center">
                                        <Divider orientation="vertical"  className="bg-black h-[80%] "/>
                                    </div>
                                </div>
                                <div className="w-full h-auto flex  justify-between ">
                                    <div className="flex flex-col justify-center items-center w-[99%]">
                                        <span className="text-sm">Hora de cocinar</span>
                                        <span className="font-bold">{horaCocinar}</span>
                                    </div>
                                    <div className="h-full flex items-center">
                                        <Divider orientation="vertical"  className="bg-black h-[80%] "/>
                                    </div>
                                </div>
                                <div className="w-full h-auto flex  justify-between ">
                                    <div className="flex flex-col justify-center items-center w-[99%]">
                                        <span className="text-sm">Tiempo total</span>
                                        <span className="font-bold">{TiempoTotal}</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <Divider className="my-full bg-black" />
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto px-10 py-3">
                    <h2 className="text-3xl font-bold mb-5">Ingredientes</h2>
                    <ul>
                    {
                        PreparacionIngredientes.map((data:string,index:number)=>(
                            <li key={index}>{`- ${data}`}</li>
                        ))

                    }
                    </ul>
                </div>
                <div className="w-full h-auto px-10 py-3">
                    <h2 className="text-3xl font-bold mb-5">Equipo de cocina</h2>
                    <ul>
                    {
                        PreparacionEquipo.map((data:string,index:number)=>(
                            <li key={index}>{`- ${data}`}</li>
                        ))

                    }
                    </ul>
                </div>
                <div className="w-full h-auto px-10 py-3">
                    <h2 className="text-3xl font-bold mb-5">Intrucciones</h2>
                    <ul>
                    {
                        PreparacionIntrucciones.map((data:string,index:number)=>(
                            <li key={index}>{`- ${data}`}</li>
                        ))

                    }
                    </ul>
                </div>
                <div className="w-full h-auto px-10 py-3">
                    <h2 className="text-3xl font-bold mb-5">Notas</h2>
                    <span>{preparacionNotas}</span>
                </div>
            </div>
            <FormRecetas/>
            <Copiright/>
        </div>
       </div>
    </>
  )
}

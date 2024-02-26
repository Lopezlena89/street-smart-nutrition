import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

interface Props{
   
    data: { 
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
}

export const BodyCategory = ({data}:Props|any) => {
   
  return (
    <>
        <div className={`w-[95%] h-auto  m-1 z-0`}>
            <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
                <NavLink to={`/recipes/${data.title}`} className=" w-full h-full">
                    <CardBody className="overflow-visible p-0">
                        <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        
                        alt={data.title}
                        className="w-full object-cover h-[200px] sm:h-[300px] md:h-[400px]"
                        src={`/assets/${data.img}.webp`}
                        />
                    </CardBody>
                </NavLink>
                <CardFooter className="text-small justify-between min-h-[100px]">
                    <b>{data.title}</b>
                    <p className="text-default-500">{}</p>
                </CardFooter>
            </Card>
        </div>
    </>
  )
}

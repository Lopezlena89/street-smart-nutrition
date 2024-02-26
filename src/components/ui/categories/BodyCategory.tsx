import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

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

export const BodyCategory = ({data}:Props) => {
   
  return (
    <>
        <div className={`w-[95%] h-auto  m-1 z-0`}>
            <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                <CardBody className="overflow-visible p-0">
                    <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    
                    alt={data.title}
                    className="w-full object-cover h-[200px] sm:h-[300px] md:h-[400px]"
                    src={`/assets/${data.img}.png`}
                    />
                </CardBody>
                <CardFooter className="text-small justify-between min-h-[100px]">
                    <b>{data.title}</b>
                    <p className="text-default-500">{}</p>
                </CardFooter>
            </Card>
        </div>
    </>
  )
}

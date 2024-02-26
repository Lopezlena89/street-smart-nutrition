import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import { NavLink } from "react-router-dom"


export const VeganFood = () => {
  return (
    <>
        <div className="w-full h-auto  flex flex-col p-5">
            <div className="w-full h-[180px] flex flex-col justify-center p-5">
                <h3 className="text-3xl font-bold">Ideas de comidas veganas</h3>
                <p className="mt-4">¡Cada receta que se presenta aquí es 100 % basada en plantas y apta para veganos, 
                con todo el sabor y la satisfacción que esperarías de una comida nutritiva y atrevida!</p>
            </div>
            <div className="w-full h-auto  grid grid-cols-1 md:grid-cols-3  z-0">
                <div className="m-1 w-full h-[85%] z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <NavLink to="/recipes/Tacos de sofritas con ensalada de repollo dulce y cilantro" className=" w-full h-full">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt="Tacos de sofritas con ensalada de repollo dulce y cilantro"
                                className="w-[96%] m-1 object-cover h-[500px]  md:h-[400px]"
                                src={`/assets/IMG_1758-728x485.webp`}
                                />
                            </CardBody>
                        </NavLink>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Tacos de sofritas con ensalada de repollo dulce y cilantro</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-[85%] z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <NavLink to="/recipes/Receta de ensalada de guisantes partidos para el verano" className=" w-full h-full">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt="Receta de ensalada de guisantes partidos para el verano"
                                className="w-[96%] m-1 object-cover h-[700px]  md:h-[400px]"
                                src={`/assets/IMG_6089-728x728.webp`}
                                />
                            </CardBody>
                        </NavLink>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Receta de ensalada de guisantes partidos para el verano</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-[85%] z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <NavLink to="/recipes/Batatas Rellenas Mediterráneas con Hummus" className=" w-full h-full">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt="Batatas Rellenas Mediterráneas con Hummus"
                                className="w-[96%] m-1 object-cover h-[500px]  md:h-[400px]"
                                src={`/assets/IMG_4569-728x485.webp`}
                                />
                            </CardBody>
                        </NavLink>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Batatas Rellenas Mediterráneas con Hummus</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                
                
            </div>
        </div>
    </>
  )
}

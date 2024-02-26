import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"

import { NavLink } from "react-router-dom"


export const MiddleSite = () => {
  return (
    <>
        <div className="w-full h-auto p-5 ">
            <div className="w-auto h-auto flex flex-col justify-center ml-5">
                <p className="text-3xl font-bold">Delicias sin lácteos</p>
                <p>Estas recetas no contienen leche ni productos lácteos, incluidos yogur, mantequilla, queso, crema agria y otros ingredientes lácteos comunes.</p>
            </div>
            <div className="w-full h-full  grid grid-cols-2 md:grid-cols-4 z-0">
                <div className="m-1 w-full h-full">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <NavLink to="/recipes/Granizado de arándanos con jalapeño y lima" className=" w-full h-full">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt="Granizado de arándanos con jalapeño y lima"
                                className="w-[95%] m-1 object-cover h-[200px] sm:h-[300px] md:h-[400px]"
                                src={`/assets/Cranberry-Granita-10.webp`}
                                />
                            </CardBody>
                        </NavLink>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>"Granizado de arándanos con jalapeño y lima"</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-full">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <NavLink to="/recipes/Fideos salteados de champiñones con ajo y jengibre" className=" w-full h-full">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt="Fideos salteados de champiñones con ajo y jengibre"
                                className="w-[95%] m-1 object-cover h-[200px] sm:h-[300px] md:h-[400px]"
                                src={`/assets/Mushroom-Stir-Fry-Noodles-19.webp`}
                                />
                            </CardBody>
                        </NavLink>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Fideos salteados de champiñones con ajo y jengibre</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-full">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <NavLink to="/recipes/Tacos de desayuno con huevos revueltos y salsa cremosa de aguacate" className=" w-full h-full">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt="Tacos de desayuno con huevos revueltos y salsa cremosa de aguacate"
                                className="w-[95%] m-1 object-cover h-[200px] sm:h-[300px] md:h-[400px]"
                                src={`/assets/Egg-Tacos-with-Spring-Veggies-1365x2048.webp`}
                                />
                            </CardBody>
                        </NavLink>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Tacos de desayuno con huevos revueltos y salsa cremosa de aguacate</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-full">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <NavLink to="/recipes/Ensalada de fideos soba con cerdo y salsa de maní" className=" w-full h-full">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt="Ensalada de fideos soba con cerdo y salsa de maní"
                                className="w-[95%] m-1 object-cover h-[200px] sm:h-[300px] md:h-[400px]"
                                src={`/assets/Pork-and-Soba-Noodle-Salad-22.webp`}
                                />
                            </CardBody>
                        </NavLink>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Ensalada de fideos soba con cerdo y salsa de maní</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                
            </div>
            
        </div>
    </>
  )
}

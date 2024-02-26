import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import { NavLink } from "react-router-dom"

export const GlutenFree = () => {
  return (
    <>
        <div className="w-full  h-auto mt-10 p-5">
            <div className="w-full h-[150px] flex flex-col items-start justify-center p-5 ">
                <p className="text-3xl font-bold mt-2"> Recetas sin gluten</p>
                <p className="mt-2">Estas recetas no contienen trigo ni otros ingredientes que contengan gluten. 
                Como siempre, asegúrese de leer atentamente las etiquetas y las listas de ingredientes 
                si utiliza alimentos envasados y tenga en cuenta los riesgos de contaminación cruzada.</p>
            </div>
            <div className="w-full h-auto  grid grid-cols-2 md:grid-cols-3  z-0">
                <div className="m-1 w-full h-full z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <NavLink to="/recipes/Ensalada De Frutas Con Hueso De Verano" className=" w-full h-full">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt="Ensalada De Frutas Con Hueso De Verano"
                                className="w-[95%] m-1 object-cover h-[500px]  md:h-[500px]"
                                src={`/assets/IMG_5888-728x1092.webp`}
                                />
                            </CardBody>
                        </NavLink>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Ensalada De Frutas Con Hueso De Verano</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-full z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <NavLink to="/recipes/Avena nocturna con arándanos y coco" className=" w-full h-full">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt="Avena nocturna con arándanos y coco"
                                className="w-[95%] m-1 object-cover h-[500px]  md:h-[500px]"
                                src={`/assets/Blueberry-Coconut-Overnight-Oats-2-1-728x1092.webp`}
                                />
                            </CardBody>
                        </NavLink>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>FAvena nocturna con arándanos y coco</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-full z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <NavLink to="/recipes/Hummus simple de edamame y sésamo" className=" w-full h-full">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt="Hummus simple de edamame y sésamo"
                                className="w-[95%] m-1 object-cover h-[500px]  md:h-[500px]"
                                src={`/assets/Edamame-Dip-24-728x1092.webp`}
                                />
                            </CardBody>
                        </NavLink>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Hummus simple de edamame y sésamo</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-full z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <NavLink to="/recipes/Brochetas De Pollo A La Parrilla Marinadas Con Yogur" className=" w-full h-full">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt="Brochetas De Pollo A La Parrilla Marinadas Con Yogur"
                                className="w-[95%] m-1 object-cover h-[500px]  md:h-[400px]"
                                src={`/assets/Yogurt-Marinated-Chicken-Kebabs-7-728x1092.webp`}
                                />
                            </CardBody>
                        </NavLink>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Brochetas De Pollo A La Parrilla Marinadas Con Yogur</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-full z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <NavLink to="/recipes/Salteado De Cerdo Con Miso Dulce Y Solomillo De Cerdo" className=" w-full h-full">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt="Salteado De Cerdo Con Miso Dulce Y Solomillo De Cerdo"
                                className="w-[95%] m-1 object-cover h-[500px]  md:h-[400px]"
                                src={`/assets/Sweet-Miso-Pork-Stir-Fry-12-728x1092.webp`}
                                />
                            </CardBody>
                        </NavLink>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Salteado De Cerdo Con Miso Dulce Y Solomillo De Cerdo</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-full z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <NavLink to="/recipes/Barcos vegetarianos de atún picante para un almuerzo sin cocinar" className=" w-full h-full">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt="Barcos vegetarianos de atún picante para un almuerzo sin cocinar"
                                className="w-[95%] m-1 object-cover h-[500px]  md:h-[400px]"
                                src={`/assets/tuna-veggie-cups-5-728x1092.webp`}
                                />
                            </CardBody>
                        </NavLink>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Barcos vegetarianos de atún picante para un almuerzo sin cocinar</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                
            </div>
            
        </div>
    </>
  )
}

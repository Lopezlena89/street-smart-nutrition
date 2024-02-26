import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"


export const VegeterianFood = () => {
  return (
    <>
        <div className="w-full  h-auto   mt-10">
            <div className="w-full h-[150px] flex flex-col items-start justify-center p-5 ">
                <p className="text-3xl font-bold mt-2">Comidas vegetarianas y sin carne</p>
                <p className="pt-2">Estas comidas a base de plantas son aptas para vegetarianos y están 
                llenas de sabor. Tenga en cuenta que pueden contener productos lácteos, huevos, miel o 
                pescado/mariscos, así que ajústelos según sus preferencias personales y necesidades 
                dietéticas.</p>
            </div>
            <div className="w-full h-auto  grid grid-cols-2 md:grid-cols-3  z-0">
                <div className="m-1 w-full h-full z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt="Receta fácil de arroz cremoso con espinacas en una olla"
                            className="w-[95%] m-1 object-cover h-[500px]  md:h-[500px]"
                            src={`/assets/Creamy-Spinach-Rice-8-728x1092.png`}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Receta fácil de arroz cremoso con espinacas en una olla</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-full z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt="Ensalada Verde con Lentejas y Verduras Asadas"
                            className="w-[95%] m-1 object-cover h-[500px]  md:h-[500px]"
                            src={`/assets/Lentil-Salad-11-e1689634222880-728x1092.png`}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Ensalada Verde con Lentejas y Verduras Asadas</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-full z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt="Ensalada De Cuscús Perlado Con Aderezo De Limón Y Ajo"
                            className="w-[95%] m-1 object-cover h-[500px]  md:h-[500px]"
                            src={`/assets/CA-Walnuts-Salad-11-728x1092.png`}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Ensalada De Cuscús Perlado Con Aderezo De Limón Y Ajo</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-full z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt="Batatas Rellenas Mediterráneas con Hummus"
                            className="w-[95%] m-1 object-cover h-[500px]  md:h-[400px]"
                            src={`/assets/IMG_4569-728x485.png`}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Batatas Rellenas Mediterráneas con Hummus</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-full z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt="Tofu crujiente de naranja y edamame (salteado vegano)"
                            className="w-[95%] m-1 object-cover h-[500px]  md:h-[400px]"
                            src={`/assets/Orange-Tofu-and-Edamame-Stir-Fry-18-728x1092.png`}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Tofu crujiente de naranja y edamame (salteado vegano)</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="m-1 w-full h-full z-0">
                    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt="Ramen fácil de microondas con huevos: ¡los huevos para la cena ya están aquí!"
                            className="w-[95%] m-1 object-cover h-[500px]  md:h-[400px]"
                            src={`/assets/Easy-Homemade-Ramen-with-Eggs-4-728x1092.png`}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between min-h-[100px]">
                            <b>Ramen fácil de microondas con huevos: ¡los huevos para la cena ya están aquí!</b>
                            <p className="text-default-500">{}</p>
                        </CardFooter>
                    </Card>
                </div>
                
            </div>
            
        </div>
    </>
  )
}

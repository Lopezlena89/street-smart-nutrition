

export const VegeterianFood = () => {
  return (
    <>
        <div className="w-full  h-[1250px]  lg:h-[600px] mt-10">
            <div className="w-full h-[150px] flex flex-col items-start justify-center p-5 ">
                <p className="text-3xl font-bold mt-2">Comidas vegetarianas y sin carne</p>
                <p className="pt-2">Estas comidas a base de plantas son aptas para vegetarianos y están 
                llenas de sabor. Tenga en cuenta que pueden contener productos lácteos, huevos, miel o 
                pescado/mariscos, así que ajústelos según sus preferencias personales y necesidades 
                dietéticas.</p>
            </div>
            <div className="w-full h-[1050px] md: lg:h-[400px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-sm mt-10">
                <div className="w-full h-350px  flex flex-col justify-center items-center">
                        <div className="w-[95%] h-4/6 bg-[url('/assets/Creamy-Spinach-Rice-8-728x1092.png')] bg-center bg-cover bg-no-repeat">
                            
                        </div>
                        <div className="w-full h-2/6 flex justify-center items-center p-2">
                            <p>Receta fácil de arroz cremoso con espinacas en una olla</p>
                        </div>
                </div>
                <div className="w-full h-350px  flex flex-col justify-center items-center  ">
                        <div className="w-[95%] h-4/6 bg-[url('/assets/Lentil-Salad-11-e1689634222880-728x1092.png')] bg-center bg-cover bg-no-repeat">
                        
                        </div>
                        <div className="w-full h-2/6 flex justify-center items-center p-2">
                            <p >Ensalada Verde con Lentejas y Verduras Asadas</p>
                        </div>
                </div>
                <div className="w-full h-350px  flex flex-col justify-center items-center ">
                        <div className="w-[95%] h-4/6 bg-[url('/assets/CA-Walnuts-Salad-11-728x1092.png')] bg-center bg-cover bg-no-repeat">
                        
                        </div>
                        <div className="w-full h-2/6 flex justify-center items-center p-2">
                            <p>Ensalada De Cuscús Perlado Con Aderezo De Limón Y Ajo</p>
                        </div>
                </div>
                <div className="w-full h-350px  flex flex-col justify-center items-center ">
                        <div className="w-[95%] h-4/6 bg-[url('/assets/IMG_4569-728x485.png')] bg-center bg-cover bg-no-repeat">
                        
                        </div>
                        <div className="w-full h-2/6 flex justify-center items-center p-2">
                            <p>Batatas Rellenas Mediterráneas con Hummus</p>
                        </div>
                </div>
                <div className="w-full h-350px  flex flex-col justify-center items-center ">
                        <div className="w-[95%] h-4/6 bg-[url('/assets/Orange-Tofu-and-Edamame-Stir-Fry-18-728x1092.png')] bg-center bg-cover bg-no-repeat">
                        
                        </div>
                        <div className="w-full h-2/6 flex justify-center items-center p-2">
                            <p>Tofu crujiente de naranja y edamame (salteado vegano)</p>
                        </div>
                </div>
                <div className="w-full h-350px  flex flex-col justify-center items-center ">
                        <div className="w-[95%] h-4/6 bg-[url('/assets/Easy-Homemade-Ramen-with-Eggs-4-728x1092.png')] bg-center bg-cover bg-no-repeat">
                        
                        </div>
                        <div className="w-full h-2/6 flex justify-center items-center p-2">
                            <p>Ramen fácil de microondas con huevos: ¡los huevos para la cena ya están aquí!</p>
                        </div>
                </div>

            </div>
            
        </div>
    </>
  )
}

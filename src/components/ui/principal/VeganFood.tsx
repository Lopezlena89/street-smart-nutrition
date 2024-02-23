import { NavLink } from "react-router-dom"


export const VeganFood = () => {
  return (
    <>
        <div className="w-full h-[1900px] md:h-[630px] flex flex-col p-5">
            <div className="w-full h-[180px] flex flex-col justify-center p-5">
                <h3 className="text-3xl font-bold">Ideas de comidas veganas</h3>
                <p className="mt-4">¡Cada receta que se presenta aquí es 100 % basada en plantas y apta para veganos, 
                con todo el sabor y la satisfacción que esperarías de una comida nutritiva y atrevida!</p>
            </div>
            <div className="w-full h-auto p-3 grid grid-cols-1  md:grid-cols-3 ">
                <div className="w-full md:w-[95%] h-[550px] md:h-[300px]">
                    <div className="w-full h-4/5 bg-[url('/assets/IMG_1758-728x485.png')] bg-center bg-cover bg-no-repeat"/>
                    <div className="w-full h-1/5 flex flex-col ">
                        
                            <nav className="w-full h-full flex flex-col list-none p-2 text-xs">
                               <div className="w-full flex">
                                <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">DF</NavLink>
                                    </li>
                                    <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">NF</NavLink>
                                    </li>
                                    <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">V</NavLink>
                                    </li>
                                    <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">VEG</NavLink>
                                    </li>
                               </div>
                                
                            <NavLink to="#" className="text-base font-bold ">Tacos de sofritas con ensalada de repollo dulce y cilantro</NavLink>
                            </nav>

                    </div>
                </div>
                <div className="w-full md:w-[95%] h-[550px] md:h-[300px]">
                    <div className="w-full h-4/5 bg-[url('/assets/IMG_6089-728x728.png')] bg-center bg-cover bg-no-repeat"/>
                    <div className="w-full h-1/5 flex flex-col ">
                        
                            <nav className="w-full h-full flex flex-col list-none p-2 text-xs">
                               <div className="w-full flex">
                                <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">DF</NavLink>
                                    </li>
                                    <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">GF</NavLink>
                                    </li>
                                    <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">NF</NavLink>
                                    </li>
                                    <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">V</NavLink>
                                    </li>
                                    <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">VEG</NavLink>
                                    </li>
                               </div>
                                
                            <NavLink to="#" className="text-base font-bold ">Receta de ensalada de guisantes partidos para el verano</NavLink>
                            </nav>
                    </div>
                </div>
                <div className="w-full md:w-[95%] h-[550px] md:h-[300px]">
                    <div className="w-full h-4/5 bg-[url('/assets/IMG_4569-728x1092.png')] bg-center bg-cover bg-no-repeat"/>
                    <div className="w-full h-1/5 flex flex-col ">
                        
                            <nav className="w-full h-full flex flex-col list-none p-2 text-xs">
                               <div className="w-full flex">
                                <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">DF</NavLink>
                                    </li>
                                    <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">GF</NavLink>
                                    </li>
                                    <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">V</NavLink>
                                    </li>
                                    <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">VEG</NavLink>
                                    </li>
                               </div>
                                
                            <NavLink to="#" className="text-base font-bold ">Batatas Rellenas Mediterráneas con Hummus</NavLink>
                            </nav>
                    </div>
                </div>
                
                

            </div>
        </div>
    </>
  )
}

import { GoClock } from "react-icons/go"
import { NavLink } from "react-router-dom"


export const MiddleSite = () => {
  return (
    <>
        <div className="w-full h-[1850px] md:h-[700px] ">
            <div className="w-auto min-h-[150px] flex flex-col justify-center ml-5">
                <p className="text-3xl font-bold">Delicias sin lácteos</p>
                <p>Estas recetas no contienen leche ni productos lácteos, incluidos yogur, mantequilla, queso, crema agria y otros ingredientes lácteos comunes.</p>
            </div>
            <div className="w-full h-[1700px] flex flex-col md:flex-row md:h-[500px]">
                <div className="w-full h-full flex md:w-1/2 ">
                    <div className="w-2/4  h-full md:mr-1 ">
                        <div className="w-full h-3/4 bg-[url('/assets/Cranberry-Granita-10.png')] bg-center bg-cover bg-no-repeat "/>
                        <div className="w-full h-1/4">
                            <div className="w-full h-1/4">
                                <nav className="w-full h-full flex list-none p-2 text-xs">
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
                                    
                                </nav>
                            </div>
                            <div className="w-full h-3/4 p-2 flex flex-col">
                                <p className="text-base font-bold mt-4">Cena en sartén Kielbasa con patatas Hasselback con queso</p>
                                <span className="flex items-center mt-2"><GoClock className="mr-2"/> 4 horas 10 minutos</span>
                            </div>

                        </div>
                    </div>
                    <div className="w-2/4 h-full md:mr-1 ">
                        <div className="w-full h-3/4 bg-[url('/assets/Mushroom-Stir-Fry-Noodles-19.png')] bg-center bg-cover bg-no-repeat "/>
                        <div className="w-full h-1/4">
                            <div className="w-full h-1/4">
                                <nav className="w-full h-full flex list-none p-2 text-xs">
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
                                    
                                </nav>
                            </div>
                            <div className="w-full h-3/4 p-2 flex flex-col">
                                <p className="text-base font-bold mt-4">Cena en sartén Kielbasa con patatas Hasselback con queso</p>
                                <span className="flex items-center mt-2"><GoClock className="mr-2"/> 25 Minutes</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex md:w-1/2 ">
                    <div className="w-2/4 h-full md:mr-1 ">
                        <div className="w-full h-3/4 bg-[url('/assets/Egg-Tacos-with-Spring-Veggies-1365x2048.png')] bg-center bg-cover bg-no-repeat "/>
                        <div className="w-full h-1/4">
                            <div className="w-full h-1/4">
                                <nav className="w-full h-full flex list-none p-2 text-xs">
                                    <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">DF</NavLink>
                                    </li>
                                    <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">NF</NavLink>
                                    </li>
                                    <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">VEG</NavLink>
                                    </li>
                                    
                                    
                                </nav>
                            </div>
                            <div className="w-full h-3/4 p-2 flex flex-col">
                                <p className="text-base font-bold mt-4">Cena en sartén Kielbasa con patatas Hasselback con queso</p>
                                <span className="flex items-center mt-2"><GoClock className="mr-2"/> 30 Minutes</span>
                            </div>

                        </div>
                    </div>
                    <div className="w-2/4 h-full ">
                        <div className="w-full h-3/4 bg-[url('/assets/Pork-and-Soba-Noodle-Salad-22.png')] bg-center bg-cover bg-no-repeat "/>
                        <div className="w-full h-1/4">
                            <div className="w-full h-1/4">
                                <nav className="w-full h-full flex list-none p-2 text-xs">
                                    <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                        <NavLink to="#">DF</NavLink>
                                    </li>
                                </nav>
                            </div>
                            <div className="w-full h-3/4 p-2 flex flex-col">
                                <p className="text-base font-bold mt-4">Cena en sartén Kielbasa con patatas Hasselback con queso</p>
                                <span className="flex items-center mt-2"><GoClock className="mr-2"/> 4 horas 54 minutos</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}


import { GoClock } from "react-icons/go"
import { NavLink } from "react-router-dom"


export const PrincipalSite = () => {
  return (
   <>
    <div className="w-full h-auto flex flex-col justify-start items-start lg:flex-row lg:h-[650px]">
            <NavLink to="/recipes/Batido verde rico en proteínas (sin plátano)" className="w-full h-[500px] lg:h-[650px] lg:w-1/3 bg-[url('/assets/High-Protein-Green-Smoothie-No-Banana-2-728x1092.webp')] bg-center bg-cover bg-no-repeat"/>
            <div className="w-full h-[500px] lg:h-[650px] lg:w-1/3 flex flex-col items-start p-5">
                <div className="w-full h-1/6 ">
                    <nav className="w-full h-full flex items-end list-none  text-xs">
                        <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                            <NavLink to="/gluten-free">GF</NavLink>
                        </li>
                        <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                            <NavLink to="/nut-free">NF</NavLink>
                        </li>
                        <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                            <NavLink to="/vegetarian">VEG</NavLink>
                        </li>
                        
                    </nav>
                </div>
                <div className="w-full h-2/6  flex flex-col items-start justify-center">
                    <p className="text-4xl font-bold">Batido verde rico en proteínas (sin plátano)</p>
                    <span className="flex items-center mt-2"><GoClock className="mr-2"/> 5 Minutes</span>
                </div>
                <div className="w-full h-2/6  flex items-start">
                    <p>¡Llamando a todos los fanáticos de los batidos! Este batido verde rico en proteínas tiene 
                        suficiente nutrición para ayudarte durante el día. Espeso, cremoso y endulzado naturalmente con 
                        dátiles, es algo que debes probar para incorporar tus verduras.</p>
                </div>
                

            </div>
            <div className="w-full h-[500px] lg:h-[650px] lg:w-1/3 ">
                <NavLink to="/recipes/Cena en sartén Kielbasa con patatas Hasselback con queso"><div className="w-full h-2/3 bg-[url('/assets/Kielbasa-Sheet-Pan-09-728x1092.webp')] bg-cover bg-no-repeat"/></NavLink>

                
                <div className="w-full h-1/3 bg-white">
                    <div className="w-full h-1/4">
                        <nav className="w-full h-full flex list-none p-2 text-xs">
                            <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                <NavLink to="/gluten-free">GF</NavLink>
                            </li>
                            <li className="m-1 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                                <NavLink to="/nut-free">NF</NavLink>
                            </li>
                            
                        </nav>
                    </div>
                    <div className="w-full h-3/4 p-2 flex flex-col">
                        <p className="text-base font-bold mt-5">Cena en sartén Kielbasa con patatas Hasselback con queso</p>
                        <span className="flex items-center mt-5"><GoClock className="mr-2"/> 55 Minutes</span>
                    </div>
                    
                </div>
            </div>
        </div>
   </>
  )
}

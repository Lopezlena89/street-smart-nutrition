import { NavLink, Navigate } from "react-router-dom"
import { IoReorderTwoOutline,IoClose } from "react-icons/io5";
import { useState } from "react";


export const NavbarPage = () => {
 
    const [menu, setMenu] = useState(false)
 
    
   
  return (
    <>
        <div className="w-screen h-auto flex flex-col justify-center items-center fixed bg-white z-10 ">
           <div className="w-full md:w-[75%] h-[70px] flex   justify-center items-center ">
                <div 
                    className="ml-5 flex items-center cursor-pointer duration-1000 md:hidden"
                    onClick={()=>setMenu(!menu)}
                >
                    {
                        menu
                        ?   <IoClose  size={25}/>
                        :   <IoReorderTwoOutline  size={25}/>
                    }
                </div>
                <div className=" flex items-center justify-center font-thin w-full md:w-[35%]  ">
                <NavLink to="/"><h1 className="title">Street Smart Nutrition</h1></NavLink>
                </div>
                <nav className=" hidden w-full justify-center items-center list-none font-medium text-[11px] md:flex ">
                    <li className="mx-2">
                        <NavLink to="/recipes">RECETAS</NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to="/nut-free">SIN NUECES</NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to="/gluten-free">SIN GLUTEN</NavLink>
                    </li>
                    <li className="mx-2">
                    <NavLink to="/vegetarian">VEGETARIANO</NavLink>
                    </li>
                    <li className="mx-2">
                    <NavLink to="/libre-de-lacteos">LIBRE DE LACTEOS</NavLink>
                    </li>
                </nav>
                
              
                
           </div>
           
            <div className={`w-full h-auto bg-white ${menu?'block':'hidden'}`}>
                <nav className="flex flex-col w-full justify-start items-start list-none font-medium text-[15px]  px-5 ">
                    <li className="mx-2">
                        <NavLink to="/recipes">RECETAS</NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to="/nut-free">SIN NUECES</NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to="/gluten-free">SIN GLUTEN</NavLink>
                    </li>
                    <li className="mx-2">
                    <NavLink to="/vegetarian">VEGETARIANO</NavLink>
                    </li>
                    <li className="mx-2">
                    <NavLink to="/libre-de-lacteos">LIBRE DE LACTEOS</NavLink>
                    </li>
                </nav>
            </div>
        </div>   
        
    </>
  )
}

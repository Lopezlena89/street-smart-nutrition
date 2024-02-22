import { NavLink } from "react-router-dom"
import { IoSearchOutline,IoReorderTwoOutline,IoClose } from "react-icons/io5";
import { useState } from "react";


export const NavbarPage = () => {
    const [search, setSearch] = useState(false);
    const [text, setText] = useState('');
    const [menu, setMenu] = useState(false)
 
    const onSubmit = () =>{
        if(text.length < 2)return;
        console.log(text)
        setText('')
        setSearch(false)
    }
   
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
                    <h1 className="title">Street Smart Nutrition</h1>
                </div>
                <nav className=" hidden w-full justify-center items-center list-none font-medium text-[11px] md:flex ">
                    <li className="mx-2">
                        <NavLink to="#">RECETAS</NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to="#">NUTRICION SUAVE</NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to="#">ALIMENTACION INTUITIVA</NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to="#">SIN GLUTEN</NavLink>
                    </li>
                    <li className="mx-2">
                    <NavLink to="#">A BASE DE PLANTAS</NavLink>
                    </li>
                </nav>
                
                <div 
                    className={`mr-5 w-20 justify-center  items-center md:w-10 cursor-pointer `}
                    onClick={()=>setSearch(!search)}    
                >
                    <IoSearchOutline size={20}/>
                </div>
                
           </div>
           <div className={`w-full h-[70px]  justify-center items-center bg-gray-100 ${search ?'flex':'hidden'} `}>
                <form onSubmit={onSubmit}  className="w-10/12 h-[60%] bg-white border border-solid border-black relative flex items-center">
                    <div className="w-[90%] h-full">
                        <input 
                            type="text" 
                            placeholder="Buscar..." 
                            value={text}
                            className="w-full h-full outline-none ml-5" 
                            onChange={({target})=>setText(target.value)}
                        />
                    </div>
                    <button type="submit" className="absolute h-full w-[10%] right-0  flex justify-center items-center md:w-[5%]">
                        <IoSearchOutline size={20} />
                    </button>
                </form>
            </div>
            <div className={`w-full h-auto bg-white ${menu?'block':'hidden'}`}>
                <nav className="flex flex-col w-full justify-start items-start list-none font-medium text-[15px]  px-5 ">
                    <li className="m-1">
                        <NavLink to="#">RECETAS</NavLink>
                    </li>
                    <li className="m-1">
                        <NavLink to="#">NUTRICION SUAVE</NavLink>
                    </li>
                    <li className="m-1">
                        <NavLink to="#">ALIMENTACION INTUITIVA</NavLink>
                    </li>
                    <li className="m-1">
                        <NavLink to="#">SIN GLUTEN</NavLink>
                    </li>
                    <li className="m-1">
                    <NavLink to="#">A BASE DE PLANTAS</NavLink>
                    </li>
                </nav>
            </div>
        </div>   
        
    </>
  )
}

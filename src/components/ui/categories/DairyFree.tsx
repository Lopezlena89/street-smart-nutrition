import { getdatacategory } from "../../../tools/get-data-category";
import { NavbarPage } from "../NavbarPage"
import { BodyCategory } from "./BodyCategory";
import { Encabezado } from "./Encabezado"
import { LibreDeLacteos } from "../../data/text-categories"
import { Copiright, FormRecetas } from "../principal";


export const DairyFree = () => {

    const data = getdatacategory('Libre de lácteos')
    const {title,subtitle} = LibreDeLacteos;

  return (
    <>
        <div className="w-full h-auto flex flex-col items-center">
            <NavbarPage/>
            <div className="w-full h-auto md:w-[85%] flex flex-col justify-start items-start mt-[70px]">
                <Encabezado title={title} subtitle={subtitle}/>
                <div className="w-full h-full p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 bg-gray-100">
                    {
                        data.map((food,index)=>(
                            
                            <BodyCategory key={index} data ={food}/>
                            
                        ))
                    }
                </div>
            <FormRecetas/>
            <Copiright/>
            </div>
        </div>
    </>
  )
}

import { getdatacategory } from "../../../tools/get-data-category";
import { NavbarPage } from "../NavbarPage"
import { BodyCategory } from "./BodyCategory";
import { Encabezado } from "./Encabezado"



export const GlutenFree = () => {

    const data = getdatacategory('Sin gluten')
    

  return (
    <>
        <div className="w-full h-auto flex flex-col items-center">
            <NavbarPage/>
            <div className="w-full h-auto md:w-[85%] flex flex-col justify-start items-start mt-[70px]">
                <Encabezado/>
                <div className="w-full h-full p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 bg-gray-100">
                    {
                        data.map((food,index)=>(
                            
                            <BodyCategory key={index} data ={food}/>
                            
                        ))
                    }
                </div>
                
            </div>
        </div>
    </>
  )
}

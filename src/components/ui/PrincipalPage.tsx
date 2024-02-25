

import { 
    PrincipalSite,
    SliderPrincipal,
    MiddleSite,
    GlutenFree,
    PresentGirl,
    VeganFood,
    VegeterianFood,
    BooksCook,
    FormRecetas,
    Copiright
  } from "./principal";

export const PrincipalPage = () => {
  return (
   <>
    <div className="w-full h-full md:w-[75%] flex flex-col justify-start items-start mt-[70px]">
        <PrincipalSite/>  
        <SliderPrincipal/>
        <MiddleSite/>
        <GlutenFree/>
        <PresentGirl/>
        <VeganFood/>
        <VegeterianFood/>
        <BooksCook/>
        <FormRecetas/>
        <Copiright/>
        
    </div>
   </>
  )
}

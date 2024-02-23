
import { NavLink } from "react-router-dom"
import { GoClock } from "react-icons/go";

import { PrincipalSite } from "./principal/PrincipalSite";
import { SliderPrincipal } from "./principal/SliderPrincipal";
import { MiddleSite } from "./principal/MiddleSite";
import { GlutenFree } from "./principal/GlutenFree";
import { PresentGirl } from "./principal/PresentGirl";
import { VeganFood } from "./principal/VeganFood";
import { VegeterianFood } from "./principal/VegeterianFood";
import { BooksCook } from "./principal/BooksCook";
import { FormRecetas } from "./principal/FormRecetas";
import { Copiright } from "./principal/Copiright";





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

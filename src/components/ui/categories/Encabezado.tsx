
import { glutenFree } from "../../data/text-categories"


export const Encabezado = () => {
    const {title,subtitle} = glutenFree;
  return (
    <>
        <div className="w-full h-auto p-5 flex flex-col">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="mt-5 text-lg">{subtitle}</p>
        </div>
        
    </>
  )
}

import { NavLink } from "react-router-dom"


export const PresentGirl = () => {
  return (
    <>
        <div className="w-full h-[800px] bg-gray-100 flex items-center  lg:h-[600px]">
            <div className="w-full h-[90%] flex flex-col p-5 lg:flex-row  ">
                <div className="w-full h-full xl:w-3/6 bg-[url('/assets/home-intuitive-eating.webp')] bg-center bg-cover bg-no-repeat"/>
                <div className="w-full h-full xl:w-2/6 bg-white flex flex-col justify-center p-5">
                    <h3 className="text-3xl font-bold">Comience con la alimentación intuitiva</h3>
                    <p className="mt-5">Ya sea que sea nuevo en la alimentación intuitiva o que ya esté familiarizado 
                    con ella, estos recursos le brindarán más información sobre cómo utilizar un enfoque 
                    no dietético para la salud y la felicidad.</p>
                    <NavLink to="/recipes" className="mt-5 w-[180px] h-[40px] bg-black text-white flex justify-center items-center">Ver mas articulos</NavLink>

                </div>
            </div>
        </div>
    </>
  )
}

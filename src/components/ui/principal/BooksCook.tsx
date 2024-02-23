import { NavLink } from 'react-router-dom';


export const BooksCook = () => {
  return (
    <div className="w-full min-h-[800px] md:min-h-[400px]  p-5 flex flex-col">
        <div className="w-full h-[100px] flex items-center">
            <h2 className="text-3xl">Mis libros de cocina</h2>
        </div>
        <div className="w-full h-auto  grid grid-cols-1 sm:grid-cols-3">
            <div className="w-[1/3] h-auto  ">
                <div className="w-full  min-h-[300px] md:min-h-[200px] p-5 bg-[url('/assets/cookbook-the-pescatarian-cookbook.png')] bg-center bg-cover bg-no-repeat"></div>
                <div className="w-full h-auto p-5 flex flex-col">
                    <NavLink className="text-xl font-bold" 
                        to="https://www.amazon.com/Pescatarian-Cookbook-Essential-Kitchen-Companion/dp/1641522666/ref=as_li_ss_tl?crid=TTEERGAXRICU&keywords=the+pescatarian+cookbook+the+essential+kitchen+companion&qid=1540400698&sprefix=the+pescat,aps,242&sr=8-1-fkmr2&ref=sr_1_fkmr2_1&linkCode=sl1&tag=streetsmartnu-20&linkId=a947c37daa4901e9db75d9758d4a789d&language=en_US" target='_blank'>
                        El libro de cocina pescatariano
                    </NavLink>
                    <p className='text-sm mt-5'>
                    Rico en pescados y mariscos, verduras abundantes y cereales saludables, el 
                    pescatarismo es una dieta variada y equilibrada. El Libro de cocina de Pescatarian 
                    es una referencia completa para aprovechar todos los beneficios de esta dieta 
                    naturalmente nutritiva con información esencial, recetas y planes de alimentación 
                    saludables.
                    </p>
                </div>
            </div>
            <div className="w-[1/3] h-auto  ">
                <div className="w-full min-h-[300px] md:min-h-[200px] p-5 bg-[url('/assets/cookbook-the-healing-soup.png')] bg-center bg-cover bg-no-repeat"></div>
                <div className="w-full h-auto p-5 flex flex-col">
                    <NavLink className="text-xl font-bold" 
                        to="https://www.amazon.com/Healing-Soup-Cookbook-Recipes-Immunity/dp/1641526904/ref=as_li_ss_tl?dchild=1&keywords=cara+harbstreet&qid=1610554040&sr=8-1&linkCode=sl1&tag=streetsmartnu-20&linkId=bbfff392f219fd68d7799e1be988a3b4&language=en_US" target='_blank'>
                        El libro de cocina pescatariano
                    </NavLink>
                    <p className='text-sm mt-5'>
                    Rico en pescados y mariscos, verduras abundantes y cereales saludables, el 
                    pescatarismo es una dieta variada y equilibrada. El Libro de cocina de Pescatarian 
                    es una referencia completa para aprovechar todos los beneficios de esta dieta 
                    naturalmente nutritiva con información esencial, recetas y planes de alimentación 
                    saludables.
                    </p>
                </div>
            </div>
            <div className="w-[1/3] h-auto  ">
                <div className="w-full  min-h-[300px] md:min-h-[200px] p-5 bg-[url('/assets/cookbook-healthy-eating-for-life.png')] bg-center bg-cover bg-no-repeat"></div>
                <div className="w-full h-auto p-5 flex flex-col">
                    <NavLink className="text-xl font-bold" 
                        to="https://www.amazon.com/Healthy-Eating-Life-Intuitive-Workbook/dp/1641524901/?tag=streetsmartnu-20#web" target='_blank'>
                        El libro de cocina pescatariano
                    </NavLink>
                    <p className='text-sm mt-5'>
                    Rico en pescados y mariscos, verduras abundantes y cereales saludables, el 
                    pescatarismo es una dieta variada y equilibrada. El Libro de cocina de Pescatarian 
                    es una referencia completa para aprovechar todos los beneficios de esta dieta 
                    naturalmente nutritiva con información esencial, recetas y planes de alimentación 
                    saludables.
                    </p>
                </div>
            </div>
        </div>
        <div className='w-full h-auto mt-5 p-5'>
            <div className='border-t border-solid border-black h-[50px]'>
                <div className='w-[40%] md:w-[25%] h-[40px] bg-black flex justify-center items-center'>
                    <p className='text-white'>Como se ve en</p>
                </div>
            </div>
            <div className='w-full h-auto grid grid-cols-3 md:grid-cols-6 mt-5'>
                <div className="w-[95%] h-[40px] bg-[url('/assets/press-bustle.png')]  bg-contain bg-no-repeat"></div>
                <div className="w-[95%] h-[40px] bg-[url('/assets/press-forbes.png')]  bg-contain bg-no-repeat"></div>
                <div className="w-[95%] h-[40px] bg-[url('/assets/press-outside.png')]  bg-contain bg-no-repeat"></div>
                <div className="w-[95%] h-[40px] bg-[url('/assets/press-self.png')]  bg-contain bg-no-repeat"></div>
                <div className="w-[95%] h-[40px] bg-[url('/assets/press-us-news.png')]  bg-contain bg-no-repeat"></div>
                <div className="w-[95%] h-[40px] bg-[url('/assets/press-womens-health.png')]  bg-contain bg-no-repeat"></div>
            </div>
        </div>

    </div>
  )
}

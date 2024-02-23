
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

export const SliderPrincipal = () => {
  return (
    <>
        <div className="w-full h-[200px] flex justify-center items-center ">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination]}
                className="w-full h-full "
            >
                <SwiperSlide className="w-1/4 flex justify-center items-center bg-[url('/assets/Baked-Brie-with-Caramelized-Onions-3-728x728.png')] bg-center bg-cover bg-no-repeat">
                   <div className="w-3/4 h-[40px] border-2 border-solid border-white  flex justify-center items-center">
                    <div className="w-5/6 h-4/6 bg-white flex justify-center items-center">
                        <NavLink to="#">Aperitivos</NavLink>
                    </div>
                   </div>
                </SwiperSlide>
                <SwiperSlide className="w-1/4 flex justify-center items-center bg-[url('/assets/Yuzu-Margarita-updated-14-728x728.png')] bg-center bg-cover bg-no-repeat">
                <div className="w-3/4 h-[40px] border-2 border-solid border-white  flex justify-center items-center">
                    <div className="w-5/6 h-4/6 bg-white flex justify-center items-center">
                    <NavLink to="#">Bebidas</NavLink>
                    </div>
                   </div>
                </SwiperSlide>
                <SwiperSlide className="w-1/4 flex justify-center items-center bg-[url('/assets/Peaches-and-Cream-Overnight-Oats-10-728x728.png')] bg-center bg-cover bg-no-repeat">
                <div className="w-3/4 h-[40px] border-2 border-solid border-white  flex justify-center items-center">
                    <div className="w-5/6 h-4/6 bg-white flex justify-center items-center">
                    <NavLink to="#">Desayunos</NavLink>
                    </div>
                   </div>
                </SwiperSlide>
                <SwiperSlide className="w-1/4 flex justify-center items-center bg-[url('/assets/Chocolate-Date-Bark-23-728x728.png')] bg-center bg-cover bg-no-repeat">
                <div className="w-3/4 h-[40px] border-2 border-solid border-white  flex justify-center items-center">
                    <div className="w-5/6 h-4/6 bg-white flex justify-center items-center">
                    <NavLink to="#">Postres</NavLink>
                    </div>
                   </div>
                </SwiperSlide>
                <SwiperSlide className="w-1/4 flex justify-center items-center bg-[url('/assets/Easy-Beef-and-Broccoli-with-Mushrooms-728x728.png')] bg-center bg-cover bg-no-repeat"> 
                <div className="w-5/6 h-[65px] border-2 border-solid border-white  flex justify-center items-center">
                    <div className="w-5/6 h-4/6 bg-white flex justify-center items-center text-center">
                    <NavLink to="#">Platos principales</NavLink>
                    </div>
                   </div>
            </SwiperSlide>
                <SwiperSlide className="w-1/4 flex justify-center items-center bg-[url('/assets/Cantaloupe-Panzanella-Salad-16-728x728.png')] bg-center bg-cover bg-no-repeat">
                <div className="w-3/4 h-[40px] border-2 border-solid border-white  flex justify-center items-center">
                    <div className="w-5/6 h-4/6 bg-white flex justify-center items-center">
                    <NavLink to="#">Ensaladas</NavLink>
                    </div>
                   </div>
                </SwiperSlide>
                <SwiperSlide className="w-1/4 flex justify-center items-center bg-[url('/assets/IMG_6089-728x728.png')] bg-center bg-cover bg-no-repeat">
                <div className="w-3/4 h-[40px] border-2 border-solid border-white  flex justify-center items-center">
                    <div className="w-5/6 h-4/6 bg-white flex justify-center items-center">
                    <NavLink to="#">Lados</NavLink>
                    </div>
                   </div>
                </SwiperSlide>
                <SwiperSlide className="w-1/4 flex justify-center items-center bg-[url('/assets/Miso-Butternut-Squash-and-Sweet-Potato-Soup-8-728x728.png')] bg-center bg-cover bg-no-repeat">
                <div className="w-3/4 h-[40px] border-2 border-solid border-white  flex justify-center items-center">
                    <div className="w-5/6 h-4/6 bg-white flex justify-center items-center">
                    <NavLink to="#">Sopas</NavLink>
                    </div>
                   </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}


export const FormRecetas = () => {
  return (
    <div className="w-full h-auto bg-gray-100 flex flex-col p-5 ">
        <h3 className="text-3xl font-bold">¡Nunca te pierdas una nueva receta!</h3>
        <p className="mt-3">Suscríbase a nuestro boletín y recibirá contenido nuevo por correo electrónico 
            semanalmente, consejos útiles y ¡ADEMÁS mi libro de cocina digital GRATUITO!</p>
        <form action="" className="mt-5 w-full grid grid-cols-1 md:grid-cols-3">
            <input type="text" placeholder="Nombre" className="m-1 h-[35px]"/>
            <input type="email" placeholder="Direccion de correo electronico" className="m-1 h-[35px]"/>
            <button className="w-[full] h-[30px] m-1 bg-black text-white p-5 flex justify-center items-center">Suscribir</button>
        </form>
    </div>
  )
}

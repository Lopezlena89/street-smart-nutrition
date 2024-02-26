



export const Encabezado = ({title,subtitle}:{title:string,subtitle:string}) => {
    
  return (
    <>
        <div className="w-full h-auto p-5 flex flex-col ">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="mt-5 text-lg">{subtitle}</p>
        </div>
        
    </>
  )
}

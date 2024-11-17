export const CardCompany = ({logo, name}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 text-center bg-blanco py-5 px-14 rounded-lg">
      <img className="w-10" src={logo}/>
      <h3 className="text-[#A3A3A3] w-20 font-principal font-bold text-xs">{name}</h3>
    </div>
  )
}

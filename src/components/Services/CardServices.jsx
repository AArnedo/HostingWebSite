export const CardServices = ({image, name, role, content}) => {
  return (
    <div className="flex flex-col justify-center items-center w-[400px] bg-blanco px-11 py-10 text-center rounded-xl text-[#002348]">
      <img className="w-16 rounded-full" src={image}/>
      <h3 className="font-semibold py-4 font-principal">{name}</h3>
      <span className="pb-4 text-xs">{role}</span>
      <p className="text-sm leading-8">{content}</p>
    </div>
  )
}

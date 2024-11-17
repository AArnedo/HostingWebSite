export const ProblemCard = ({image, title, content}) => {
  return (
    <div className="flex flex-col justify-center items-center text-[#002348] py-16 px-5 bg-blanco rounded-xl">
        <img className="w-28" src={image}/>
        <h2 className="text-xl py-5 font-bold">{title}</h2>
        <p className="leading-8 text-center">{content}</p>
    </div>
  )
}

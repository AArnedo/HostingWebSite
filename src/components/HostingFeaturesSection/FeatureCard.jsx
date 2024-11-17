export const FeatureCard = ({icon, title, description}) => {
  return (
    <div className="bg-blanco rounded-lg shadow-lg px-10 py-2 text-center flex w-[450px]">
        <img src={icon} alt={title} className="w-auto" />
        <div className="flex flex-col">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
    </div>
  )
}

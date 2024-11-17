import imgCohete from '../../assets/Installation/illustration-Hosting.png'

export const Installation = () => {
  return (
    <div className='flex items-center justify-center gap-20 bg-gradient-to-r from-secondary to-primary py-10'>
        <div>
            <img src={imgCohete}/>
        </div>
        <div className='flex flex-col gap-5 w-[35%] font-principal text-blanco'>
            <h2 className='text-3xl font-bold w-[350px]'>One-click installs so you can build happy.</h2>
            <p className='font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas quam nunc, tincidunt.</p>
        </div>
    </div>
  )
}

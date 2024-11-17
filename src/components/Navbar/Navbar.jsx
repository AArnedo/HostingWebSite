import logo from '../../assets/Hero/logo-hosting 1.png'

export const Navbar = () => {
  return (
    <div className='flex justify-between pt-16 px-40 font-principal'>
        <section className='flex items-center'>
            <img src={logo} alt="logo de hosting" />
            <h1 className='ml-3 text-blanco text-2xl font-semibold tracking-widest'>Hostingor</h1>
        </section>
        <nav>
            <ul className='flex wrap text-blanco text-md font-normal tracking-wider  space-x-10'>
                <li className=' cursor-pointer'>Hosting</li>
                <li className=' cursor-pointer'>Domain</li>
                <li className=' cursor-pointer'>Support</li>
                <li className=' cursor-pointer'>Affiliates</li>
                <li className=' cursor-pointer'>Partnership</li>
            </ul>
        </nav>
    </div>
  )
}

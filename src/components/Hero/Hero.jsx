import { Navbar } from "../Navbar/Navbar"
import ImgHero from '../../assets/Hero/Group 173.png'

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-primary min-h-[100vh]">
        <Navbar/>
        <section className="flex items-center justify-between px-36 pt-16 font-principal">
            <div>
                <h2 className="text-blanco py-5 font-bold text-5xl w-[600px] ">Trust your site to the world’s #1 web host.</h2>
                <p className="text-blanco py-5 w-[500px] text-ml tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="bg-bg-sec py-5 px-11 text-sm font-bold text-blanco rounded-md font-principal">GET STARTED</button>
            </div>
            <div>
                <img className="w-[600px]" src={ImgHero} alt="imagen hero" />
            </div>
        </section> 
    </div>
  )
}

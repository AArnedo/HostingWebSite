import logo from '../../assets/Hero/logo-hosting 1.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";



export const Footer = () => {
  return (
    <div className='bg-negro pt-20 font-principal flex flex-col justify-center items-center gap-10'>
        <div className='flex gap-4 items-center justify-center'>
            <div className='w-[50%] flex flex-col justify-center gap-6 ml-14'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo de hosting" />
                    <h1 className='ml-3 text-blanco text-2xl font-semibold tracking-widest'>Hostingor</h1>
                </div>
                <div>
                    <p className='text-blanco opacity-40'>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper matti pibus leo.</p>
                </div>
                <div className='flex justify-start gap-20 text-blanco opacity-40'>
                    <FaFacebookSquare className='size-8'/>
                    <FaTwitterSquare className='size-8'/>
                    <FaPinterestSquare className='size-8'/>
                </div>
            </div>
            <div className='w-[50%] flex items-center justify-center'>
                <div className='flex flex-col gap-8'>
                    <div>
                        <h3 className='text-blanco font-bold pb-2'>Get Started</h3>
                        <ul className='flex text-blanco opacity-40 gap-8'>
                            <li>Tutorials</li>
                            <li>Resources</li>
                            <li>Guides</li>
                            <li>Examples</li>
                            <li>Docs</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-blanco font-bold pb-2'>About</h3>
                        <ul className='flex text-blanco opacity-40 gap-8'>
                            <li>Stories</li>
                            <li>Community</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Brand Assets</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[80%]'>
            <hr className=' text-blanco opacity-40'/>
        </div>
        <div className='pb-5'>
            <span className='text-blanco'>© All rights reserved​ | Made with <span className='text-rojo'> ❤ </span>by Agustin Arnedo</span>
        </div>
        
        
    </div>
  )
}

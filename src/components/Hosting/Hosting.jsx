import imgHost from '../../assets/Hosting/Bitmap.png'
import { ListHosting } from './ListHosting'
import { CiCircleCheck } from "react-icons/ci";

const listHost = [
  {
    content: 'Website Builder'
  },
  {
    content: 'WP Accelerator'
  },
  {
    content: 'DDoS and Malware'
  },
  {
    content: 'Free Domain and SSL'
  },
  {
    content: 'Auto Installer'
  },
  {
    content: '24/7 Support'
  },
]

export const Hosting = () => {
  return (
    <div className='flex flex-col justify-center text-center w-full font-principal py-10'>
        <h4 className='text-lg tracking-widest'>Hostingor</h4>
        <div className='flex flex-col justify-center text-center py-10'>
            <h2 className='text-3xl font-bold'>Hostingor From Another World</h2>
            <p className='w-[60%] py-4 mx-auto text-center justify-center font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas quam nunc, tincidunt quis facilisis ut, faucibus eget </p>
        </div>
        <div className='mx-auto'>
            <img src={imgHost}/>
        </div>
        <div className='flex flex-col flex-wrap justify-center items-start h-[300px] w-[40%] mx-auto'>
          {listHost.map((list, index) =>(
            <ListHosting
            key={index}
            content={list.content}
            />
          ))}
        </div>
    </div>
  )
}

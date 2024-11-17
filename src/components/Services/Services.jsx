import { CardCompany } from "./CardCompany"
import { CardServices } from "./CardServices"
import photo1 from '../../assets/Services/image 130.png'
import photo2 from '../../assets/Services/image 131.png'
import photo3 from '../../assets/Services/image 132.png'
import comp1 from '../../assets/Services/Group 158.png'
import comp2 from '../../assets/Services/Group 159.png'
import comp3 from '../../assets/Services/Group 160.png'
import comp4 from '../../assets/Services/icon-1.png'
import comp5 from '../../assets/Services/icon-2.png'
import comp6 from '../../assets/Services/icon-5.png'

export const Services = () => {

  const testimonials = [
    {
      image: photo1,
      name: 'Jacqueline Asong',
      role: 'Patient',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas quam nunc, tincidunt quis facilisis ut.'
    },
    {
      image: photo2,
      name: 'Jacqueline Asong',
      role: 'Patient',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas quam nunc, tincidunt quis facilisis ut.'
    },
    {
      image: photo3,
      name: 'Jacqueline Asong',
      role: 'Patient',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas quam nunc, tincidunt quis facilisis ut.'
    },
  ]
  const company = [
    {
      logo: comp1,
      name: 'Company name'
    },
    {
      logo: comp2,
      name: 'Company name'
    },
    {
      logo: comp3,
      name: 'Company name'
    },
    {
      logo: comp4,
      name: 'Company name'
    },
    {
      logo: comp5,
      name: 'Company name'
    },
    {
      logo: comp6,
      name: 'Company name'
    },
  ]
  return (
    <div>
      <div className="bg-bg-secondary flex flex-col justify-center items-center py-14">
        <div className="pb-14 font-principal text-3xl font-bold">
            <h2>More than +3500 Use Our Services</h2>
        </div>
        <div className="flex justify-center items-center w-full gap-5">
            {testimonials.map((testimonial, index) =>(
              <CardServices 
                key={index}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
              />
            ))}
        </div>
        <div className="flex items-center justify-center gap-5 w-full pt-10">
            {company.map((sponsor, index) =>(
              <CardCompany
              key={index}
              logo={sponsor.logo}
              name={sponsor.name}
              />
            ))}
        </div>
      </div>
        
    </div>
  )
}

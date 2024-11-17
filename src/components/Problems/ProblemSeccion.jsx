import { ProblemCard } from "./ProblemCard"
import caracol from '../../assets/Problems/caracol-img.png'
import computer from '../../assets/Problems/computer.png'
import price from '../../assets/Problems/Price-icon.png'

export const ProblemSeccion = () => {

    const problems = [
        {
            image: caracol,
            title: 'Late Response',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas quam nunc, tincidunt quis facilisis ut.'
        },
        {
            image: computer,
            title: 'Using Old Technologies',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas quam nunc, tincidunt quis facilisis ut.'
        },
        {
            image: price,
            title: 'High Price',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor. Maecenas quam nunc, tincidunt quis facilisis ut.'
        },
    ]

  return (
    <div className="bg-gradient-to-r from-secondary to-primary">
        <div className="flex flex-col justify-center items-center text-center pt-10">
            <h2 className="text-2xl font-principal text-blanco font-bold w-[500px]">Have you ever experienced problems in managing a website?</h2>
            <p className="text-ms font-principal text-blanco font-light pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex justify-center items-center py-10 px-40 gap-8">
            {problems.map((problem, index) => (
                <ProblemCard
                key={index}
                image={problem.image}
                title={problem.title}
                content={problem.content}
                />
            ))}
        </div>
    </div>
  )
}

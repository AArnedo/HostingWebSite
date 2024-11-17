import { FeatureCard } from "./FeatureCard";
import icon1 from '../../assets/Features/Security.png'
import icon2 from '../../assets/Features/Date Safety.png'
import icon3 from '../../assets/Features/Seo-tools-icons.png'
import { SectionHeader } from "./SectionHeader";

export const FeaturesGrid = () => {
    const features = [
        {
          title: "Data Safety",
          icon: icon1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor."
        },
        {
          title: "Added Security",
          icon: icon2,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor."
        },
        {
          title: "SEO Tools",
          icon: icon3,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor."
        }
      ];
    
  return (
    <div className="flex justify-center items-center gap-6 flex-col h-[50vh] flex-wrap ">
        <SectionHeader/>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          icon={feature.icon}
          description={feature.description}
        />
      ))}
    </div>
  )
}

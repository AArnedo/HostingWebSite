import { Footer } from "./components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import { Hosting } from "./components/Hosting/Hosting"
import { HostingFeaturesSection } from "./components/HostingFeaturesSection/HostingFeaturesSection"
import { Installation } from "./components/Installation/Installation"
import { ProblemSeccion } from "./components/Problems/ProblemSeccion"
import { Services } from "./components/Services/Services"

export const App = () => {
  return (
    <>
      <Hero/>
      <Services/>
      <ProblemSeccion/>
      <Hosting/>
      <Installation/>
      <HostingFeaturesSection/>
      <Footer/>
    </>
  )
}


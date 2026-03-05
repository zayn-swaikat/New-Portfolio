import About from "../components/About";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import HowIBuild from "../components/HowIBuild";
import ContactMe from "../components/Contact";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: true,
        })
    }, [])
    return (
        <div className="Home" id="home">
            <Hero />
            <About />
            <ProjectsSection />
            <HowIBuild />
            <ContactMe />
        </div>
    )
}
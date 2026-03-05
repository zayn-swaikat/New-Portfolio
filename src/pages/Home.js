import About from "../components/About";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import HowIBuild from "../components/HowIBuild";
import ContactMe from "../components/Contact";

export default function Home() {
    return (
        <div className="Home">
            <Hero />
            <About />
            <ProjectsSection />
            <HowIBuild />
            <ContactMe />
        </div>
    )
}
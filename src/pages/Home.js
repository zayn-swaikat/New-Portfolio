import About from "../components/About";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
    return (
        <div className="Home">
            <Hero />
            <About />
            <ProjectsSection />
        </div>
    )
}
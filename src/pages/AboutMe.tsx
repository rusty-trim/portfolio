import AboutHero from "../components/about/AboutHero";
import AboutTestimonials from "../components/about/AboutTestimonials";
import Divider from "../components/Divider";

export default function AboutMe() {
    return (
        <div className="w-full">
            <AboutHero />
            <Divider />
            <AboutTestimonials />
        </div>
    );
}

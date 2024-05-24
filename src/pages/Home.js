import Hero from "../components/Hero";
import Email from "../components/Email";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Services from "../components/Services";

function Home(props) {
    const db = props.db;
    return (
        <>
        <Hero />
        <Email />
        <AboutUs />
        <Services mb='4'/>
  
        {/* <Testimonials /> */}
        <ContactUs db={db}/>
        
        <Footer />
        </>
    );
}

export default Home
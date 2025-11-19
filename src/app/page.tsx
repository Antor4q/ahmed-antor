import Banner from "@/components/home/Banner";
import Brands from "@/components/home/Brands";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import MyStory from "@/components/home/MyStory";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import WhyMe from "@/components/home/WhyMe";



export default function Home() {
  return (
   <div className="relative">
  <Banner/>
  <Brands/>
  <MyStory/>
  <WhyMe/>
  <Services/>
  <Testimonials/>
  <Contact/>
  <Footer/>
 
   </div>
  );
}

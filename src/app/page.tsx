import Banner from "@/components/home/Banner";
import Brands from "@/components/home/Brands";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import MyStory from "@/components/home/MyStory";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import WhyMe from "@/components/home/WhyMe";

import { ProgressiveBlur } from "@/components/ui/progressive-blur";



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
 <ProgressiveBlur
  height="260px"
  position="bottom"
  className="fixed left-0 w-full z-50"
/>
   </div>
  );
}

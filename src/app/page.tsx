
import AboutCopy from "@/components/home/AboutCopy";
import Banner from "@/components/home/Banner";
import Brands from "@/components/home/Brands";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

import Technoloies from "@/components/home/Technoloies";



import { ProgressiveBlur } from "@/components/ui/progressive-blur";



export default function Home() {
  return (
   <div className="relative">
    
  

  <Banner/>

  

  
  <Brands/>
  
  <AboutCopy/>
 
  <Technoloies/>
  
 
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

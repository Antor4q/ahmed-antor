import brand1 from "../../../public/brands/brand1.png"
import brand2 from "../../../public/brands/brand2.png"
import brand3 from "../../../public/brands/brand3.png"
import brand4 from "../../../public/brands/brand4.png"
import brand5 from "../../../public/brands/brand7.png"
import brand6 from "../../../public/brands/brand8.png"
import brand7 from "../../../public/brands/brand11.png"
import Marquee from "react-fast-marquee"
import Image from "next/image"

const Brands = () => {
    const logos = [brand1, brand2, brand3, brand4, brand5, brand6, brand7]
    return (
        <div className="w-full py-10 bg-white">
            <div className="container mx-auto px-10">
                <div className="relative w-full overflow-hidden py-4">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          <Marquee direction="left" speed={40} gradient={false}>
            {logos.map((src, i) => (
              <div key={`line1-${i}`} className="mx-8">
                <Image src={src} alt={`logo-${i}`} width={140} height={60} className="transition-all duration-300 filter grayscale hover:grayscale-0" />
              </div>
            ))}
          </Marquee>
        </div>
            </div>
          
        </div>
    );
};

export default Brands;
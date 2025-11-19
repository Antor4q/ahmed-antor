import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareFacebook, FaSquareGithub, FaSquareUpwork } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";

const Footer = () => {
    return (
        <div className="py-24 grid grid-cols-1 justify-center">
             <p className="font-medium text-xl text-center text-[#3d3d3d] font-sans">
                        Starting as a founder in 2017, I faced early setbacks but quickly pivoted to become a UX<br/> Designer at a top startup. My journey took me to a globa.
                      </p>

                      <div className="text-2xl font-semibold flex justify-center mt-5 gap-4">
                        <p><FaSquareFacebook /></p>
                        <p><FaLinkedin /></p>
                        <p><FaInstagramSquare /></p>
                        <p><FaSquareGithub /></p>
                        <p><SiFiverr /></p>
                        <p><FaSquareUpwork /></p>
                      </div>
        </div>
    );
};

export default Footer;
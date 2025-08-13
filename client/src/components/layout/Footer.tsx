import { Link } from "wouter";
import logo from "./JD logo.jpg"; // Update this path to your actual logo image location

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About JD Tutoring</h3>
            <p className="text-gray-300 mb-4">
              We are dedicated to helping students excel in Mathematics and Physics through personalized tutoring and comprehensive learning programs.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/JDTutoring/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.tiktok.com/@jd_tutoring" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://www.instagram.com/jd_tutoring_pty" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.link/56reyb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Dummy Bot Button */}
         

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/About" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/Contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Matric Upgrade</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Saturday School</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Extra Classes</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Varsity / College Tutoring</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">In-Person Classes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>286 Pretorius Street, Central Towers, 514B</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3"></i>
                <span>076 380 3862</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3"></i>
                <span>012 003 4506 / 8173</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3"></i>
                <span>Info@jdtutoring.co.za</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Best Regards Section */}
        {/* <div className=" mb-6">
          <img src={logo} alt="JD Tutoring Logo" className="mx-auto h-16 mb-4" />
          <p className="text-lg font-semibold">Best Regards</p>
          <p className="text-gray-300">JD TUTORING</p>
          <p className="text-gray-300">012 003 4506</p>
>
          <p className="text-gray-300">
            <a href="https://www.jdtutoring.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              www.jdtutoring.co.za
            </a>
          </p>
        </div> */}

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} JD Tutoring. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

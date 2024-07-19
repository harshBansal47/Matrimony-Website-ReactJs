import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";
import Image from "react-bootstrap/Image";
import Logo from '../images/logo.png';

export default function Navbar() {
  const [expand, setExpand] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-red-50">
      <div className="py-1 px-10 lg:px-15 flex justify-between items-center">
        <div className="flex items-center justify-center h-16">
          <Image 
            src={Logo} 
            alt="Maheshwari Matrimonials" 
            aria-label="Maheshwari Matrimonials" 
            className="h-16 w-auto"
          />
        </div>

        <div>
          <ul className="hidden lg:flex lg:gap-6">
            <li><Link to="/" className="text-sm font-bold text-[#615a5a] hover:text-[#bf65ad] open-sans-google">Home</Link></li>
            <li><Link to="/about" className="text-sm font-bold text-[#615a5a] hover:text-[#bf65ad] open-sans-google">About</Link></li>
            <li><Link to="/contact" className="text-sm font-bold text-[#615a5a] hover:text-[#bf65ad] open-sans-google">Contact</Link></li>
            <li><Link to="/blogs" className="text-sm font-bold text-[#615a5a] hover:text-[#bf65ad] open-sans-google">Blogs</Link></li>
          </ul>
          {expand ? (
            <GiTireIronCross
              className="h-10 w-10 font-bold text-pink-600 hover:text-red-300 lg:hidden"
              onClick={() => setExpand(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="h-10 w-10 font-bold text-pink-600 hover:text-red-300 lg:hidden rounded"
              onClick={() => setExpand(true)}
            />
          )}
        </div>
      </div>
      <hr className="border-[#E0E0E0] mx-auto" />
      <div className={`lg:hidden ${expand ? "block" : "hidden"} bg-inherit`}>
        <ul className="flex flex-col gap-4 p-4 justify-center items-center">
          <li>
            <Link to="/" className={`text-lg text-[#333333] hover:text-[#bf65ad] font-bold`} onClick={() => setExpand(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`text-lg text-[#333333] hover:text-[#bf65ad] font-bold`} onClick={() => setExpand(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`text-lg text-[#333333] hover:text-[#bf65ad] font-bold`} onClick={() => setExpand(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blogs" className={`text-lg text-[#333333] hover:text-[#bf65ad] font-bold`} onClick={() => setExpand(false)}>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

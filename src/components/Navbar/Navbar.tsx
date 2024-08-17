import { useEffect } from "react";
import { IoSunny, IoLanguage } from "react-icons/io5";
import iconRaven from "../../assets/img/icon-raven-nav.png";
import { Link } from 'react-router-dom';

function Navbar() {
  useEffect(() => {
    const hoverBox = document.getElementById("hover-box");

    hoverBox.addEventListener("mousemove", function (e) {
      const rect = hoverBox.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      hoverBox.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03))`;
    });

    hoverBox.addEventListener("mouseleave", function () {
      hoverBox.style.background = "rgba(255, 255, 255, 0.05)";
    });

    return () => {
      hoverBox.removeEventListener("mousemove", null);
      hoverBox.removeEventListener("mouseleave", null);
    };
  }, []);

  return (
    <nav className="flex pt-5 pb-2">
      <div className="flex justify-between items-center container">
        <Link to="/">
          <img className="w-[55px] h-[55px]" src={iconRaven} alt="iconRaven" />
        </Link>
        <div
          id="hover-box"
          className="relative flex items-center text-xs gap-1 border border-gray-700 rounded bg-white bg-opacity-5 backdrop-blur-lg shadow-custom transition-all duration-300 ease-in-out"
        >
          <Link to="/services" className="relative py-2 px-4 m-1 border border-transparent rounded transition-all duration-300 ease-in-out hover:bg-primary-color-light hover:border-primary-color hover:text-black">
            SERVICIO
          </Link>
          <Link to="/portfolio" className="py-2 px-4 m-1 border border-transparent hover:bg-primary-color-light hover:border-primary-color hover:text-black rounded transition-all duration-300 ease-in-out">
            PORFOLIO
          </Link>
          <Link to="/us" className="py-2 px-4 m-1 border border-transparent hover:bg-primary-color-light hover:border-primary-color hover:text-black rounded transition-all duration-300 ease-in-out">
            NOSOTROS
          </Link>
          <Link to="/contact" className="py-2 px-4 m-1 border border-transparent hover:bg-primary-color-light hover:border-primary-color hover:text-black rounded transition-all duration-300 ease-in-out">
            CONTACTO
          </Link>
        </div>
        <div className="flex gap-8">
          <Link to="#">
            <IoSunny className="w-[30px] h-[30px]" />
          </Link>
          <Link to="#">
            <IoLanguage className="w-[30px] h-[30px]" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

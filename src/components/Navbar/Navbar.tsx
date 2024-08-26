import { useEffect } from "react";
import { IoSunny, IoLanguage } from "react-icons/io5";
import iconRaven from "../../assets/img/icon-ravenlogic.png";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    const hoverBoxes = document.getElementsByClassName("hover-box");

    // Convertimos HTMLCollection en un array para poder iterar
    Array.from(hoverBoxes).forEach((hoverBox) => {
      hoverBox.addEventListener("mousemove", function (e) {
        const rect = hoverBox.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        hoverBox.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03))`;
      });

      hoverBox.addEventListener("mouseleave", function () {
        hoverBox.style.background = "rgba(255, 255, 255, 0.05)";
      });
    });

    return () => {
      Array.from(hoverBoxes).forEach((hoverBox) => {
        hoverBox.removeEventListener("mousemove", null);
        hoverBox.removeEventListener("mouseleave", null);
      });
    };
  }, []);

  return (
    <nav className="flex pt-5 pb-2">
      <div className="flex justify-between items-center container">
        <Link
          to="/"
          className="hover-box relative flex items-center text-xs gap-2 border border-gray-700 rounded-full bg-white bg-opacity-5 backdrop-blur-lg shadow-custom transition-all duration-300 ease-in-out py-[9px] px-3"
        >
          <img className="w-[30px] h-[30px]" src={iconRaven} alt="iconRaven" />
          RAVEN LOGIC
        </Link>

        <div
          className="hover-box relative flex items-center text-xs gap-1 border border-gray-700 rounded-full bg-white bg-opacity-5 backdrop-blur-lg shadow-custom transition-all duration-300 ease-in-out px-1"
        >
          <Link
            to="/services"
            className="py-[11px] px-4 m-1 border border-transparent rounded-full transition-all duration-300 ease-in-out hover:bg-primary-color-light hover:border-primary-color "
          >
            SERVICIO
          </Link>
          <Link
            to="/portfolio"
            className="py-[11px] px-4 m-1 border border-transparent hover:bg-primary-color-light hover:border-primary-color rounded-full transition-all duration-300 ease-in-out"
          >
            PORFOLIO
          </Link>
          <Link
            to="/us"
            className="py-[11px] px-4 m-1 border border-transparent hover:bg-primary-color-light hover:border-primary-color  rounded-full transition-all duration-300 ease-in-out"
          >
            NOSOTROS
          </Link>
          <Link
            to="/contact"
            className="py-[11px] px-4 m-1 border border-transparent hover:bg-primary-color-light hover:border-primary-color  rounded-full transition-all duration-300 ease-in-out"
          >
            CONTACTO
          </Link>
          <Link
            to="#"
            className="py-[5px] px-4 m-1 border border-transparent hover:bg-primary-color-light hover:border-primary-color rounded-full transition-all duration-300 ease-in-out"
          >
            <IoSunny className="w-[28px] h-[28px] " />
          </Link>
          <Link
            to="#"
            className="py-[5px] px-4 m-1 border border-transparent hover:bg-primary-color-light hover:border-primary-color rounded-full transition-all duration-300 ease-in-out"
          >
            <IoLanguage className="w-[28px] h-[28px]" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

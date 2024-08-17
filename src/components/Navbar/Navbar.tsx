import { IoSunny, IoLanguage } from "react-icons/io5";
import iconRaven from "../../assets/img/icon-raven-nav.png";

function Navbar() {
  return (
    <nav className="bg-[rgba(10,10,10,0.8)] h-[70px] flex">
      <div className="flex justify-between items-center container">
        <a>
          <img
            className="w-[55px] h-[55px]"
            src={iconRaven}
            alt="iconRaven"
          />
        </a>
        <div className="flex items-center text-xs gap-16">
          <a>INICIO</a>
          <a>SERVICIO</a>
          <a>PORFOLIO</a>
          <a>NOSOTROS</a>
          <a>CONTACTO</a>
          <div className="flex gap-8">
            <a>
              <IoSunny className="w-[30px] h-[30px]" />
            </a>
            <a>
              <IoLanguage className="w-[30px] h-[30px]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
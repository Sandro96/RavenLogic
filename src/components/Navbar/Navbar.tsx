import { IoSunny, IoLanguage } from "react-icons/io5";
import iconRaven from "../../assets/img/icon-raven-nav.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[rgba(10,10,10,0.8)] h-[70px] flex">
      <div className="flex justify-between items-center container">
        <Link to='/'>
          <img
            className="w-[55px] h-[55px]"
            src={iconRaven}
            alt="iconRaven"
          />
        </Link>
        <div className="flex items-center text-xs gap-16">
          <Link to='servicios'>SERVICIO</Link>
          <Link to='portfolio'>PORTFOLIO</Link>
          <Link to='nosotros'>NOSOTROS</Link>
          <Link to='contacto'>CONTACTO</Link>
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
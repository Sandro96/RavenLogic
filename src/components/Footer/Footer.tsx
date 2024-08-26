import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import iconRaven from "../../assets/img/icon-ravenlogic.png";

function Footer() {
  return (
    <footer className="relative bg-zinc-900 text-white py-3">
      <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-center">
        <img className="w-[70px] h-[70px]" src={iconRaven} alt="iconRaven" />
        <div className="text-center text-xs">
          <h4 className="text-lg font-semibold">RavenLogic</h4>
          <p className="text-sm">Innovación y tecnología a tu alcance.</p>
          <p>© 2024 RavenLogic. Todos los derechos reservados.</p>
        </div>
        <div className="mb-4 md:mb-0 text-center">
          <ul className="flex gap-4">
            <li>
              <a href="#" className="hover:text-primary-color">
                <FaLinkedin size={30} />
              </a>
            </li>
            <li>
              <a
                href="mailto:info@ravenlogic.com"
                className="hover:text-primary-color"
              >
                <FaEnvelope size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/59812345678"
                className="hover:text-primary-color"
              >
                <FaWhatsapp size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import "./Hero.css";
import gears from "../../assets/img/gears.png";

function Hero() {
  return (
    <>
      <header className="text-start py-16 container flex items-center justify-between">
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-gray-500">
              INNOVACIÓN Y TECNOLOGÍA
            </h3>
            <h1 className="font-bold text-white">RAVEN LOGIC</h1>
            <h3 className="text-gray-300">
              Desarrollamos soluciones digitales
            </h3>
          </div>
          <button className="self-start">Solicita tu página</button>
        </div>
        <img
          className="w-[450px] h-[682px]"
          src={gears}
          alt="gears"
        />
      </header>
    </>
  );
}

export default Hero;

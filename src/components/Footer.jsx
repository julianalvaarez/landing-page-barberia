import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-black p-7 text-white mt-20">
      <div className="flex flex-col items-center gap-4 md:flex-row justify-around">
        <img src="logo.webp" alt="Mari The Barber Logo" title="Mari The Barber Logo" className="md:w-1/6" />
        <ul className="text-center flex flex-col gap-2 md:gap-4 md:text-xl">
          <li className="hover:underline ">
            <a href="#home">HOME</a>
          </li>
          <li className="hover:underline ">
            <a href="#servicios">SERVICIOS</a>
          </li>
          <li className="hover:underline ">
            <a href="#contacto">CONTACTO</a>
          </li>
        </ul>
      </div>
      <div className="flex text-sm mt-8 justify-between md:gap-4 md:justify-start">
        <div className="flex items-center gap-1">
          <BsInstagram />
          <a href="https://instagram.com/mari.thebarber" target="_BLANK" className="hover:underline">mari.thebarber</a>
        </div>
        <div className="flex items-center gap-1">
          <BsWhatsapp />
          <a href="https://wa.me/5491173604311?text=Hola, me gustaria agendar un turno para el dia ..." target="_BLANK" className="hover:underline">11-5006-9305</a>
        </div>
      </div>
    </footer>
  );
};

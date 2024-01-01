import { BsInstagram, BsWhatsapp } from "react-icons/bs";
export const Contacto = () => {
  return (
    <section className="mt-20" id="contacto">
      <h3 className="text-2xl md:text-5xl font-sembold text-center">
        CONTACTO
      </h3>
      <div className="flex flex-col items-center gap-3 md:flex-row md:gap-8 mt-10 md:justify-center md:items-center">
        <div className="grid grid-cols-2 grid-rows-2 place-items-center w-64 text-sm">
          <p className="font-semibold">LUNES A SABADO</p>
          <p className="text-xs md:text-sm">10:00 - 20:00</p>
          <p className="font-semibold">DOMINGO</p>
          <p className="text-xs md:text-sm">CERRADO</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
          <BsInstagram />
          <a href="https://instagram.com/mari.thebarber" target="_BLANK" className="hover:underline">mari.thebarber</a>
          </div>
          <div className="flex items-center gap-1">
          <BsWhatsapp />
          <a href="https://wa.me/1173604311?text=Hola" target="_BLANK" className="hover:underline">11-5006-9305</a>
          </div>
        </div>
      </div>
    </section>
  );
};

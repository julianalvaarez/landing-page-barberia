import ScrollCarousel from "scroll-carousel-react";


export const Carrusel = () => {
  const servicios = [
    "CORTES",
    "PERMANENTE",
    "MECHAS",
    "CEJAS",
    "DISEÑO",
    "COLOR GLOBAL",
  ];
  return (
    <>
      <ScrollCarousel
        autoplay
        autoplaySpeed={1}
        speed={2}
        className="px-48"
      >
        {servicios.map((item) => (
          <div key={item} className="text-xs w-48">
            {item}
          </div>
        ))}
      </ScrollCarousel>


    </>
  );
};

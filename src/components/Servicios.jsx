import { Carousel } from "antd";

const contentStyle = {
  height: "360px",
  width: "360px",
  color: "#fff",
  background: "#fff",
};

export const Servicios = () => {
  return (
    <section
      className="mt-16 flex flex-col-reverse md:flex-row md:justify-evenly gap-10 md:gap-0"
      id="servicios"
    >
      <div className="md:w-96 mx-auto md:mx-0 w-72">
        <Carousel speed={1000} autoplay className="">
          <div>
            <img src="/corte.webp" loading="lazy" alt="Corte de pelo" title="Corte de Pelo" style={contentStyle} />
          </div>
          <div>
            <img src="/corte2.webp" loading="lazy" alt="Corte de pelo" title="Corte de Pelo" style={contentStyle} />
          </div>
          <div>
            <img src="/corte3.webp" loading="lazy" alt="Corte de pelo" title="Corte de Pelo" style={contentStyle} />
          </div>
          <div>
            <img src="/corte4.webp" loading="lazy" alt="Corte de pelo" title="Corte de Pelo" style={contentStyle} />
          </div>
          <div>
            <img src="/corte5.webp" loading="lazy" alt="Corte de pelo" title="Corte de Pelo" style={contentStyle} />
          </div>
        </Carousel>
      </div>
      <div>
        <h3 className="text-2xl md:text-4xl font-sembold text-center">
          SERVICIOS DISPONIBLES
        </h3>
        <div>
          <ul className="grid md:grid-cols-3 md:grid-rows-3 grid-rows-6 place-items-center mx-10 font-medium text-xl gap-3 mt-16 md:mt-20">
            <li className="border-b pb-5 border-black">CORTES</li>
            <li className="border-b pb-5 border-black">PERMANENTE</li>
            <li className="border-b pb-5 border-black">DISEÑO</li>
            <li className="border-b pb-5 border-black">GLOBAL COLOR</li>
            <li className="border-b pb-5 border-black">MECHAS</li>
            <li className="border-b pb-5 border-black">CEJAS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

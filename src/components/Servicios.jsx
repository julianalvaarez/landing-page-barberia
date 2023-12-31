export const Servicios = () => {
  return (
    <>
      <section class="mt-16" id="servicios">
        <div>
          <h3 class="text-2xl md:text-5xl font-sembold text-center">
            SERVICIOS DISPONIBLES
          </h3>
          <div>
            <ul class="grid md:grid-cols-3 md:grid-rows-2 grid-rows-6 place-items-center mx-10 font-medium text-xl gap-3 mt-16">
              <li class="border-b pb-5 border-black">CORTES</li>
              <li class="border-b pb-5 border-black">PERMANENTE</li>
              <li class="border-b pb-5 border-black">DISEÑO</li>
              <li className="border-b pb-5 border-black">GLOBAL COLOR</li>
              <li className="border-b pb-5 border-black">MECHAS</li>
              <li>CEJAS</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

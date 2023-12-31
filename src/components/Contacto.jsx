
export const Contacto = () => {

  return (
    <section className="mt-20" id="contacto">
      <h3 className="text-2xl md:text-5xl font-sembold text-center">
        CONTACTO
      </h3>
      <div className="grid grid-cols-2 grid-rows-2 place-items-center w-64 text-sm mx-auto mt-10">
        <p className="font-semibold">LUNES A SABADO</p>
        <p className="text-xs md:text-sm">10:00 - 20:00</p>
        <p className="font-semibold">DOMINGO</p>
        <p className="text-xs md:text-sm">CERRADO</p>
      </div>
      <div>
        <form id="formulario">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label for="correo">Correo electrónico:</label>
          <input type="email" id="correo" name="correo" required />

          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

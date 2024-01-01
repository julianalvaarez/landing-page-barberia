export const Header = () => {
  function openWhatsapp() {
    window.open("https://wa.me/5491150069305?text=Hola, me gustaria agendar un turno para el dia ... ");
  }
  return (
    <main class="header mt-10 h-[80vh] lg:mx-48 sm:w-auto" id="home">
      <div class="flex flex-col justify-center h-full px-10 gap-10 lg:ml-16">
        <h1 class="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold titulo text-wrap md:w-2/4">
          EL MEJOR SERVICIO DE BARBERIA DE WILDE
        </h1>
        <button onClick={openWhatsapp} className="text-white rounded text-start px-3 py-2 bg-green-600 w-max hover:bg-green-700 transition-colors active:bg-green-800 text-xs md:text-sm lg:text-base">
          AGENDA POR WHATSAPP
        </button>
      </div>
    </main>
  );
};

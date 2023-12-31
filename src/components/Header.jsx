export const Header = () => {
  return (
    <>
      <main class="header mt-10 h-[80vh] lg:mx-48 w-screen sm:w-auto" id="home">
        <div class="flex flex-col justify-center h-full px-10 gap-10 lg:ml-16">
          <h1 class="text-white text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold titulo text-wrap lg:w-2/4">
            EL MEJOR SERVICIO EN CORTES DE WILDE
          </h1>
          <button class="text-white text-start px-4 py-2 bg-gray-600 bg-opacity-80 w-max hover:bg-gray-700 transition-colors active:bg-gray-800 text-sm lg:text-base">
            AGENDAR TURNO
          </button>
        </div>
      </main>
    </>
  );
};

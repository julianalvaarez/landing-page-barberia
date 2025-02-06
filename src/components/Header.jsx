export const Header = () => {

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallVisible, setIsInstallVisible] = useState(false);

  useEffect(() => {
    // Escucha el evento beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Previene que el prompt se muestre automáticamente
      setDeferredPrompt(e); // Guarda el evento para usarlo luego
      setIsInstallVisible(true); // Muestra el botón de instalación
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Limpieza del event listener
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Muestra el prompt
      // Opcional: Maneja la respuesta del usuario
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó la instalación');
        } else {
          console.log('El usuario rechazó la instalación');
        }
        setDeferredPrompt(null);
        setIsInstallVisible(false);
      });
    }
  };
  return (
    <>
      <main class="header mt-10 h-[80vh] lg:mx-48 w-screen sm:w-auto" id="home">
        <div class="flex flex-col justify-center h-full px-10 gap-10 lg:ml-16">
          <h1 class="text-white text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold titulo text-wrap lg:w-2/4">
            EL MEJOR SERVICIO EN CORTES DE WILDE
          </h1>
          {isInstallVisible && (
        <button className="bg-green-600 p-5 text-white rounded-lg" onClick={handleInstallClick}>
          Instalar App
        </button>
      )}
          <button class="text-white text-start px-4 py-2 bg-gray-600 bg-opacity-80 w-max hover:bg-gray-700 transition-colors active:bg-gray-800 text-sm lg:text-base">
            AGENDAR TURNO
          </button>
        </div>
      </main>
    </>
  );
};

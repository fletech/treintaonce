import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AnonymousLayout = () => {
  return (
    <>
      <header>
        <nav className="h-[8vh] md:px-20 px-8 w-full flex items-center justify-between backdrop-blur-xl fixed z-10 opacity-97">
          <div className="flex justify-center items-center w-full">
            {/*<img src="/path/to/your/logo.png" alt="Logo" className="h-8 w-8 mr-4" /> */}

            <span className="font-bold text-lg">treintaONce</span>
          </div>
        </nav>
      </header>
      <div className="min-h-screen flex flex-col md:px-20 px-8">
        {/* Aquí puedes agregar una barra de navegación, encabezado o cualquier otro elemento que desees mostrar en todas las páginas */}

        {/* Contenido principal */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Aquí puedes agregar un pie de página u otros elementos que desees mostrar en todas las páginas */}
      </div>
    </>
  );
};

export default AnonymousLayout;

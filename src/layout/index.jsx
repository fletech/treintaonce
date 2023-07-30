import React from "react";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col px-8">
      {/* Aquí puedes agregar una barra de navegación, encabezado o cualquier otro elemento que desees mostrar en todas las páginas */}

      {/* Contenido principal */}
      <main className="flex-grow">{children}</main>

      {/* Aquí puedes agregar un pie de página u otros elementos que desees mostrar en todas las páginas */}
    </div>
  );
};

export default Layout;

const DrawerContent = ({ work }) => {
  const text = work.work_long_description;
  const list = text.split("/").length != 0 ? text.split("/") : [text];

  return (
    <div className=" w-full flex flex-col h-full">
      <div
        style={
          {
            // backgroundImage: `url(${work.work_image_cover})`,
          }
        }
        className="w-full flex flex-col rounded-2xl bg-center bg-contain bg-no-repeat duration-300 h-full "
        key={work.work_id}
        // className={`carousel-slide  w-full h-64 p-4 duration-500 `}
      >
        <div className=" py-2 font-light rounded-md text-blackish/80 h-full">
          <span className="font-light text">{work.work_date}</span>
          <h3 id="family-custom" className=" font-light text-lg tracking-wider">
            {work.work_short_description}
          </h3>
          <p className="font-light tracking-wide">{list[0]}</p>
          <ul>
            {list.length != 0 &&
              list.map((item, i) => {
                if (i != 0 && i != list.length - 1)
                  return <li key={i}>{item}</li>;
              })}
          </ul>
          <span id="family-code" className="family-custom mt-20 text-primary">
            Si venimos de todos tenemos que volver a todos, hay que guardar esa
            ubicacion, si venimos de una url distinta, volvemos a esa URL.Al
            volver de un producto, tenemos que volver a mostrar todos los
            prductos de esa categoria:{"-->"} resuelto en parte. Ahora hay que
            mostrar URL cuando el producto drawer está abierto.
          </span>
        </div>
      </div>
    </div>
  );
};
export default DrawerContent;

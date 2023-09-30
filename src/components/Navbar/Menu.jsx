import { Link } from "react-router-dom";

const MenuOptions = ({ options, location_path, setMenuOpen }) => {
  return options.map((element, i) => (
    <div onClick={() => setMenuOpen(false)}>
      <Link
        key={i}
        to={element.url}
        className={` mx-2 font-semibold text-blackish border-b-2 ${
          location_path == element.url.split("/")[1]
            ? " border-primary"
            : "border-primary/0"
        }`}
      >
        {element.menu}
      </Link>
    </div>
  ));
};

export default MenuOptions;

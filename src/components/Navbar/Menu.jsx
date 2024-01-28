import { Link } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";
import { useDetailsContext } from "../../../context/useDetailsContext";

const MenuOptions = ({ options, location_path, setMenuOpen }) => {
  const { setSelectedProduct } = useDetailsContext();
  const size = useWindowSize();
  const isMobile = size.width < 768;
  return options.map((element, i) => (
    <div
      onClick={() => {
        isMobile && setMenuOpen(false);
        setSelectedProduct({});
      }}
      className="my-2 md:my-0"
      key={i}
    >
      <Link
        key={i}
        to={element.url}
        className={` ml-2 font-semibold text-blackish border-b-2 ${
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

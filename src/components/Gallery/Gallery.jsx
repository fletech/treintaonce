import { useState } from "react";
import { useDetailsContext } from "../../../context/useDetailsContext";

const GalleryItem = ({ item, index, setImageIndex, imageIndex }) => {
  return (
    <div
      onClick={() => setImageIndex(index)}
      className="w-[100px] h-auto m-2 snap-x"
    >
      <img
        src={item}
        className={` w-[80px] h-[80px] border p-2 rounded-md  hover:border-2 cursor-pointer transition-colors bg-white ${
          index == imageIndex && "border-primary"
        }`}
      />
    </div>
  );
};

const Gallery = () => {
  const { selectedProduct } = useDetailsContext();
  const [imageIndex, setImageIndex] = useState(0);

  const imagesHandler = () => {
    const imagesFiltered = [
      { original: selectedProduct.work_image1 },
      { original: selectedProduct?.work_image2 },
      { original: selectedProduct?.work_image3 },
      { original: selectedProduct?.work_image4 },
      { original: selectedProduct?.work_image5 },
      { original: selectedProduct?.work_image6 },
    ].filter((image) => image.original != undefined);
    return imagesFiltered;
  };

  const images = imagesHandler();

  return (
    <>
      <div className=" flex flex-col justify-center items-center border-2 rounded-md bg-white py-10">
        <div className="main-image w-[300px] h-[300px]  ">
          <img src={images[imageIndex].original} />
        </div>
      </div>

      <div className="  grid  no-scrollbar  px-2 overflow-scroll my-10  ">
        <div className=" flex  w-auto snap-x">
          {images.map((item, i) => (
            //TODO: remarcar imagen seleccionada
            <GalleryItem
              key={i}
              item={item.original}
              index={i}
              setImageIndex={setImageIndex}
              imageIndex={imageIndex}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Gallery;

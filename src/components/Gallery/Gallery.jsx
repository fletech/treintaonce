import { useState } from "react";
import { useDetailsContext } from "../../../context/useDetailsContext";

const GalleryItem = ({ item, index, setImageIndex }) => {
  return (
    <div onClick={() => setImageIndex(index)} className="w-[100px] h-auto m-2">
      <img
        src={item}
        className=" w-[100px] h-[100px] border p-2 rounded-md  hover:bg-secondary cursor-pointer transition-colors bg-white"
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
    <div className=" flex flex-col justify-center items-center mb-10 border rounded-md overflow-hidden">
      <div className="main-image w-[300px] h-[300px] mb-10 ">
        <img src={images[imageIndex].original} />
      </div>
      <div className="no-scrollbar overflow-x-scroll w-full flex justify-start items-center bg-blackish/20 px-2 ">
        <div className="flex justify-start w-full  w-max ">
          {images.map((item, i) => (
            <GalleryItem
              key={i}
              item={item.original}
              index={i}
              setImageIndex={setImageIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Gallery;

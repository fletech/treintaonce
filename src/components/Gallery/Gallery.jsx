import { useDetailsContext } from "../../../context/useDetailsContext";

const GalleryItem = ({ item }) => {
  console.log(item);
  return (
    item != undefined && (
      <img src={item} className="w-[100px] h-[100px] border-2 p-2" />
    )
  );
};

const Gallery = () => {
  const { selectedProduct } = useDetailsContext();

  const images = [
    { original: selectedProduct.work_image1 },
    { original: selectedProduct.work_image2 },
    { original: selectedProduct?.work_image3 },
    { original: selectedProduct?.work_image4 },
    { original: selectedProduct?.work_image5 },
  ];
  console.log(selectedProduct);

  return (
    selectedProduct && (
      <div className="w-full flex flex-col justify-center items-center">
        <div className="main-image w-[300px] h-[300px] ">
          <img src={images[0].original} />
        </div>
        <div className="flex justify-center">
          {images.map((item, i) => (
            <GalleryItem key={i} item={item.original} />
          ))}
        </div>
      </div>
    )
  );
};
export default Gallery;

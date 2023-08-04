import React, { useEffect } from "react";

const WorkBox = ({ work }) => {
  useEffect(() => {
    console.log(work);
  }, []);
  return (
    <div className="carousel-wrapper w-full flex p-2 h-full ">
      <div
        style={{
          backgroundImage: `url(${work.work_image_cover})`,
        }}
        className="w-full rounded-2xl bg-center bg-contain bg-no-repeat duration-300 h-auto "
        key={work.work_id}
        // className={`carousel-slide  w-full h-64 p-4 duration-500 `}
      >
        <div className="bg-white inline-block p-2">
          <h3>{work.work_title}</h3>
        </div>
      </div>
    </div>
  );
};
export default WorkBox;

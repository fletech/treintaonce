import { Link } from "react-router-dom";

const WorkBox = ({ work }) => {
  return (
    <Link to={`/nuestros-trabajos/producto/${work.work_ID}&${work.work_title}`}>
      <div className="carousel-wrapper w-full flex p-2 h-full ">
        <div
          style={{
            backgroundImage: `url(${work.work_image_cover})`,
          }}
          className="w-full rounded-2xl bg-center bg-contain bg-no-repeat duration-300 h-auto "
          key={work.work_id}
          // className={`carousel-slide  w-full h-64 p-4 duration-500 `}
        >
          <div className="bg-bgHighlight inline-block p-2 font-light">
            <h3 className="font-light">{work.work_title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default WorkBox;

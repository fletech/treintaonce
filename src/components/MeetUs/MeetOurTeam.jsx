import { motion } from "framer-motion";
import { Subtitle } from "../Commons/Commons";
import { content_layout } from "../../../lib/constants";

const MemberCard = ({ name, position, image, imagePosition }) => {
  return (
    <div className="grid grid-cols-3 lg:flex lg:flex-col items-center justify-evenly w-auto p-4 bg-white rounded-xl shadow-md border-[1px] group hover:scale-[110%] transition-all">
      <img
        src={image}
        alt={name}
        className={`w-40 h-40 rounded-full group-hover:rounded-none mb-4 object-cover ${imagePosition} transition-all ease-in-out delay-1000`}
      />
      <div className="flex flex-col justify-center items-center lg:min-w-auto min-w-[200px] font-blackish">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-500">{position}</p>
      </div>
    </div>
  );
};

const MeetOurTeam = () => {
  const { members, description } = content_layout.meetUs;

  return (
    <motion.div
      initial={{ opacity: 0.5, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.7 }}
    >
      <main className={`mt-16 md:mt-24 w-full h-auto md:min-h-[80vh]`}>
        <Subtitle text={"Somos una empresa familiar"} />
        <p className="font-light text-xl text-blackish tracking-widest ">
          {description}
        </p>
        <div className="md:grid md:grid-cols-5 gap-6 mt-8 flex flex-col">
          {members.map((member) => (
            <MemberCard
              key={member.name}
              name={member.name}
              position={member.position}
              image={member.image}
              imagePosition={member.imagePosition}
            />
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default MeetOurTeam;

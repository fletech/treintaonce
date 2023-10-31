import { motion } from "framer-motion";
import { Subtitle } from "../components/Commons/Commons";

const MemberCard = ({ name, position, image, imagePosition }) => {
    return (
        <div className="flex flex-row lg:flex-col items-center justify-evenly w-auto p-4 bg-white rounded-xl shadow-md border-[1px]">
            <img src={image} alt={name} className={`w-32 h-32 rounded-full mb-4 object-cover ${imagePosition}`} />
            <div className="flex flex-col justify-center items-center lg:min-w-auto min-w-[200px] font-blackish">

            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-gray-500">{position}</p>
            </div>
        </div>
    );
};

const MeetUs = () => {
    const members = [
        {
            name: "Silvina Camuzzi",
            position: "Proveedores",
            image: "/assets/silvina.jpeg",
            imagePosition:"object-top"
        },
        {
            name: "Juan Garcia",
            position: "Diseñador gráfico",
            image: "/assets/juan.jpeg",
            imagePosition:"object-top"
        },
        {
            name: "Francisco Garcia",
            position: "Encargado de Taller",
            image: "/assets/fran.jpeg",
            imagePosition:"object-center"
        },
        {
            name: "Álvaro Garcia",
            position: "Operaciones",
            image: "/assets/alvaro.jpeg",
            imagePosition:"object-top"
        },
        {
            name: "Facundo Garcia",
            position: "Administración",
            image: "/assets/facundo.jpeg",
            imagePosition:"object-center"
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0.5, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
        >
            <main className={`mt-16 md:mt-24 w-full h-auto md:min-h-[80vh]`}>
                <Subtitle text={"Somos una empresa familiar"} />
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

export default MeetUs;
  
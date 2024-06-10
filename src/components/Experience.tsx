import { experiences } from "@/config/variables";

const Experience = () => {
  return (
    <section
      id="experience"
      className="h-full w-full flex justify-center items-center p-8 lg:p-0 bg-gray-900"
    >
      <div className="md:max-w-[360px] lg:max-w-[1080px] w-full flex flex-col justify-center items-center gap-16">
        <h1 className="text-white font-bold text-4xl">Experiencia</h1>
        <div className="w-full h-full flex flex-col gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-violet-700 p-6 rounded-lg shadow-lg w-full"
            >
              <h2 className="text-white text-2xl font-bold text-gray-800">
                {experience.company}
              </h2>
              <h3 className="text-violet-100 text-xl text-gray-600">
                {experience.role}
              </h3>
              <p className="text-violet-100 italic">{experience.duration}</p>
              <ul className="list-disc list-inside mt-4 text-violet-100">
                {experience.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

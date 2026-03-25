import SectionHeading from "./SectionHeading";

export default function SkillsSection({ skills, isLoadingSkills }) {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading title="My Skills" />
        {isLoadingSkills ? (
          <div className="text-center text-zinc-400 py-8">Loading languages from GitHub...</div>
        ) : (
          <div className="flex flex-wrap justify-center gap-y-10 gap-x-8">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="basis-[calc(50%-1rem)] md:basis-[calc(25%-1.5rem)] text-center"
              >
                <p className="text-6xl font-bold text-red-500">
                  {skill.percentage}
                  <span className="text-4xl">%</span>
                </p>
                <p className="text-white uppercase tracking-widest mt-2">{skill.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

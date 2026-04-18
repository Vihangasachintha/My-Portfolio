import SectionHeading from "./SectionHeading";

export default function SkillsSection({ skills }) {
  const skillGroups = [
    {
      title: "Programming Languages",
      description:
        "Core languages I use to build reliable, performant software across web and backend projects.",
      items: skills.languages ?? [],
    },
    {
      title: "Frameworks",
      description:
        "Frameworks I use to accelerate development while keeping architecture clean and scalable.",
      items: skills.frameworks ?? [],
    },
    {
      title: "Libraries",
      description:
        "Libraries I use to add polished UI, robust state handling, real-time features, and better developer velocity.",
      items: skills.libraries ?? [],
    },
    {
      title: "Databases",
      description:
        "Databases I use to design efficient schemas, manage data integrity, and ship reliable data-driven applications.",
      items: skills.databases ?? [],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading title="My Skills" />

        <p className="text-center text-zinc-400 max-w-2xl mx-auto mt-4 mb-14">
          A curated overview of the technologies I use across modern product development.
        </p>

        <div className="space-y-14">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-7 text-center md:text-left">
                <h3 className="text-white text-2xl font-semibold tracking-wide">{group.title}</h3>
                <p className="text-zinc-400 mt-2 max-w-3xl">{group.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
                {group.items.map((skill) => (
                  <article
                    key={`${group.title}-${skill.label}`}
                    className="group bg-zinc-900/70 border border-zinc-800 rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(0,128,255,0.18)]"
                  >
                    <div className="mx-auto mb-4 h-16 w-16 rounded-lg bg-zinc-950/80 border border-zinc-800 grid place-items-center">
                      <img
                        src={skill.logo}
                        alt={skill.alt}
                        loading="lazy"
                        className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h4 className="text-white font-semibold tracking-wide text-sm md:text-base">
                      {skill.label}
                    </h4>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


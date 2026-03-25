import SectionHeading from "./SectionHeading";

export default function PortfolioSection({ items }) {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading title="My Projects" />
        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-52 h-[1000px]">
          {items.map((item) => (
            <div
              key={item.title}
              className="portfolio-card h-[500px] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 flex flex-col"
            >
              <div className="portfolio-card-image relative overflow-hidden h-80">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="portfolio-card-title text-white text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="portfolio-card-description text-gray-400 text-sm mb-4 flex-1">
                  {item.description}
                </p>
                <div className="portfolio-tech-tags">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="portfolio-tech-tag px-3 py-1 bg-black text-gray-300 text-xs rounded-md border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <a
                    href={item.codeLink}
                    className="portfolio-action-btn portfolio-code-btn flex items-center gap-2 px-4 py-2 rounded text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={item.demoLink}
                    className="portfolio-action-btn portfolio-demo-btn flex items-center gap-2 px-4 py-2 rounded text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

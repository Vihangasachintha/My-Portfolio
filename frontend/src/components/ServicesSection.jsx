import SectionHeading from "./SectionHeading";

export default function ServicesSection({ services }) {
  return (
    <section id="services" className="py-20 md:py-32 bg-zinc-900">
      <div className="container mx-auto px-6">
        <SectionHeading title="My Services" />
        <div className="service-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card relative">
              <div className="service-icon-wrapper">
                <div className="service-icon-border inline-block p-4 border-2 border-red-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="service-icon-svg h-8 w-8 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={service.iconPath}
                    />
                  </svg>
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-accent-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

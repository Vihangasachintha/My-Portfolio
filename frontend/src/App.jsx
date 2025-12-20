import { useEffect, useMemo, useState } from 'react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'journal', label: 'Journal' },
  { id: 'contact', label: 'Contact' },
];

const portfolioItems = [
  { title: 'Pythagorean Calculator', image: '/resources/pythogarus.jpg', className: '' },
  { title: 'ChatTranz', image: '/resources/chat4.png', className: 'row-span-2' },
  { title: 'Car Parking System', image: '/resources/carParking.png', className: '' },
  {
    title: 'Stationery',
    image: 'https://placehold.co/600x400/1a1a1a/FFFFFF?text=Project+4',
    className: '',
  },
  {
    title: 'Camera Gear',
    image: 'https://placehold.co/600x800/333333/FFFFFF?text=Project+5',
    className: 'row-span-2',
  },
  {
    title: 'Kitchen Interior',
    image: 'https://placehold.co/600x400/e5e5e5/000000?text=Project+6',
    className: '',
  },
  {
    title: 'Minimalist Knife',
    image: 'https://placehold.co/600x400/cccccc/000000?text=Project+7',
    className: '',
  },
];

const services = [
  {
    title: 'Back-end',
    iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'Web Design',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    title: 'User Experience',
    iconPath: 'M5 12h14M12 5l7 7-7 7',
  },
  {
    title: 'Web Development',
    iconPath: 'M12 6V4m0 16v-2m8-8h2M4 12H2m15.364 6.364l1.414 1.414M4.222 4.222l1.414 1.414m12.728 0l-1.414 1.414M5.636 18.364l-1.414 1.414M12 16a4 4 0 110-8 4 4 0 010 8z',
  },
  {
    title: 'Mobile Applications',
    iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  },
  {
    title: 'Web Hosting',
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
];

const skills = [
  { label: 'Javascript', percentage: 58.50 },
  { label: 'HTML', percentage: 20.56 },
  { label: 'Python', percentage: 14.25 },
  { label: 'CSS', percentage: 6.70 },
];

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Erica Miller',
    role: 'Product Designer @Twitter',
    avatar: 'https://placehold.co/100x100/e0e0e0/000000?text=Erica',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Ryan Mullins',
    role: 'Product Designer @Shopify',
    avatar: 'https://placehold.co/100x100/cccccc/000000?text=Ryan',
  },
];

const journalPosts = [
  {
    title: 'A Mounteering Guide For Beginners',
    meta: 'By Jeffrey • 5 mins read',
    image: 'https://placehold.co/600x400/555/FFF?text=Blog+1',
  },
  {
    title: 'A Mounteering Guide For Beginners',
    meta: 'By Jeffrey • 5 mins read',
    image: 'https://placehold.co/600x400/eee/333?text=Blog+2',
  },
  {
    title: 'A Mounteering Guide For Beginners',
    meta: 'By Jeffrey • 5 mins read',
    image: 'https://placehold.co/600x400/444/FFF?text=Blog+3',
  },
];

const clients = [
  {
    src: 'https://placehold.co/150x50/000000/FFFFFF?text=PUMA',
    alt: 'Puma logo',
  },
  {
    src: 'https://placehold.co/150x50/000000/FFFFFF?text=PayPal',
    alt: 'PayPal logo',
  },
  {
    src: 'https://placehold.co/150x50/000000/FFFFFF?text=Adobe',
    alt: 'Adobe logo',
  },
];

export default function App() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialCount = useMemo(() => testimonials.length, []);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formFeedback, setFormFeedback] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('main section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTestimonialIndex((previous) => (previous + 1) % testimonialCount);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [testimonialCount]);

  const handleNavClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const showPrevTestimonial = () => {
    setTestimonialIndex((previous) => (previous - 1 + testimonialCount) % testimonialCount);
  };

  const showNextTestimonial = () => {
    setTestimonialIndex((previous) => (previous + 1) % testimonialCount);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState((previous) => ({ ...previous, [name]: value }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormFeedback({ type: 'error', message: 'Name, email, and message are required.' });
      return;
    }

    setIsSubmitting(true);
    setFormFeedback(null);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setFormFeedback({ type: 'success', message: 'Thanks for reaching out! I will get back to you soon.' });
      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="leading-relaxed">
      <header
        id="header"
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isHeaderScrolled ? 'header-scrolled' : ''
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-white text-3xl font-bold">
              Vihanga Sachintha
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav-link text-white uppercase font-medium tracking-wider ${
                    activeSection === link.id ? 'active' : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen((previous) => !previous)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isMobileMenuOpen ? '' : 'hidden'} md:hidden bg-black bg-opacity-90`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block text-white text-center py-2"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <main>
        <section id="home" className="h-screen flex items-center justify-center MyPic">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-5xl font-bold tracking-wider mb-4">RMPVS Rajakaruna</h1>
            <p className="text-xl md:text-xl font-light">I'm Vihanga Sachintha Rajakaruna. A Fullstack</p>
            <p className="text-xl md:text-2xl font-light">Developer.</p>
          </div>
          <div className="scroll-indicator absolute bottom-10 text-white text-center">
            <div className="w-6 h-10 border-2 rounded-full mx-auto flex justify-center items-end p-1">
              <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
            </div>
            <span className="mt-2 block text-xs tracking-widest">SCROLL</span>
          </div>
        </section>

        <section id="portfolio" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-1">
              {portfolioItems.map((item) => (
                <div
                  key={item.title}
                  className={`portfolio-item relative overflow-hidden rounded-lg group ${item.className}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="clients" className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {clients.map((client) => (
                <img
                  key={client.alt}
                  src={client.src}
                  alt={client.alt}
                  className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-white font-bold">About Me</h2>
              <svg className="wavy-line mx-auto mt-2" viewBox="0 0 69.9 6.3">
                <path
                  d="M69.9 3.5c-11.2 0-13.1-3.3-23.1-3.3S35 3.5 25.1 3.5 13 0 2.9 0C1.3 0 0 1.3 0 2.9c0 .2 0 .4.1.6 1.8 1.1 3.9 1.5 5.8 1.5 11.2 0 13.1 3.3 23.1 3.3S40.7 5 50.6 5s13 3.3 23.1 3.3c1.6 0 3.2-.3 4.8-1 .1-.1.1-.2.1-.3 0-1.6-1.3-2.9-2.9-2.9-.2 0-.4 0-.6.1-1.8 1.1-3.9 1.5-5.8 1.5z"
                  transform="translate(0 -1.8) scale(1.2)"
                  fill="none"
                />
              </svg>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="md:w-1/2 relative">
                <img
                  src="https://placehold.co/600x750/000000/FFF?text=Portrait"
                  alt="Portrait"
                  className="rounded-lg shadow-2xl z-10 relative"
                />
                <div
                  className="absolute -bottom-4 -right-4 w-40 h-40 bg-repeat bg-center opacity-10"
                  style={{
                    backgroundImage:
                      "url('data:image/svg+xml;utf8,%3Csvg width%3D%2210%22 height%3D%2210%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx%3D%221%22 cy%3D%221%22 r%3D%221%22 fill%3D%22white%22/%3E%3C/svg%3E')",
                  }}
                />
              </div>
              <div className="md:w-1/2 text-lg">
                <h3 className="text-3xl text-white font-semibold mb-4">We can make it together</h3>
                <p className="mb-6">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts.
                </p>
                <p className="mb-8">
                  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
                <a
                  href="#"
                  className="inline-block border-2 border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                  DOWNLOAD MY CV
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 md:py-32 bg-zinc-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-white font-bold">My Services</h2>
              <svg className="wavy-line mx-auto mt-2" viewBox="0 0 69.9 6.3">
                <path
                  d="M69.9 3.5c-11.2 0-13.1-3.3-23.1-3.3S35 3.5 25.1 3.5 13 0 2.9 0C1.3 0 0 1.3 0 2.9c0 .2 0 .4.1.6 1.8 1.1 3.9 1.5 5.8 1.5 11.2 0 13.1 3.3 23.1 3.3S40.7 5 50.6 5s13 3.3 23.1 3.3c1.6 0 3.2-.3 4.8-1 .1-.1.1-.2.1-.3 0-1.6-1.3-2.9-2.9-2.9-.2 0-.4 0-.6.1-1.8 1.1-3.9 1.5-5.8 1.5z"
                  transform="translate(0 -1.8) scale(1.2)"
                  fill="none"
                />
              </svg>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service) => (
                <div key={service.title} className="text-center md:text-left">
                  <div className="inline-block p-4 border-2 border-red-500 rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-2xl text-white font-semibold mb-2">{service.title}</h3>
                  <p>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-white font-bold">My Skills</h2>
              <svg className="wavy-line mx-auto mt-2" viewBox="0 0 69.9 6.3">
                <path
                  d="M69.9 3.5c-11.2 0-13.1-3.3-23.1-3.3S35 3.5 25.1 3.5 13 0 2.9 0C1.3 0 0 1.3 0 2.9c0 .2 0 .4.1.6 1.8 1.1 3.9 1.5 5.8 1.5 11.2 0 13.1 3.3 23.1 3.3S40.7 5 50.6 5s13 3.3 23.1 3.3c1.6 0 3.2-.3 4.8-1 .1-.1.1-.2.1-.3 0-1.6-1.3-2.9-2.9-2.9-.2 0-.4 0-.6.1-1.8 1.1-3.9 1.5-5.8 1.5z"
                  transform="translate(0 -1.8) scale(1.2)"
                  fill="none"
                />
              </svg>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <p className="text-6xl font-bold text-red-500">
                    {skill.percentage}
                    <span className="text-4xl">%</span>
                  </p>
                  <p className="text-white uppercase tracking-widest mt-2">{skill.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 md:py-32 bg-zinc-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-white font-bold">My Happy Clients</h2>
              <svg className="wavy-line mx-auto mt-2" viewBox="0 0 69.9 6.3">
                <path
                  d="M69.9 3.5c-11.2 0-13.1-3.3-23.1-3.3S35 3.5 25.1 3.5 13 0 2.9 0C1.3 0 0 1.3 0 2.9c0 .2 0 .4.1.6 1.8 1.1 3.9 1.5 5.8 1.5 11.2 0 13.1 3.3 23.1 3.3S40.7 5 50.6 5s13 3.3 23.1 3.3c1.6 0 3.2-.3 4.8-1 .1-.1.1-.2.1-.3 0-1.6-1.3-2.9-2.9-2.9-.2 0-.4 0-.6.1-1.8 1.1-3.9 1.5-5.8 1.5z"
                  transform="translate(0 -1.8) scale(1.2)"
                  fill="none"
                />
              </svg>
            </div>
            <div className="relative max-w-4xl mx-auto text-center">
              <div id="testimonial-slider" className="overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.name}
                    className={`testimonial-slide ${index === testimonialIndex ? 'active' : ''}`}
                  >
                    <p className="text-2xl italic mb-8 relative">
                      <span className="absolute -top-4 left-0 text-6xl text-red-500 opacity-50">“</span>
                      {testimonial.quote}
                    </p>
                    <div className="border-t-2 border-red-500 w-24 mx-auto mb-8" />
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
                    />
                    <h4 className="text-white text-xl font-semibold">{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 text-white text-4xl"
                onClick={showPrevTestimonial}
                aria-label="Previous testimonial"
              >
                &lt;
              </button>
              <button
                type="button"
                className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 text-white text-4xl"
                onClick={showNextTestimonial}
                aria-label="Next testimonial"
              >
                &gt;
              </button>
            </div>
          </div>
        </section>

        <section id="journal" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-white font-bold">My Journal</h2>
              <svg className="wavy-line mx-auto mt-2" viewBox="0 0 69.9 6.3">
                <path
                  d="M69.9 3.5c-11.2 0-13.1-3.3-23.1-3.3S35 3.5 25.1 3.5 13 0 2.9 0C1.3 0 0 1.3 0 2.9c0 .2 0 .4.1.6 1.8 1.1 3.9 1.5 5.8 1.5 11.2 0 13.1 3.3 23.1 3.3S40.7 5 50.6 5s13 3.3 23.1 3.3c1.6 0 3.2-.3 4.8-1 .1-.1.1-.2.1-.3 0-1.6-1.3-2.9-2.9-2.9-.2 0-.4 0-.6.1-1.8 1.1-3.9 1.5-5.8 1.5z"
                  transform="translate(0 -1.8) scale(1.2)"
                  fill="none"
                />
              </svg>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {journalPosts.map((post) => (
                <div key={post.image} className="bg-zinc-900 rounded-lg overflow-hidden group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl text-white font-semibold mb-2">{post.title}</h3>
                    <p className="text-sm">{post.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-32 bg-zinc-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-white font-bold">Get In Touch</h2>
              <svg className="wavy-line mx-auto mt-2" viewBox="0 0 69.9 6.3">
                <path
                  d="M69.9 3.5c-11.2 0-13.1-3.3-23.1-3.3S35 3.5 25.1 3.5 13 0 2.9 0C1.3 0 0 1.3 0 2.9c0 .2 0 .4.1.6 1.8 1.1 3.9 1.5 5.8 1.5 11.2 0 13.1 3.3 23.1 3.3S40.7 5 50.6 5s13 3.3 23.1 3.3c1.6 0 3.2-.3 4.8-1 .1-.1.1-.2.1-.3 0-1.6-1.3-2.9-2.9-2.9-.2 0-.4 0-.6.1-1.8 1.1-3.9 1.5-5.8 1.5z"
                  transform="translate(0 -1.8) scale(1.2)"
                  fill="none"
                />
              </svg>
            </div>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="NAME"
                      className="form-input w-full"
                      value={formState.name}
                      onChange={handleFormChange}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="EMAIL"
                      className="form-input w-full"
                      value={formState.email}
                      onChange={handleFormChange}
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="WRITE YOUR MESSAGE..."
                    rows="5"
                    className="form-input w-full"
                    value={formState.message}
                    onChange={handleFormChange}
                  />
                  <button
                    type="submit"
                    className="inline-block border-2 border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'SENDING…' : 'SEND MESSAGE'}
                  </button>
                  {formFeedback && (
                    <p className={formFeedback.type === 'success' ? 'text-green-400' : 'text-red-400'}>
                      {formFeedback.message}
                    </p>
                  )}
                </form>
              </div>
              <div className="md:w-1/3 space-y-4">
                <div>
                  <p className="uppercase text-sm">EMAIL</p>
                  <a
                    href="mailto:sachinthavihangasns@gmail.com"
                    className="text-white hover:text-red-500 transition-colors"
                  >
                    sachinthavihangasns@gmail.com
                  </a>
                </div>
                <div>
                  <p className="uppercase text-sm">PHONE</p>
                  <a href="tel:+781766094" className="text-white hover:text-red-500 transition-colors">
                    +78 1766094
                  </a>
                </div>
                <div>
                  <p className="uppercase text-sm">ADDRESS</p>
                  <p className="text-white">Thunhitiyawa, Madulla, <br />Udupussallawa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-white text-3xl font-bold mb-6">RMP_VSR</h3>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-white hover:text-red-500 transition-colors">
              FACEBOOK
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors">
              TWITTER
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors">
              INSTAGRAM
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors">
              DRIBBBLE
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors">
              BEHANCE
            </a>
          </div>
          <p>© Copyright 2025 | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

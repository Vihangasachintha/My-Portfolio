export default function Header({
  navLinks,
  activeSection,
  isHeaderScrolled,
  isMobileMenuOpen,
  onToggleMenu,
  onNavClick,
}) {
  return (
    <header
      id="header"
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isHeaderScrolled ? "header-scrolled" : ""
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
                  activeSection === link.id ? "active" : ""
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
            onClick={onToggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${isMobileMenuOpen ? "" : "hidden"} md:hidden bg-black bg-opacity-90`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="block text-white text-center py-2"
            onClick={onNavClick}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

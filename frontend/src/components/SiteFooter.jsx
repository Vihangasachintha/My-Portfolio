export default function SiteFooter() {
  return (
    <footer className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-white text-2xl sm:text-3xl font-bold mb-6">RMP_VSR</h3>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8 text-sm sm:text-base">
          <a
            href="https://web.facebook.com/vsrajakaruna/"
            className="text-white hover:text-blue-500 transition-colors"
          >
            FACEBOOK
          </a>
          <a
            href="https://www.linkedin.com/in/vihanga-sachintha-rajakaruna"
            className="text-white hover:text-blue-500 transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://www.instagram.com/vsrajakaruna/"
            className="text-white hover:text-blue-500 transition-colors"
          >
            INSTAGRAM
          </a>
          <a href="https://wa.me/94781766094" className="text-white hover:text-blue-500 transition-colors">
            WHATSAPP
          </a>
          <a
            href="https://medium.com/@vihangasachintha"
            className="text-white hover:text-blue-500 transition-colors"
          >
            MEDIUM
          </a>
        </div>
        <p className="text-sm text-zinc-400">Copyright 2025 | All rights reserved</p>
      </div>
    </footer>
  );
}


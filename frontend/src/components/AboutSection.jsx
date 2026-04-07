import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading title="About Me" />
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="md:w-1/2 relative">
            <img
              src="/dist/resources/MyImg.jpeg"
              alt="Portrait"
              className="rounded-lg shadow-2xl z-10 h-[480px] w-[480px]"
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
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p className="mb-8">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
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
  );
}

import SectionHeading from "./SectionHeading";

export default function ContactSection({
  formState,
  formFeedback,
  isSubmitting,
  onChange,
  onSubmit,
}) {
  return (
    <section id="contact" className="py-20 md:py-32 bg-zinc-900">
      <div className="container mx-auto px-6">
        <SectionHeading title="Get In Touch" />
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  className="form-input w-full"
                  value={formState.name}
                  onChange={onChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  className="form-input w-full"
                  value={formState.email}
                  onChange={onChange}
                />
              </div>
              <textarea
                name="message"
                placeholder="WRITE YOUR MESSAGE..."
                rows="5"
                className="form-input w-full"
                value={formState.message}
                onChange={onChange}
              />
              <button
                type="submit"
                className="inline-block border-2 border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
              {formFeedback && (
                <p className={formFeedback.type === "success" ? "text-green-400" : "text-red-400"}>
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
                className="text-white hover:text-blue-500 transition-colors"
              >
                sachinthavihangasns@gmail.com
              </a>
            </div>
            <div>
              <p className="uppercase text-sm">PHONE</p>
              <a href="tel:+781766094" className="text-white hover:text-blue-500 transition-colors">
                +78 1766094
              </a>
            </div>
            <div>
              <p className="uppercase text-sm">ADDRESS</p>
              <p className="text-white">
                Thunhitiyawa, Madulla,
                <br />
                Udupussallawa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


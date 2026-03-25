import SectionHeading from "./SectionHeading";

export default function JournalSection({ posts }) {
  return (
    <section id="journal" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading title="My Blogs" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
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
  );
}

export default function SectionHeading({ title }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl text-white font-bold">{title}</h2>
      <svg className="wavy-line mx-auto mt-2" viewBox="0 0 69.9 6.3">
        <path
          d="M69.9 3.5c-11.2 0-13.1-3.3-23.1-3.3S35 3.5 25.1 3.5 13 0 2.9 0C1.3 0 0 1.3 0 2.9c0 .2 0 .4.1.6 1.8 1.1 3.9 1.5 5.8 1.5 11.2 0 13.1 3.3 23.1 3.3S40.7 5 50.6 5s13 3.3 23.1 3.3c1.6 0 3.2-.3 4.8-1 .1-.1.1-.2.1-.3 0-1.6-1.3-2.9-2.9-2.9-.2 0-.4 0-.6.1-1.8 1.1-3.9 1.5-5.8 1.5z"
          transform="translate(0 -1.8) scale(1.2)"
          fill="none"
        />
      </svg>
    </div>
  );
}

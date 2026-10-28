const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "mailto:jack@example.com" },
];

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 md:px-10 pt-4 md:pt-6 text-secondary font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
    {navLinks.map(({ label, href }) => (
      <a
        key={label}
        href={href}
        className="py-2 hover:opacity-70 transition-opacity duration-200"
      >
        {label}
      </a>
    ))}
  </nav>
);

const ContactButton = () => (
  <a
    href="mailto:jack@example.com"
    className="rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base bg-gradient-to-r from-[#18011F] via-[#B600A8] to-[#BE4C00] shadow-[0px_4px_4px_rgba(181,1,167,0.25),_4px_4px_12px_#7721B1_inset] border-2 border-white text-white font-medium uppercase tracking-widest"
  >
    Contact Me
  </a>
);

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col overflow-hidden relative">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center overflow-hidden">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 text-center">
          Hi, i&apos;m jack
        </h1>
      </div>
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <p className="font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          a 3d creator driven by crafting striking and unforgettable projects
        </p>
        <ContactButton />
      </div>
      {/* Add Magnet component here later */}
    </section>
  );
}

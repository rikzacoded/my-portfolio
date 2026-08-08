
import Projects from "./Projects";
import LinkedIn from "./assets/Linkedin.jpg";
import MainBg from "./assets/mainbg6.jpg";



const Home = () => {
  return (
    <div className="min-h-screen">

      {/* Banner (viewport height) */}
      <header className="h-screen relative flex items-center justify-center">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${MainBg})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0" />

        {/* Top-left headings */}
        <div className="absolute top-4 mt-3 left-4 sm:top-6 sm:left-8 z-30">
          <h1 className="font-netflix text-4xl sm:text-6xl md:text-6xl lg:text-6xl text-purple-900 font-bold">
            Rikza Afaf
          </h1>
        </div>

        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/rikzafaf/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
                     bg-cover rounded-full shadow-lg transition-transform transform hover:scale-105 hover:opacity-90"
          style={{ backgroundImage: `url(${LinkedIn})` }}
          aria-label="LinkedIn profile"
        />

        {/* Center phrase */}
        <div className="relative z-20 mt-32 sm:mt-40 md:mt-48 text-center px-4 max-w-4xl">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-purple-900 leading-relaxed">
           I'm a web developer focused on building clean, responsive, and user-friendly web experiences. I work primarily with React.js, Next.js, JavaScript, and Tailwind CSS, turning ideas and designs into functional interfaces that work smoothly across devices. I enjoy solving problems through code, exploring new technologies, and continuously improving my development skills.

          </h2>
        </div>
      </header>

      {/* Projects placed below the banner */}
      <main className="relative z-10">
        <Projects />
      </main>

    </div>
  );
};

export default Home;









const Project2 = () => {
  return (
    <div className="min-h-screen w-screen bg-purple-200 text-purple-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-12">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
        Netflix Clone Web Application
      </h1>

      {/* Quick Summary */}
      <section className="max-w-4xl text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Quick Summary</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">
          I developed a Netflix Clone web application to replicate the core functionality
          and interface of Netflix, focusing on modern frontend development practices.
          The project showcases responsive design, dynamic movie listings, and smooth
          user interactions. It integrates the OMDb API to fetch real-time movie data
          and uses React.js with Tailwind CSS for a visually appealing and highly
          interactive user experience.
        </p>
      </section>

      {/* Problem / Need */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Problem / Need</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-4">
          Streaming platforms like Netflix are admired for their sleek user interfaces,
          smooth navigation, and content-rich layouts. For frontend developers,
          replicating such a platform is a strong way to practice component-driven
          architecture, responsive design, and API integration.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">
          The goal was to create a realistic, responsive Netflix-like web application that:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base text-purple-700">
          <li>Displays real-time movie data from an external API.</li>
          <li>Implements multiple responsive carousels for different genres.</li>
          <li>Includes authentication and a gradient-based home layout.</li>
          <li>Ensures smooth UI transitions and consistent Netflix-style visuals.</li>
        </ul>
      </section>

      {/* Implementation / My Work */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Implementation / My Work</h2>

        {/* Frontend Architecture */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Frontend Architecture</h3>
        <ul className="list-disc list-inside mb-4 space-y-2 text-sm sm:text-base text-purple-700">
          <li>
            Built the frontend using <strong>React.js</strong> with a modular component-based structure.
          </li>
          <li>
            Utilized <strong>Tailwind CSS</strong> for fast and responsive UI styling.
          </li>
          <li>
            Created reusable components such as Navbar, FAQ Section (accordion bars), Carousel, and Footer for a cohesive and interactive user experience.
          </li>
        </ul>

        {/* API Integration */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">API Integration</h3>
        <ul className="list-disc list-inside mb-4 space-y-2 text-sm sm:text-base text-purple-700">
          <li>
            Integrated <strong>OMDb API</strong> to fetch and display movie data dynamically.
          </li>
          <li>
          Implemented asynchronous data fetching from the OMDb API to display categorized movie sections.
          </li>
       
        </ul>

        {/* UI & Responsiveness */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">UI & Responsiveness</h3>
        <ul className="list-disc list-inside mb-4 space-y-2 text-sm sm:text-base text-purple-700">
          <li>
            Designed a <strong>Netflix-inspired gradient background</strong> extending across the screen.
          </li>
          <li>
            Built a <strong>responsive Navbar</strong> adaptable across mobile, tablet, and desktop screens.
          </li>
          <li>
            Implemented <strong>multiple carousels</strong> that adjust movie cards dynamically based on screen width.
          </li>
        </ul>

        {/* Authentication */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Authentication</h3>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-purple-700">
          <li>
            Added standard <strong>Sign In</strong> and <strong>Forgot Password</strong> functionality.
          </li>
          <li>
            Backend built with <strong>Node.js</strong> and <strong>PostgreSQL</strong> for user management.
          </li>
          <li>
            Ensured secure credential handling and smooth connection between frontend and backend.
          </li>
        </ul>
      </section>

      {/* Outcome / Status */}
<section className="max-w-4xl text-left mb-8">
  <h2 className="text-xl sm:text-2xl font-semibold mb-4">Outcome / Status</h2>
  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-4">
    The Netflix Clone successfully demonstrates a dynamic, API-driven frontend
    built with React, Tailwind CSS, and the OMDb API. The application features
    smooth transitions, responsive layouts, and a design closely resembling
    Netflix’s original interface.
  </p>
  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-4">
    Key reusable components such as the <strong>Navbar</strong>, 
    <strong> Carousel</strong>, <strong>FAQ (Accordion)</strong>, and 
    <strong> Footer</strong> were developed to ensure modularity and a consistent
    user experience across the application.
  </p>
  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-4">
    The project strengthened my understanding of component-based architecture,
    responsive design, and API integration for real-world applications.
  </p>
  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-6">
    The deployment was hosted on <strong>Vercel</strong>, ensuring fast build
    times and seamless global accessibility.
  </p>
<p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">Here is the link: <br/> <a href = "https://netflix-hvon2sfcf-rikzprogs-projects.vercel.app/"/></p>
</section>


    
    </div>
  );
};

export default Project2;
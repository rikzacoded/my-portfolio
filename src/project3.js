
const Project3 = () => {
  return (
    <div className="min-h-screen w-screen bg-purple-200 text-purple-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-12">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
        Singstruments Web Application
      </h1>

      {/* Quick Summary */}
      <section className="max-w-4xl text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Quick Summary</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">
          Singstruments is a web platform built with <strong>Next.js</strong> and <strong>TypeScript</strong> 
          where singers and instrumentalists can apply for studio auditions and showcase their skills. 
          It focuses on a clean, music-inspired design with a rounded navbar, auto-changing image carousel, 
          and engaging background theme using <strong>Tailwind CSS</strong> for styling.
        </p>
      </section>

      {/* Problem / Need */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Problem / Need</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-4">
          Many talented performers lack an organized platform to apply for studio auditions or display their abilities. 
          Singstruments provides an online space where artists can connect with studios and promote their musical identity.
        </p>
      </section>

      {/* Implementation / My Work */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Implementation / My Work</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-purple-700">
          <li>Built with <strong>Next.js</strong> and <strong>TypeScript</strong> for better performance and scalability.</li>
          <li>Used <strong>Tailwind CSS</strong> for fast UI development and consistent design.</li>
          <li>Created a rounded, centered navbar with main sections like Home, Events, and Learn More.</li>
          <li>Added an auto-changing image carousel to enhance visual engagement.</li>
          <li>Used a music-themed background to match the platform’s artistic purpose.</li>
        </ul>
      </section>

      {/* Outcome / Status */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Outcome / Status</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-4">
          The project successfully represents a professional starting point for a music audition platform. 
          It provides a solid design foundation for future functionality where artists can submit applications and portfolios. 
          The design currently focuses on desktop view.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">
          Deployed using <strong>Vercel</strong> for easy access and reliable hosting.
        </p>
      </section>

      {/* Technical Details */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Technical Details</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-purple-700">
          <li>Framework: Next.js (with TypeScript)</li>
          <li>Styling: Tailwind CSS</li>
          <li>Main Components: Navbar, Image Carousel, Background Layout</li>
          <li>Deployment: Vercel</li>
          <li>Current Focus: Desktop version (as per requirement)</li>
        </ul>
      </section>
    </div>
  );
};

export default Project3;

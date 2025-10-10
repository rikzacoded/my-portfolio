const Project2 = () => {
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
          Singstruments is a music-focused web platform built with <strong>Next.js</strong> and <strong>TypeScript</strong>. 
          It was designed to create a digital presence for musicians, vocalists, and event organizers. 
          The project focuses on a clean homepage design that includes a center-rounded navbar, an auto-changing image carousel, 
          and a music-inspired background theme. <strong>Tailwind CSS</strong> was used for fast UI styling and component structuring.
        </p>
      </section>

      {/* Problem / Need */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Problem / Need</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-4">
          Many music enthusiasts and performers lack a unified online space to showcase their skills or connect with others. 
          The goal of Singstruments was to begin developing a web platform that visually represents a professional 
          music community while maintaining simplicity in layout and navigation.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base text-purple-700">
          <li>Create a visually appealing homepage tailored for a music-based platform.</li>
          <li>Design a central rounded navbar with navigation buttons like Home, Events, About Us, and Learn More.</li>
          <li>Include an image carousel that automatically transitions between photos.</li>
          <li>Apply a background image that enhances the overall visual tone.</li>
        </ul>
      </section>

      {/* Implementation / My Work */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Implementation / My Work</h2>

        {/* Frontend Architecture */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Frontend Architecture</h3>
        <ul className="list-disc list-inside mb-4 space-y-2 text-sm sm:text-base text-purple-700">
          <li>Developed using <strong>Next.js</strong> for server-side rendering and performance.</li>
          <li>Used <strong>TypeScript</strong> to ensure better type safety and cleaner code.</li>
          <li>Applied <strong>Tailwind CSS</strong> for consistent and efficient UI design.</li>
          <li>Organized the project into structured folders: <em>app, components, and lib</em>.</li>
        </ul>

        {/* UI Design */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">UI Design</h3>
        <ul className="list-disc list-inside mb-4 space-y-2 text-sm sm:text-base text-purple-700">
          <li>Created a <strong>center-rounded navbar</strong> with key sections (Home, Events, About Us, Learn More).</li>
          <li>Added a <strong>one-at-a-time auto-changing image carousel</strong> placed below the navbar.</li>
          <li>Used a <strong>music-themed background image</strong> covering the entire page for visual appeal.</li>
          <li>The layout focuses on desktop view as responsiveness was not the required.</li>
        </ul>

        {/* Styling & Components */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Styling & Components</h3>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-purple-700">
          <li>Used soft purple tones for a creative and artistic atmosphere.</li>
          <li>Included smooth hover transitions for navigation buttons.</li>
          <li>Maintained a balanced and centered layout for visual harmony.</li>
        </ul>
      </section>

      {/* Outcome / Status */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Outcome / Status</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-4">
          The Singstruments project successfully delivers a strong visual identity and structure for a future music networking platform. 
          It marks the initial phase of development, emphasizing design, structure, and brand tone. 
          Future improvements include full responsiveness and extended feature integration for users and artists.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">
          The project was deployed using <strong>Vercel</strong> for easy accessibility and smooth performance.
        </p>
      </section>

      {/* Technical Details */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Technical Details</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-purple-700">
          <li>Framework: Next.js (with TypeScript)</li>
          <li>Styling: Tailwind CSS</li>
          <li>Components: Navbar, Carousel, Background Layout</li>
          <li>Deployment: Vercel</li>
          <li>Current Focus: Desktop version (responsiveness was not required)</li>
        </ul>
      </section>

    </div>
  );
};

export default Project2;

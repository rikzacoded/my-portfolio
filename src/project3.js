const Project3 = () => {
  return (
    <div className="min-h-screen w-screen bg-purple-200 text-purple-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-12">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
        Personal Portfolio Website
      </h1>

      {/* Quick Summary */}
      <section className="max-w-4xl text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Quick Summary</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">
          I created a responsive and visually engaging personal portfolio website to
          showcase my projects, skills, and web development expertise. Built using
          <strong> React.js </strong> and <strong> Tailwind CSS</strong>, the portfolio
          focuses on clean design, smooth scrolling, and an intuitive user experience.
          The website serves as a central hub to display my professional journey, project
          highlights, and contact information — all deployed seamlessly through
          <strong> Vercel</strong>.
        </p>
      </section>

      {/* Problem / Need */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Problem / Need</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-4">
          In the modern web industry, a personal portfolio acts as a digital resume.
          Many developers rely on static resumes, but a dynamic web portfolio provides
          a more interactive way to present projects, technical skills, and creativity.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">
          The goal was to design a clean and responsive interface that:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base text-purple-700">
          <li>Highlights featured projects with detailed visuals and descriptions.</li>
          <li>Reflects personal branding through consistent color themes and typography.</li>
          <li>Ensures seamless navigation across devices (desktop, tablet, mobile).</li>
          <li>Delivers a professional yet approachable design aesthetic.</li>
        </ul>
      </section>

      {/* Implementation / My Work */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Implementation / My Work</h2>

        {/* Frontend Design */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Frontend Design</h3>
        <ul className="list-disc list-inside mb-4 space-y-2 text-sm sm:text-base text-purple-700">
          <li>
            Developed using <strong>React.js</strong> to maintain modularity and reusable components.
          </li>
          <li>
            Styled entirely with <strong>Tailwind CSS</strong> for rapid design and responsiveness.
          </li>
          <li>
            Created core sections such as <em>Hero Section, Projects Showcase, About Me,</em> and <em>Contact</em>.
          </li>
          <li>
            Focused on clean layouts, ample spacing, and a cohesive color scheme.
          </li>
        </ul>

        {/* Responsiveness & UI */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Responsiveness & UI</h3>
        <ul className="list-disc list-inside mb-4 space-y-2 text-sm sm:text-base text-purple-700">
          <li>Used Tailwind’s responsive classes to ensure smooth scaling on all devices.</li>
          <li>Implemented a mobile-friendly navigation bar and flexible grid layout.</li>
          <li>Ensured that each project card and section adjusts gracefully to screen size.</li>
          <li>Focused on accessibility and visual clarity throughout the interface.</li>
        </ul>

        {/* Animations & Interactivity */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Animations & Interactivity</h3>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-purple-700">
          <li>
            Integrated smooth scrolling and hover animations for interactive engagement.
          </li>
          <li>
            Used transitions to highlight project previews and navigation elements.
          </li>
          <li>
            Added subtle motion to create a dynamic yet professional look and feel.
          </li>
        </ul>
      </section>

      {/* Outcome / Status */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Outcome / Status</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-4">
          The portfolio successfully represents my personal brand and technical abilities
          in a clean, accessible, and responsive web experience. The design remains consistent
          across screen sizes while maintaining fast loading speeds and smooth transitions.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">
          Through this project, I strengthened my understanding of React component design,
          responsive layout systems, and Tailwind’s utility-first approach. The project
          continues to evolve as new projects are added.
        </p>
      </section>

      {/* Technical Details */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Technical Details</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-purple-700">
          <li>Frontend: React.js with Tailwind CSS</li>
          <li>Animations: CSS transitions and Tailwind motion utilities</li>
          <li>Deployment: Vercel for hosting and automatic builds</li>
          <li>UI Features: Smooth navigation, project cards, responsive layout</li>
          <li>Focus Areas: Personal branding, visual hierarchy, accessibility</li>
        </ul>
      </section>

      {/* Media */}
      {/* <section className="max-w-5xl text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Media</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 h-48 flex items-center justify-center rounded-lg text-center p-2">
            Homepage featuring hero section and project highlights.
          </div>
          <div className="bg-gray-800 h-48 flex items-center justify-center rounded-lg text-center p-2">
            Project showcase section with hover animations.
          </div>
          <div className="bg-gray-800 h-48 flex items-center justify-center rounded-lg text-center p-2">
            Responsive mobile layout view with navigation menu.
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Project3;

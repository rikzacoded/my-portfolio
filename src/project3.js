
const Project3 = () => {
  return (
    <div className="min-h-screen w-screen bg-purple-200 text-purple-900 py-12 flex justify-center">

      {/* Centered container for consistent width */}
      <div className="w-full max-w-4xl px-4 flex flex-col">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          TvaaS Web Application
        </h1>

        {/* Quick Summary */}
        <section className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Quick Summary
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">
            During my internship at <strong>NAYATEL</strong>, I contributed to the
            development of the <strong>TvaaS (TV as a Service)</strong> web
            application by building multiple production-ready frontend modules.
            The project was developed using <strong>Next.js</strong>,
            <strong> TypeScript</strong>, <strong>Tailwind CSS</strong>,
            <strong> shadcn/ui</strong>, and <strong>RTK Query</strong>,
            focusing on responsive user interfaces, reusable components, and
            seamless API integration.
          </p>
        </section>

        {/* Problem / Need */}
        <section className="text-left mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Problem / Need
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-4">
            The TvaaS platform required a modern administrative interface for
            managing television content, Video-on-Demand (VOD) services,
            billing operations, and movie submissions. The application needed
            reusable UI components, responsive layouts, and efficient
            communication with backend APIs to streamline internal workflows.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">
            My responsibility was to develop production-ready frontend modules
            that integrated seamlessly into the existing platform while
            maintaining clean code, responsiveness, and a consistent user
            experience.
          </p>
        </section>

        {/* Implementation / My Work */}
        <section className="text-left mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Implementation / My Work
          </h2>

          <ul className="list-disc list-inside mb-4 space-y-2 text-sm sm:text-base text-purple-700">
            <li>
              Developed a responsive <strong>Movie Submission Form</strong>
              using Next.js, TypeScript, and shadcn/ui for submitting movie
              information.
            </li>

            <li>
              Built a <strong>Billing Header</strong> with dual search
              functionality to simplify billing record lookup and navigation.
            </li>

            <li>
              Implemented a <strong>VOD Movie Filter Form</strong> that enabled
              efficient searching and filtering of Video-on-Demand content.
            </li>

            <li>
              Developed a <strong>Live Movie Filter Form</strong> for browsing
              and filtering live television content.
            </li>

            <li>
              Designed and implemented a reusable
              <strong> Sidebar Navigation</strong> for smooth navigation between
              VOD and Live TV modules.
            </li>

            <li>
              Built a <strong>VOD Updates Panel</strong> integrated with
              <strong> RTK Query</strong> for efficient API requests, caching,
              and real-time state updates.
            </li>

            <li>
              Collaborated with senior developers during Agile development,
              following company coding standards and Git-based version control.
            </li>
          </ul>
        </section>

        {/* Outcome / Status */}
        <section className="text-left mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Outcome / Status
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-4">
            The completed modules became part of NAYATEL's internal TvaaS
            platform, providing responsive and reusable interfaces for managing
            television and Video-on-Demand services. The code and images associated with this project are confidential and cannot be shared in accordance with NAYATEL's company policy.

          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-4">
            This project strengthened my practical experience in building
            production-level frontend applications, developing reusable React
            components, integrating APIs with RTK Query, and collaborating
            within a professional software development team.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">
            Since this project was developed as part of my internship at
            <strong> NAYATEL</strong>, the source code and live deployment are
            proprietary and cannot be shared publicly.
          </p>
        </section>

        {/* Technical Details */}
        <section className="text-left mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Technical Details
          </h2>

          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-purple-700">
            <li>Framework: Next.js</li>
            <li>Language: TypeScript</li>
            <li>Styling: Tailwind CSS</li>
            <li>UI Library: shadcn/ui</li>
            <li>State Management: Redux Toolkit & RTK Query</li>
            <li>Version Control: Git & GitHub</li>
            <li>Development Environment: Production project at NAYATEL</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Project3;
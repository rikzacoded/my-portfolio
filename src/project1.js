   import React, { useState } from "react";
import home1 from "./assets/home1.png";
import home2 from "./assets/home2.png";
import home3 from "./assets/home3.png";
import home4 from "./assets/home4.png";

import signin1 from "./assets/signin1.png";
import signin2 from "./assets/signin2.png";
import signin3 from "./assets/signin3.png";
import signin4 from "./assets/signin4.png";
import signin5 from "./assets/signin5.png";
import signin6 from "./assets/signin6.png";
import signin7 from "./assets/signin7.png";
import signin8 from "./assets/signin8.png";

import mob_home5 from "./assets/mob_home5.jpeg";
import mob_home6 from "./assets/mob_home6.jpeg";
import mob_home7 from "./assets/mob_home7.jpeg";

import oon1 from "./assets/mob_oon1.jpeg";
import oon2 from "./assets/mob_oon2.jpeg";
import oon3 from "./assets/mob_oon3.jpeg";

const Project1 = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="min-h-screen w-screen bg-purple-200 text-purple-900 py-12 flex justify-center">

      {/* Centered container for consistent width */}
      <div className="w-full max-w-4xl px-4 flex flex-col">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          Netflix Clone Web Application
        </h1>

        {/* Quick Summary */}
        <section className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Quick Summary</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">
            I developed a Netflix Clone web application to replicate the core functionality
            and interface of Netflix, focusing on modern frontend development practices.
            The project showcases responsive design, dynamic movie listings, and smooth
            user interactions. It integrates the OMDb API to fetch real-time movie data
            and uses React.js with Tailwind CSS and framer motion for a visually appealing and highly
            interactive user experience.
          </p>
        </section>

        {/* Problem / Need */}
        <section className="text-left mb-8">
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
        <section className="text-left mb-8">
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
             Implemented <strong>Sign In</strong> and <strong>Forgot Password</strong> user interfaces.
            </li>
            <li>
             Developed <strong>a Node.js</strong> and <strong>PostgreSQL</strong> backend to support <strong>authentication during</strong>  development.
            </li>
            <li>
              The current public deployment showcases the frontend experience, while the backend is not deployed.
            </li>
          </ul>
        </section>

        {/* Outcome / Status */}
        <section className="text-left mb-8">
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
            The frontend is deployed on <strong>Vercel</strong> to demonstrate the user interface and responsive design. The authentication backend was developed separately and is not included in the current public deployment.
          </p>
         <div className="text-sm sm:text-base md:text-lg text-purple-700">
  <p>Explore the project:</p>

  <div className=" justify-center flex flex-wrap gap-4 mt-6">
    <a
      href="https://netflix-9zm6.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-lg bg-purple-700 px-6 py-3 text-white font-semibold transition hover:bg-purple-500"
    >
      Visit Netflix Clone
    </a>

    <button
      onClick={() => setShowGallery(true)}
      className="inline-flex items-center justify-center rounded-lg bg-purple-700 px-6 py-3 text-white font-semibold transition hover:bg-purple-500"
    >
      View Screenshots
    </button>
  </div>
</div>
        </section>

      </div>
      {showGallery && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
    <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-xl bg-white p-8">

      {/* Close Button */}
      <button
        onClick={() => setShowGallery(false)}
        className="absolute right-6 top-6 text-3xl font-bold text-gray-700 transition hover:text-red-600"
      >
        ×
      </button>

      <h2 className="mb-8 text-center text-3xl font-bold text-purple-900">
        Netflix Clone Screenshots
      </h2>

      {/* Desktop */}
      <h3 className="mb-4 text-2xl font-semibold text-purple-800">
        Desktop View
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={home1} alt="Home 1" className="rounded-lg shadow-lg" />
        <img src={home2} alt="Home 2" className="rounded-lg shadow-lg" />
        <img src={home3} alt="Home 3" className="rounded-lg shadow-lg" />
        <img src={home4} alt="Home 4" className="rounded-lg shadow-lg" />

        <img src={signin1} alt="Signin 1" className="rounded-lg shadow-lg" />
        <img src={signin2} alt="Signin 2" className="rounded-lg shadow-lg" />
        <img src={signin3} alt="Signin 3" className="rounded-lg shadow-lg" />
        <img src={signin4} alt="Signin 4" className="rounded-lg shadow-lg" />
        <img src={signin5} alt="Signin 5" className="rounded-lg shadow-lg" />
        <img src={signin6} alt="Signin 6" className="rounded-lg shadow-lg" />
        <img src={signin7} alt="Signin 7" className="rounded-lg shadow-lg" />
        <img src={signin8} alt="Signin 8" className="rounded-lg shadow-lg" />
      </div>

      {/* Mobile */}
      <h3 className="mt-10 mb-4 text-2xl font-semibold text-purple-800">
        Mobile View
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <img src={mob_home5} alt="Mobile Home 1" className="rounded-lg shadow-lg" />
        <img src={mob_home6} alt="Mobile Home 2" className="rounded-lg shadow-lg" />
        <img src={mob_home7} alt="Mobile Home 3" className="rounded-lg shadow-lg" />

        <img src={oon1} alt="Mobile Other 1" className="rounded-lg shadow-lg" />
        <img src={oon2} alt="Mobile Other 2" className="rounded-lg shadow-lg" />
        <img src={oon3} alt="Mobile Other 3" className="rounded-lg shadow-lg" />
      </div>

    </div>
  </div>
)}
    </div>
    
  );
};

export default Project1;

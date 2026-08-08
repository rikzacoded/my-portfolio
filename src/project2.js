import React, { useState } from "react";

import sing1 from "./assets/sing0.png";
import sing2 from "./assets/sing_home1.png";
import sing3 from "./assets/sing_home2.png";
import sing4 from "./assets/vocal_form.png";
import sing5 from "./assets/instrument_form.png";

import mobile1 from "./assets/sing_home_mob.jpeg";
import mobile2 from "./assets/sing_home_mob1.jpeg";
import mobile3 from "./assets/mob_vocal_form.jpeg";
import mobile4 from "./assets/mob_instru_form.jpeg";


const Project2 = () => {
   const [showGallery, setShowGallery] = useState(false);
  return (
    <div className="min-h-screen w-screen bg-purple-200 text-purple-900 py-12 flex justify-center">
      
      {/* Centered container for consistent width */}
      <div className="w-full max-w-4xl px-4 flex flex-col">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          Singstruments Web Application
        </h1>

        {/* Quick Summary */}
        <section className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Quick Summary</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">
            Singstruments is a web platform built with <strong>Next.js</strong> and <strong>TypeScript</strong> 
             <br/>where singers and instrumentalists can apply for studio auditions and showcase their skills. 
            It focuses on a clean, music-inspired design with a rounded navbar, auto-changing image carousel, 
            and engaging background theme using <strong>Tailwind CSS</strong> for styling. This web platform is entirely focused on frontend and on has a limited scope.
          </p>
        </section>

        {/* Problem / Need */}
        <section className="text-left mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Problem / Need</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700 mb-4">
            Many talented performers lack an organized platform to apply for studio auditions or display their abilities. 
            Singstruments provides an online space where artists can connect with studios and promote their musical identity.
          </p>
        </section>

        {/* Implementation / My Work */}
        <section className="text-left mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Implementation / My Work</h2>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm sm:text-base text-purple-700">
            <li>Built with <strong>Next.js</strong> and <strong>TypeScript</strong> for better performance and scalability.</li>
            <li>Used <strong>Tailwind CSS</strong> for fast UI development and consistent design.</li>
            <li>Created a rounded, centered navbar with main sections like Home, Events, and Learn More.</li>
            <li>Added an auto-changing image carousel to enhance visual engagement.</li>
            <li>Used a music-themed background to match the platform’s artistic purpose.</li>
          </ul>
        </section>

        {/* Outcome / Status */}
    <div className="text-sm sm:text-base md:text-lg text-purple-700">
  <p>
    Deployed using <strong>Vercel</strong> for easy access and reliable hosting.
  </p>

  <div className="justify-center flex flex-wrap gap-4 mt-6">
    <a
      href="https://singstruments-weld.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-lg bg-purple-700 px-6 py-3 text-white font-semibold transition hover:bg-purple-500"
    >
      Visit Singstruments
    </a>

    <button
      onClick={() => setShowGallery(true)}
      className="inline-flex items-center justify-center rounded-lg bg-purple-700 px-6 py-3 text-white font-semibold transition hover:bg-purple-500"
    >
      View Screenshots
    </button>
  </div>
</div>

        {/* Technical Details */}
        <section className="text-left mb-8">
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
      {showGallery && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
    <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-xl bg-white p-8">

      <button
        onClick={() => setShowGallery(false)}
        className="absolute right-6 top-6 text-3xl font-bold text-gray-700 hover:text-red-600"
      >
        ×
      </button>

      <h2 className="mb-8 text-center text-3xl font-bold text-purple-900">
        Singstruments Screenshots
      </h2>

      <h3 className="mb-4 text-2xl font-semibold text-purple-800">
        Desktop View
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={sing1} alt="Desktop 1" className="rounded-lg shadow-lg" />
        <img src={sing2} alt="Desktop 2" className="rounded-lg shadow-lg" />
        <img src={sing3} alt="Desktop 3" className="rounded-lg shadow-lg" />
        <img src={sing4} alt="Desktop 4" className="rounded-lg shadow-lg" />
        <img src={sing5} alt="Desktop 5" className="rounded-lg shadow-lg" />
      </div>

      <h3 className="mt-10 mb-4 text-2xl font-semibold text-purple-800">
        Mobile View
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <img src={mobile1} alt="Mobile 1" className="rounded-lg shadow-lg" />
        <img src={mobile2} alt="Mobile 2" className="rounded-lg shadow-lg" />
         <img src={mobile3} alt="Mobile 3" className="rounded-lg shadow-lg" />
        <img src={mobile4} alt="Mobile 4" className="rounded-lg shadow-lg" />
      </div>
      

    </div>
  </div>
)}
    </div>
  );
};

export default Project2;

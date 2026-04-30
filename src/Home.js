
// import Projects from "./Projects";
// import MainBg from "./assets/mainbg6.jpg";
// // import LinkedIn from "./assets/Linkedin.jpg";

// const Home = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Banner (viewport height) */}
//       <header className="h-screen relative flex items-center justify-center">
//         {/* Background */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${MainBg})`}}
//         />
//         {/* Overlay */}
//         {/* <div className="absolute inset-0 bg-black/40" /> */}
//          <div className="absolute inset-0 " />

//         {/* Top-left headings */}
//         <div className="absolute top-4 mt-3 left-4 sm:top-6 sm:left-8 z-30">
//           <h1 className="font-netflix text-4xl sm:text-6xl md:text-6xl lg:text-6xl text-purple-900 font-bold">
//             Ethina  Florence
//           </h1>
          
//         </div>

//         {/* Top-right LinkedIn */}
//          <a
//           href="https://www.linkedin.com/in/abcdabcd/" // ← replace with real profile
//           target="_blank"
//           rel="noopener noreferrer"
//           className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
//                      bg-cover rounded-full shadow-lg transition-transform transform hover:scale-105 hover:opacity-90"
//           style={{ backgroundImage: `url(${LinkedIn})` }}
//           aria-label="LinkedIn profile"
//         /> 

//         {/* Center phrase */}
//         <div className="relative z-20 mt-32 sm:mt-40 md:mt-48 text-center px-4 max-w-4xl">
//           <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-purple-900 leading-relaxed">
//         I'm a web developer with growing experience in frontend development, passionate about creating clean, responsive, and user-friendly web interfaces. I’ve contributed to multiple projects that emphasize smooth functionality and engaging design across different devices. My focus lies in writing efficient code and bringing ideas to life using modern technologies like React.js, Tailwind CSS, and JavaScript. I enjoy learning new tools, exploring creative design approaches, and continuously improving my development skills to build impactful web experiences.
//           </h2>
//         </div>
//       </header>

//       {/* Projects placed below the banner */}
//       <main className="relative z-10">
//         <Projects />
//       </main>
//     </div>
//   );
// };

// export default Home;




















// import  { useState } from "react";
// import Toast from "./Toast"; // Toast component
// import Projects from "./Projects";
//  import LinkedIn from "./assets/Linkedin.jpg";
// import MainBg from "./assets/mainbg6.jpg";
// // import LinkedIn from "./assets/Linkedin.jpg";  // ← your original comment

// const Home = () => {
//   const [showToast, setShowToast] = useState(false);

//   const handleLinkedInClick = () => {
//     setShowToast(true);

//     // Hide toast after 3 seconds
//     setTimeout(() => {
//       setShowToast(false);
//     }, 3000);
//   };

//   return (
//     <div className="min-h-screen">

//       {/* Toast appears globally */}
//       {showToast && (
//         <Toast message="This is a sample portfolio. LinkedIn profile can be shared upon request." />
//       )}

//       {/* Banner (viewport height) */}
//       <header className="h-screen relative flex items-center justify-center">

//         {/* Background */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${MainBg})` }}
//         />

//         {/* Overlay */}
//         {/* <div className="absolute inset-0 bg-black/40" /> */}
//         <div className="absolute inset-0" />

//         {/* Top-left headings */}
//         <div className="absolute top-4 mt-3 left-4 sm:top-6 sm:left-8 z-30">
//           <h1 className="font-netflix text-4xl sm:text-6xl md:text-6xl lg:text-6xl text-purple-900 font-bold">
//             Rikza Afaf
//           </h1>
//         </div>

//         {/* Top-right LinkedIn */}
//         {/* 
//         <a
//           href="https://www.linkedin.com/in/abcdabcd/" // ← replace with real profile
//           target="_blank"
//           rel="noopener noreferrer"
//           className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
//                      bg-cover rounded-full shadow-lg transition-transform transform hover:scale-105 hover:opacity-90"
//           style={{ backgroundImage: `url(${LinkedIn})` }}
//           aria-label="LinkedIn profile"
//         /> 
//         */}

//         {/* NEW Toast-trigger LinkedIn Button */}
//         <button
//           onClick={handleLinkedInClick}
//           className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-cover
//                      rounded-full shadow-lg transition-transform transform hover:scale-105 hover:opacity-90 bg-purple-600"
//                      style={{ backgroundImage: `url(${LinkedIn})` }}
//           aria-label="LinkedIn profile"
//         >
//           {/* You can place an icon or text here if you want */}
//           {/* <span className="text-white font-semibold text-xs sm:text-sm">
//             IN
//           </span> */}
//         </button>

//         {/* Center phrase */}
//         <div className="relative z-20 mt-32 sm:mt-40 md:mt-48 text-center px-4 max-w-4xl">
//           <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-purple-900 leading-relaxed">
//             I'm a web developer with growing experience in frontend development,
//             passionate about creating clean, responsive, and user-friendly web interfaces. 
//             I’ve contributed to multiple projects that emphasize smooth functionality and engaging 
//             design across different devices. My focus lies in writing efficient code and bringing 
//             ideas to life using modern technologies like React.js, Tailwind CSS, and JavaScript. 
//             I enjoy learning new tools, exploring creative design approaches, and continuously 
//             improving my development skills to build impactful web experiences.
//           </h2>
//         </div>
//       </header>

//       {/* Projects placed below the banner */}
//       <main className="relative z-10">
//         <Projects />
//       </main>

//     </div>
//   );
// };

// export default Home;











import { useState } from "react";
import Toast from "./Toast"; // Toast component
import Projects from "./Projects";
import LinkedIn from "./assets/Linkedin.jpg";
import MainBg from "./assets/mainbg6.jpg";

const Home = () => {
  const [showToast, setShowToast] = useState(false);

  const handleLinkedInClick = () => {
    setShowToast(true);

    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">

      {/* Toast appears globally */}
      {showToast && (
        <Toast message="This is a sample portfolio. LinkedIn profile can be shared upon request." />
      )}

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

        {/* LinkedIn (NOW ENABLED LINK) */}
        <a
          href="https://www.linkedin.com/in/rikzafaf/" // ← replace with real profile
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
            I'm a web developer with growing experience in frontend development,
            passionate about creating clean, responsive, and user-friendly web interfaces. 
            I’ve contributed to multiple projects that emphasize smooth functionality and engaging 
            design across different devices. My focus lies in writing efficient code and bringing 
            ideas to life using modern technologies like React.js, Tailwind CSS, and JavaScript. 
            I enjoy learning new tools, exploring creative design approaches, and continuously 
            improving my development skills to build impactful web experiences.
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
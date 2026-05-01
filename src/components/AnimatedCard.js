// import { useRef } from "react";

// const AnimatedCard = () => {
//   const cardRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const card = cardRef.current;
//     const rect = card.getBoundingClientRect();

//     const x = e.clientX - rect.left; // mouse X inside card
//     const y = e.clientY - rect.top;  // mouse Y inside card

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateX = ((y - centerY) / centerY) * -5; // vertical tilt
//     const rotateY = ((x - centerX) / centerX) * 5;  // horizontal tilt

//     card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
//   };

//   const handleMouseLeave = () => {
//     const card = cardRef.current;
//     card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
//   };

//   return (
//     <div className="flex justify-center items-center min-h-[300px]">
//       <div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className="w-[500px] h-[220px] bg-purple-600 text-white rounded-3xl shadow-xl p-6 transition-transform duration-200 ease-out"
//         style={{ perspective: "1000px" }}
//       >
//         <h2 className="text-xl font-bold mb-2">About Me</h2>
//         <p className="text-sm leading-relaxed">
//           I am a web developer passionate about building clean, responsive, and
//           user-friendly interfaces. I enjoy working with modern technologies
//           like React.js and Tailwind CSS to create engaging user experiences.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AnimatedCard;





// import { useRef } from "react";

// const AnimatedCard = () => {
//   const cardRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const card = cardRef.current;
//     const rect = card.getBoundingClientRect();

//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateX = ((y - centerY) / centerY) * -5;
//     const rotateY = ((x - centerX) / centerX) * 5;

//     card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
//   };

//   const handleMouseLeave = () => {
//     cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
//   };

//   return (
//     <div className="flex justify-center items-center py-16">
//       <div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className="w-[520px] h-[240px] text-white p-6 shadow-2xl transition-transform duration-200 ease-out"
//         style={{
//           background: "linear-gradient(135deg, #7e22ce, #9333ea)",
//           borderRadius: "70% 30% 60% 40% / 40% 60% 50% 50%",
//         }}
//       >
//         <h2 className="text-xl font-bold mb-2">About Me</h2>
//         <p className="text-sm leading-relaxed">
//           I am a web developer passionate about building clean, responsive, and
//           user-friendly interfaces. I enjoy creating visually engaging and
//           interactive web experiences using modern technologies.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AnimatedCard;





// import { useRef } from "react";

// const AnimatedCard = () => {
//   const cardRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const card = cardRef.current;
//     const rect = card.getBoundingClientRect();

//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const moveX = (x - centerX) / 20; // horizontal movement
//     const moveY = (y - centerY) / 20; // vertical movement

//     const rotateX = ((y - centerY) / centerY) * -5;
//     const rotateY = ((x - centerX) / centerX) * 5;

//     card.style.transform = `
//       translate(${moveX}px, ${moveY}px)
//       rotateX(${rotateX}deg)
//       rotateY(${rotateY}deg)
//       scale(1.03)
//     `;
//   };

//   const handleMouseLeave = () => {
//     cardRef.current.style.transform =
//       "translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)";
//   };

//   return (
//     <div className="flex justify-center items-center py-16">
//       <div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className="w-[520px] h-[240px] text-white p-6 shadow-2xl transition-transform duration-200 ease-out"
//         style={{
//           background: "linear-gradient(135deg, #7e22ce, #9333ea)",
//           borderRadius: "60% 40% 55% 45% / 40% 60% 40% 60%",
//         }}
//       >
//         <h2 className="text-xl font-bold mb-2">About Me</h2>
//         <p className="text-sm leading-relaxed">
//             I'm a web developer with growing experience in frontend development,
//             passionate about creating clean, responsive, and user-friendly web interfaces. 
//             I’ve contributed to multiple projects that emphasize smooth functionality and engaging 
//             design across different devices. My focus lies in writing efficient code and bringing 
//             ideas to life using modern technologies like React.js, Tailwind CSS, and JavaScript. 
//             I enjoy learning new tools, exploring creative design approaches, and continuously 
//             improving my development skills to build impactful web experiences.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AnimatedCard;


// import { useRef } from "react";

// const AnimatedCard = () => {
//   const cardRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const card = cardRef.current;
//     const rect = card.getBoundingClientRect();

//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const moveX = (x - centerX) / 20;
//     const moveY = (y - centerY) / 20;

//     const rotateX = ((y - centerY) / centerY) * -5;
//     const rotateY = ((x - centerX) / centerX) * 5;

//     card.style.transform = `
//       translate(${moveX}px, ${moveY}px)
//       rotateX(${rotateX}deg)
//       rotateY(${rotateY}deg)
//       scale(1.03)
//     `;
//   };

//   const handleMouseLeave = () => {
//     cardRef.current.style.transform =
//       "translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)";
//   };

//   return (
//     <div className="flex justify-center items-center mt-24 py-16">
//       <div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className="w-[750px] h-[280px] relative text-white shadow-2xl transition-transform duration-200 ease-out overflow-hidden"
//         style={{
//           background: "linear-gradient(135deg, #180627, #581b91)",
//           borderRadius: "30px", // base smoothness
//         }}
//       >
//         {/* 🔥 Top Wave */}
//         <svg
//           viewBox="0 0 500 50"
//           className="absolute top-0 left-0 w-full"
//         >
//           <path
//             d="M0,30 C150,80 350,0 500,30 L500,0 L0,0 Z"
//             fill="#522a77"
//           />
//         </svg>

//         {/* 🔥 Bottom Wave */}
//         <svg
//           viewBox="0 0 500 50"
//           className="absolute bottom-0 left-0 w-full"
//         >
//           <path
//             d="M0,20 C150,-20 350,80 500,20 L500,50 L0,50 Z"
//             fill="#522a77"
//           />
//         </svg>

//         {/* Content */}
//         <div className="relative z-10 p-6 mt-6">
//           <h2 className="text-xl font-bold mb-2 text-center">About Me</h2>
//           <p className="text-sm leading-relaxed">
//             I'm a web developer with growing experience in frontend development,
//              passionate about creating clean, responsive, and user-friendly web interfaces. 
//              I’ve contributed to multiple projects that emphasize smooth functionality and engaging 
//              design across different devices. My focus lies in writing efficient code and bringing 
//              ideas to life using modern technologies like React.js, Tailwind CSS, and JavaScript. 
//              I enjoy learning new tools, exploring creative design approaches, and continuously 
//              improving my development skills to build impactful web experiences.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedCard;












import { useRef } from "react";

const AnimatedCard = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / 20;
    const moveY = (y - centerY) / 20;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `
      translate(${moveX}px, ${moveY}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform =
      "translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="flex justify-center items-center mt-24 py-16 px-4">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          w-full sm:w-[90%] md:w-[750px]
          h-auto md:h-[280px]
          relative text-white shadow-2xl
          transition-transform duration-200 ease-out overflow-hidden
        "
        style={{
          background: "linear-gradient(135deg, #180627, #581b91)",
          borderRadius: "30px",
        }}
      >
        {/* 🔥 Top Wave */}
        <svg
          viewBox="0 0 500 50"
          className="absolute top-0 left-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C150,80 350,0 500,30 L500,0 L0,0 Z"
            fill="#522a77"
          />
        </svg>

        {/* 🔥 Bottom Wave */}
        <svg
          viewBox="0 0 500 50"
          className="absolute bottom-0 left-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C150,-20 350,80 500,20 L500,50 L0,50 Z"
            fill="#522a77"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 p-6 mt-6">
          <h2 className="text-xl font-bold mb-2 text-center">
            About Me
          </h2>

          <p className="text-sm leading-relaxed text-center md:text-left">
            I'm a web developer with growing experience in frontend development,
            passionate about creating clean, responsive, and user-friendly web interfaces.
            I’ve contributed to multiple projects that emphasize smooth functionality and engaging
            design across different devices. My focus lies in writing efficient code and bringing
            ideas to life using modern technologies like React.js, Tailwind CSS, and JavaScript.
            I enjoy learning new tools, exploring creative design approaches, and continuously
            improving my development skills to build impactful web experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
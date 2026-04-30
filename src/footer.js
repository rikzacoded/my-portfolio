// import { FaPhone, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-purple-200 text-purple-900 py-24 px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-center gap-6 text-center">
//       {/* Left buttons: Resume */}
//       {/* <div className="flex flex-col sm:flex-row items-center gap-4"> */}
//         {/* <a> */}
//           {/* // href="/resume.pdf" // replace with actual resume path
          
//           // target="_blank"
//           // rel="noopener noreferrer"
//           // className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors" */}
        
//           {/* <span>Resume</span> */}
//            {/* <span>Resume</span> */}
//         {/* </a> */}
//       {/* </div> */}
// <div className="flex flex-col sm:flex-row items-center gap-4">
//   <button
//     onClick={() =>
//       alert("This is a sample for the portfolio website. Resume can be provided upon request.")
//     }
//     className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors"
//   >
//     <span>Resume</span>
//   </button>
// </div>

//       {/* Right contact info: Phone & Email */}
//       <div className="flex flex-col sm:flex-row items-center gap-4">
//         <div className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors">
//           <FaPhone className="w-5 h-5" />
//           {/* <span>+92 305 8684301</span> */}
//           <span>+92 300 0000000</span>
//         </div>

//         <div className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors">
//           <FaEnvelope className="w-5 h-5" />
//           {/* <span> rikzafaf@gmail.com</span> */}
//           <span> abc@gmail.com</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React, { useState } from "react";
// import Toast from "./Toast"; // <-- Toast component
// import { FaPhone, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//   const [showToast, setShowToast] = useState(false);

//   const handleResumeClick = () => {
//     setShowToast(true);

//     // Hide toast after 3 seconds
//     setTimeout(() => {
//       setShowToast(false);
//     }, 3000);
//   };

//   return (
//     <>
//       {/* Toast message */}
//       {showToast && (
//         <Toast message="This is a sample for the portfolio website. Resume can be provided upon request." />
//       )}

//       <footer className="w-full bg-purple-200 text-purple-900 py-24 px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-center gap-6 text-center">

//         {/* Left buttons: Resume */}
//         {/* <div className="flex flex-col sm:flex-row items-center gap-4"> */}
//           {/* <a> */}
//             {/* // href="/resume.pdf" // replace with actual resume path */}
//             {/* // target="_blank" */}
//             {/* // rel="noopener noreferrer" */}
//             {/* // className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors" */}
//             {/* <span>Resume</span> */}
//           {/* </a> */}
//         {/* </div> */}

//         {/* NEW Resume button with Toast */}
//         <div className="flex flex-col sm:flex-row items-center gap-4">
//           <button
//             onClick={handleResumeClick}
//             className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors"
//           >
//             <span>Resume</span>
//           </button>
//         </div>

//         {/* Right contact info: Phone & Email */}
//         <div className="flex flex-col sm:flex-row items-center gap-4">
//           <div className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors">
//             <FaPhone className="w-5 h-5" />
//             {/* <span>+92 300 1111111</span> */}
//             <span>+92 300 0000000</span>
//           </div>

//           <div className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors">
//             <FaEnvelope className="w-5 h-5" />
//             {/* <span>aaa@gmail.com</span> */}
//             <span>abc@gmail.com</span>
//           </div>
//         </div>

//       </footer>
//     </>
//   );
// };

// export default Footer;





// import React, { useState } from "react";
// import Toast from "./Toast"; // <-- Toast component
// import { FaPhone, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//   const [showToast, setShowToast] = useState(false);

//   const handleResumeClick = () => {
//     setShowToast(true);

//     // Hide toast after 3 seconds
//     setTimeout(() => {
//       setShowToast(false);
//     }, 3000);
//   };

//   return (
//     <>
//       {/* Toast message */}
//       {showToast && (
//         <Toast message="This is a sample for the portfolio website. Resume can be provided upon request." />
//       )}

//       <footer className="w-full bg-purple-200 text-purple-900 py-24 px-4 sm:px-8 flex flex-col items-center text-center gap-4">

//         {/* Left buttons: Resume */}
//         {/* <div className="flex flex-col sm:flex-row items-center gap-4"> */}
//           {/* <a> */}
//             {/* // href="/resume.pdf" // replace with actual resume path */}
//             {/* // target="_blank" */}
//             {/* // rel="noopener noreferrer" */}
//             {/* // className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors" */}
//             {/* <span>Resume</span> */}
//           {/* </a> */}
//         {/* </div> */}

//         {/* NEW Resume button with Toast */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             <button
//               onClick={handleResumeClick}
//               className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors"
//             >
//               <span>Resume</span>
//             </button>
//           </div>

//           {/* Right contact info: Phone & Email */}
//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             <div className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors">
//               <FaPhone className="w-5 h-5" />
//               {/* <span>+92 300 1111111</span> */}
//               <span>+92 300 0000000</span>
//             </div>

//             <div className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors">
//               <FaEnvelope className="w-5 h-5" />
//               {/* <span>aaa@gmail.com</span> */}
//               <span>abc@gmail.com</span>
//             </div>
//           </div>

//         </div>

//         {/* ---- Note under buttons/links ---- */}
//         <p className="mt-4 text-xs text-purple-700 opacity-80 max-w-md leading-relaxed">
//           *These contact details are not real. This is a sample portfolio website.*
//         </p>
//         {/* ---------------------------------- */}

//       </footer>
//     </>
//   );
// };

// export default Footer;















import React, { useState } from "react";
import Toast from "./Toast"; // <-- Toast component
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [showToast, setShowToast] = useState(false);

  const handleResumeClick = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      {/* Toast message */}
      {showToast && (
        <Toast message="This is a sample for the portfolio website. Resume can be provided upon request." />
      )}

      <footer className="w-full bg-purple-200 text-purple-900 py-24 px-4 sm:px-8 flex flex-col items-center text-center gap-4">

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* Resume link (NOW ENABLED) */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="\Resumepdf.pdf" // ← put your actual file path here
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors"
            >
              <span>Resume</span>
            </a>
          </div>

          {/* Right contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors">
              <FaPhone className="w-5 h-5" />
              <span>+92 305 8684301</span>
            </div>

            <div className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors">
              <FaEnvelope className="w-5 h-5" />
              <span>afaf@gmail.com</span>
            </div>
          </div>

        </div>

        {/* <p className="mt-4 text-xs text-purple-700 opacity-80 max-w-md leading-relaxed">
          *These contact details are not real. This is a sample portfolio website.*
        </p> */}

      </footer>
    </>
  );
};

export default Footer;






import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-purple-200 text-purple-900 py-24 px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-center gap-6 text-center">
      {/* Left buttons: Resume */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="/My Portfolio.pdf" // replace with actual resume path
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors"
        >
          <span>Resume</span>
        </a>
      </div>

      {/* Right contact info: Phone & Email */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors">
          <FaPhone className="w-5 h-5" />
          <span>+92 305 8684301</span>
        </div>

        <div className="flex items-center gap-2 text-purple-900 hover:text-purple-500 transition-colors">
          <FaEnvelope className="w-5 h-5" />
          <span> rikzafaf@gmail.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

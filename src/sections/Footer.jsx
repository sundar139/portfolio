import { FaGithub, FaLinkedin, FaGraduationCap } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        <div className="w-full md:w-auto text-sm text-center md:text-left mb-4 md:mb-0">
          <p>Terms & Conditions</p>
        </div>

        <div className="flex space-x-6 justify-center md:justify-center">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0077b5] text-2xl transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://scholar.google.com/citations?user=your-scholar-id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#ff6b6b] text-2xl transition duration-300"
          >
            <FaGraduationCap />
          </a>
        </div>

        <div className="w-full md:w-auto text-sm text-center md:text-right mt-4 md:mt-0">
          <p>© {new Date().getFullYear()} Rohith Sundar Jonnalagadda. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

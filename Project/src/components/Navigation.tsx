import ShinyText from "./ShinyText";
import profileImg from "../assets/img.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Navigation() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });


      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 400);
    }
  };

  return (
    <nav className="bg-black/20 backdrop-blur-lg border border-gray-700/20 rounded-lg w-[95%] sm:w-[90%] md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2 md:py-1 mb-4 shadow-xl gap-2 md:gap-0">
      <div className="flex items-center space-x-2">
        <img src={profileImg} alt="logo" className="h-12 w-12 rounded-md" />
        <ShinyText
          text="ArtyomK.dev"
          speed={3}
          className="text-2xl font-bold"
          disabled={false}
        />
      </div>

      <ul className="flex flex-wrap gap-4 sm:gap-3 md:gap-0 md:space-x-4 justify-center my-2 md:my-3 mx-2">
        <li>
          <a
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-md md:text-md font-medium relative hover:cursor-pointer text-white no-underline transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={(e) => handleNavClick(e, "#about")}
            className="text-md md:text-md font-medium relative hover:cursor-pointer text-white no-underline transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={(e) => handleNavClick(e, "#projects")}
            className="text-md md:text-md font-medium relative hover:cursor-pointer text-white no-underline transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            onClick={(e) => handleNavClick(e, "#contact")}
            className="text-md md:text-md font-medium relative hover:cursor-pointer text-white no-underline transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;

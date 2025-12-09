import ShinyText from "./ShinyText";


function Navigation() {
  return (
    <nav className="bg-black/20 backdrop-blur-lg border border-gray-700/20 rounded-lg w-[95%] sm:w-[90%] md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2 md:py-1 mb-4 shadow-xl gap-2 md:gap-0">
      <div className="flex items-center space-x-2">
        <img src="src/assets/img.jpg" alt="logo" className="h-12 w-12 rounded-md" />
        <ShinyText text="ArtyomK.dev" speed={3} className="text-2xl font-bold" disabled={false} />
      </div>

      <ul className="flex flex-wrap gap-4 sm:gap-3 md:gap-0 md:space-x-4 justify-center my-2 md:my-3 mx-2">
        <li>
          <a href="#home" className="text-md md:text-md font-medium hover:text-purple-400 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-md md:text-md font-medium hover:text-purple-400 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="text-md md:text-md font-medium hover:text-purple-400 transition-colors">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="text-md md:text-md font-medium hover:text-purple-400 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;

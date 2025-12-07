function Navigation() {
    return(
        <nav className="bg-gray-800/20 backdrop-blur-lg border border-gray-700/20 rounded-lg w-fit mx-auto flex justify-center px-6 py-1 mb-4">
            <ul className="flex space-x-4 justify-center my-4">
                <li><a href="#home" className="text-lg font-medium">Home</a></li>
                <li><a href="#about" className="text-lg font-medium">About</a></li>
                <li><a href="#services" className="text-lg font-medium">Services</a></li>
                <li><a href="#contact" className="text-lg font-medium">Contact</a></li>
            </ul>
        </nav>
    ) 

}
export default Navigation;
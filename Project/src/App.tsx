import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Aurora from "./components/Aurora";
import AnimatedContent from "./components/AnimatedContent";
import Cards from "./components/Cards";
import About from "./components/About";


function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          amplitude={0.5}
          blend={1}
        />
      </div>

      <div className="relative z-10">
        <AnimatedContent
          className="pt-8"
          duration={1}
          ease="power3.out"
          distance={50}
        >
          <Navigation />
        </AnimatedContent>
        <div className="pt-30 text-center px-4">
          <Hero />
          <About />
          <Cards />
        </div>
      </div>
    </>
  );
}

export default App;

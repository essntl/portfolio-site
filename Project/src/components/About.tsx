import FadeContent from "./FadeContent";

function About() {
  return (
    <FadeContent duration={2} blur={true} ease="power3.out" threshold={0.1}>
        <div className="max-w-7xl mx-auto mt-16 mb-16 flex flex-row justify-between gap-6">
          <div className="text-white text-left flex-1 bg-black/50 rounded-lg shadow-md py-6 px-12">
            <h1 className="text-center text-3xl mb-4">About me</h1>
            <p className="text-base leading-relaxed">
              Welcome to our application! We are dedicated to providing the best
              service possible.
            </p>
          </div>
          <div className="flex flex-col text-center bg-black/50 rounded-lg shadow-md py-6 px-12">
            <h1 className="text-center text-3xl mb-4">Skills</h1>
            <div className="flex flex-row gap-8">
              <div className="flex flex-col space-y-4 pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <h3 className="text-3xl font-bold text-white">7</h3>
                  <p className="text-sm text-gray-300">Projects Made</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <h3 className="text-3xl font-bold text-white">2</h3>
                  <p className="text-sm text-gray-300">Years Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <h3 className="text-3xl font-bold text-white">2</h3>
                  <p className="text-sm text-gray-300">Jobs Completed</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="grid grid-cols-1 gap-4 justify-items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </FadeContent>
  );
}

export default About;

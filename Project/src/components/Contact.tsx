import FadeContent from "./FadeContent";
import StarBorder from "./StarBorder";
import { FaTelegram, FaEnvelope, FaDiscord } from "react-icons/fa";

function Contact() {
  return (
    <FadeContent duration={2} blur={true} ease="power3.out" threshold={0.3}>
      <div className="my-16 px-4 max-w-7xl mx-auto bg-black/40 rounded-xl">
        <div className="pt-8 pb-12 px-4 sm:px-6">
          <h1 className="text-4xl font-bold text-white font-outfit mb-4">
            Contact
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 max-w-3xl text-center mx-auto">
            Want to talk about a project, ask a question, or just connect? I'm easiest to reach on Telegram. If you prefer something more formal, email works great too.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/50 rounded-lg shadow-md p-6 max-w-sm mx-auto hover:bg-black/60 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <FaTelegram className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Telegram</h3>
              </div>
              <p className="text-gray-400 mb-4 text-left">
                Best for quick back-and-forth. If you want the fastest response, message me here.
              </p>
              <StarBorder
                as="button"
                color="#229ED9"
                thickness={2.5}
                speed="5s"
                className="mt-2 hover:scale-105 transition-transform"
                paddingy={8}
                paddingx={2}
                effectHeight={25}
              >
                <a
                  className="hover:cursor-pointer py-4 px-6"
                  href="https://t.me/artemk_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message on Telegram
                </a>
              </StarBorder>
            </div>

            <div className="bg-black/50 rounded-lg shadow-md p-6 max-w-sm mx-auto hover:bg-black/60 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                  <FaEnvelope className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-gray-400 mb-4 text-left">
                Ideal for longer messages, details, and anything project-related.
              </p>
              <StarBorder
                as="button"
                color="#EA4335"
                thickness={2.5}
                speed="5s"
                className="mt-2 hover:scale-105 transition-transform"
                paddingy={8}
                paddingx={2}
                effectHeight={25}
              >
                <a
                  className="hover:cursor-pointer py-4 px-6"
                  href="mailto:contact@artemk.dev"
                >
                  Send an Email
                </a>
              </StarBorder>
            </div>

            <div className="bg-black/50 rounded-lg shadow-md p-6 max-w-sm mx-auto hover:bg-black/60 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                  <FaDiscord className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Discord</h3>
              </div>
              <p className="text-gray-400 mb-4 text-left">
                Mostly for friends and communities, preferrably use Telegram and Email.
              </p>
              <StarBorder
                as="button"
                color="#7289DA"
                thickness={2.5}
                speed="5s"
                className="mt-2 hover:scale-105 transition-transform"
                paddingy={8}
                paddingx={2}
                effectHeight={25}
              >
                <a
                  className="hover:cursor-pointer py-4 px-6"
                  onClick={() => {
                    navigator.clipboard.writeText("essentialty");
                    alert("Discord username copied to clipboard!");
                  }}
                >
                  Copy Username
                </a>
              </StarBorder>
            </div>
          </div>

          

          <div className="mt-8 p-4 bg-linear-to-r from-purple-900/20 to-blue-900/20 rounded-lg">
            <p className="text-center text-gray-300">
              <span className="font-semibold">Quick note:</span> I keep personal details off the site for privacy. Typical response time: same day (depending on time zone)
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-8 text-center">
            Based in Norway • Student Developer • ArtemK.dev
          </p>
        </div>
      </div>
    </FadeContent>
  );
}

export default Contact;
import FadeContent from "./FadeContent";
import plexrpc from "../assets/plexrpc.png";
import artyomtechtips from "../assets/artyomtechtips.png";
import groupdiv from "../assets/groupdiv.png";


function Cards() {
  return (
    <FadeContent duration={2} blur={true} ease="power3.out" threshold={0.4}>
    <div className="my-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-white font-outfit">My projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/50 rounded-lg shadow-md p-6 max-w-sm mx-auto">
          <h3 className="text-xl font-semibold mb-4">Plexamp Discord RPC</h3>
          <img src={plexrpc} alt="" className="w-full h-48 object-cover rounded" />
          <p className="text-gray-600 mt-2">Python Script to sync your Plexamp playback with your Discord status.</p>
        </div>
        <div className="bg-black/50 rounded-lg shadow-md p-6 max-w-sm mx-auto">
          <h3 className="text-xl font-semibold mb-4">ArtyomTechTips</h3>
          <img src={artyomtechtips} alt="" className="w-full h-48 object-cover rounded" />
          <p className="text-gray-600 mt-2">A website dedicated to providing technology tips and tutorials for both beginners and experts.</p>
        </div>
        <div className="bg-black/50 rounded-lg shadow-md p-6 max-w-sm mx-auto">
          <h3 className="text-xl font-semibold mb-4">Advanced group creator</h3>
          <img src={groupdiv} alt="" className="w-full h-48 object-cover rounded" />
          <p className="text-gray-600 mt-2">A web group creator tool for managing and organizing groups efficiently with file export/import functionality.</p>
        </div>
      </div>
    </div>
    </FadeContent>
  );
}
export default Cards;

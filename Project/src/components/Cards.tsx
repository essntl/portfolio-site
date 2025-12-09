import FadeContent from "./FadeContent";

function Cards() {
  return (
    <FadeContent duration={2} blur={true} ease="power3.out" threshold={0.1}>
    <div className="my-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-white">My projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/50 rounded-lg shadow-md p-6 max-w-sm mx-auto">
          <h3 className="text-xl font-semibold mb-2">Plexamp Discord RPC</h3>
          <img src="https://artyomtechtips.com/content/images/size/w320/format/webp/2025/11/download.png" alt="" className="w-full h-48 object-cover rounded" />
          <p className="text-gray-600">Python Script to sync your Plexamp playback with your Discord status.</p>
        </div>
        <div className="bg-black/50 rounded-lg shadow-md p-6 max-w-sm mx-auto">
          <h3 className="text-xl font-semibold mb-2">Tech Tips website</h3>
          <img src="https://artyomtechtips.com/content/images/size/w320/format/webp/2025/11/hero-banner-macos.image_.large_2x.jpg" alt="" className="w-full h-48 object-cover rounded" />
          <p className="text-gray-600">A website dedicated to providing technology tips and tutorials for both beginners and experts.</p>
        </div>
        <div className="bg-black/50 rounded-lg shadow-md p-6 max-w-sm mx-auto">
          <h3 className="text-xl font-semibold mb-2">Advanced group creator</h3>
          <img src="https://artyomtechtips.com/content/images/size/w320/format/webp/2025/11/Win-11-4-1.jpg" alt="" className="w-full h-48 object-cover rounded" />
          <p className="text-gray-600">A web group creator tool for managing and organizing groups efficiently with file export/import functionality.</p>
        </div>
      </div>
    </div>
    </FadeContent>
  );
}
export default Cards;

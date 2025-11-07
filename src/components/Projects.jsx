import { Code, Brush, ShoppingBag } from "lucide-react"; // small icons from lucide-react

export default function Projects() {
  return (
    <section
      id="home"
      className="relative flex flex-col font-mono justify-center  mx-auto h-[600px] items-center text-center py-20 px-6 text-white overflow-hidden
                 bg-gradient-to-br from-gray-900 via-indigo-900 to-cyan-800"
    >
     

      {/* ===== 3 Feature Boxes ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {/* Box 1 */}
        <div className="bg-white/10 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-6 text-center hover:scale-105 transition duration-500 shadow-lg">
          <div className="flex justify-center mb-4">
            <Code className="w-12 h-12 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-cyan-300">React Developer</h3>
          <p className="text-gray-300 mb-4">Building modern and dynamic UIs with React.js & Tailwind CSS.</p>
          <button className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition">
            View
          </button>
        </div>

        {/* Box 2 */}
        <div className="bg-white/10 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-6 text-center hover:scale-105 transition duration-500 shadow-lg">
          <div className="flex justify-center mb-4">
            <Brush className="w-12 h-12 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-cyan-300">WordPress Expert</h3>
          <p className="text-gray-300 mb-4">Custom WordPress designs and Elementor theme creation.</p>
          <button className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition">
            View
          </button>
        </div>

        {/* Box 3 */}
        <div className="bg-white/10 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-6 text-center hover:scale-105 transition duration-500 shadow-lg">
          <div className="flex justify-center mb-4">
            <ShoppingBag className="w-12 h-12 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-cyan-300">Shopify Customizer</h3>
          <p className="text-gray-300 mb-4">Crafting premium Shopify stores with pixel-perfect design.</p>
          <button className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition">
            View
          </button>
        </div>
      </div>
    </section>
  );
}

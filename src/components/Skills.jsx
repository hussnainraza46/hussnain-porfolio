import { Code, Brush, ShoppingBag } from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className=" text-gray-800 py-20 px-6 font-nunito"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-cyan-600 mb-4">
          My Skills
        </h2>
        <p className="text-gray-600 text-lg">
          I craft modern, user-friendly, and responsive web experiences with a
          focus on performance and design.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Frontend Development */}
        <div className="bg-white border border-cyan-100 rounded-2xl p-8 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-500">
          <div className="flex justify-center mb-4">
            <Code className="w-12 h-12 text-cyan-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-cyan-700">
            Frontend Development
          </h3>
          <p className="text-gray-600 mb-4">
            Building fast, responsive UIs with{" "}
            <span className="font-semibold text-cyan-700">React.js</span> and{" "}
            <span className="font-semibold text-cyan-700">Tailwind CSS</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="px-3 py-1 bg-cyan-100 rounded-full text-sm text-cyan-700 font-medium">
              React.js
            </span>
            <span className="px-3 py-1 bg-cyan-100 rounded-full text-sm text-cyan-700 font-medium">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-cyan-100 rounded-full text-sm text-cyan-700 font-medium">
              JavaScript
            </span>
          </div>
        </div>

        {/* WordPress Development */}
        <div className="bg-white border border-cyan-100 rounded-2xl p-8 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-500">
          <div className="flex justify-center mb-4">
            <Brush className="w-12 h-12 text-cyan-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-cyan-700">
            WordPress Development
          </h3>
          <p className="text-gray-600 mb-4">
            Creating fully editable websites using{" "}
            <span className="font-semibold text-cyan-700">Elementor</span> and{" "}
            custom WordPress themes.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="px-3 py-1 bg-cyan-100 rounded-full text-sm text-cyan-700 font-medium">
              Elementor
            </span>
            <span className="px-3 py-1 bg-cyan-100 rounded-full text-sm text-cyan-700 font-medium">
              Custom Themes
            </span>
            <span className="px-3 py-1 bg-cyan-100 rounded-full text-sm text-cyan-700 font-medium">
              SEO & Plugins
            </span>
          </div>
        </div>

        {/* Shopify Customization */}
        <div className="bg-white border border-cyan-100 rounded-2xl p-8 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-500">
          <div className="flex justify-center mb-4">
            <ShoppingBag className="w-12 h-12 text-cyan-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-cyan-700">
            Shopify Customization
          </h3>
          <p className="text-gray-600 mb-4">
            Designing clean, professional Shopify stores that deliver seamless
            user experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="px-3 py-1 bg-cyan-100 rounded-full text-sm text-cyan-700 font-medium">
              Shopify Liquid
            </span>
            <span className="px-3 py-1 bg-cyan-100 rounded-full text-sm text-cyan-700 font-medium">
              Theme Editing
            </span>
            <span className="px-3 py-1 bg-cyan-100 rounded-full text-sm text-cyan-700 font-medium">
              Custom Sections
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

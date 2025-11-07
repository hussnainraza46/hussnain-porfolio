export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4  py-6">
      <h1 className="text-2xl font-bold text-cyan-500">Hussnain Raza</h1>
      <ul className="hidden md:flex space-x-8">
        <li><a href="#home" className="text-cyan-600 text-lg font-medium hover:text-indigo-900  transition duration-600 hover:underline">Home</a></li>
        <li><a href="#about" className=" text-cyan-600 text-lg font-medium hover:text-indigo-900 transition duration-600 hover:underline">About</a></li>
        <li><a href="#projects" className=" text-cyan-600 text-lg font-medium hover:text-indigo-900 transition duration-600 hover:underline">Projects</a></li>
        <li><a href="#projects" className=" text-cyan-600 text-lg font-medium hover:text-indigo-900 transition duration-600 hover:underline">Blog</a></li>
        
      </ul>
      <button className="transition duration-700 ease-in-out">
        <a href="#contact" className="text-lg transition duration-700 ease-in-out text-cyan-900 font-medium border border-cyan-400  px-8 py-3 rounded font-medium shadow-sm bg-white hover:bg-cyan-400 hover:text-white">Contact</a>
      </button>
    </nav>
  );
}
          
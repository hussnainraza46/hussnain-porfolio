import aboutImage from "../assets/images/another-suit.png";

export default function About() {
    return (
        <section
            id="about"
            className="flex flex-col md:flex-row items-center justify-center py-20 bg-cyan-50 px-6 text-gray-800 font-nunito"
        >
            {/* Text Section */}
            <div className=" w-[40%] text-left md:pl-10 mb-10 md:mb-0">
                <h2 className="text-4xl font-nurito font-bold mb-6 text-gray-900">About Me</h2>
                <p className="text-lg font-nurito leading-relaxed text-gray-600">

                    Hello! I’m <span className="text-gray-800 font-nurito font-bold font-semibold">Hussnain Raza</span>, a passionate WordPress
                    and Front-end Developer from Pakistan. I specialize in building modern,
                    responsive, and user-friendly websites using HTML, CSS, JavaScript, Bootstrap, and TailwindCSS. Whether it’s a portfolio,
                    business site, or WooCommerce store, I focus on creating pixel-perfect designs that deliver results. <hr/>

                    I have extensive experience in building custom WordPress websites, Shopify e-commerce
                    stores, and modern React applications. I'm also proficient in MS Office applications and have
                    excellent typing skills for efficient project delivery.
                </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 w-full flex justify-center">
                <img
                    src={aboutImage}
                    alt="About Me"
                    className="w-72 md:w-96 rounded-2xl shadow-xl mask-b-from-10% mask-b-to-95%   object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
        </section>
    );
}

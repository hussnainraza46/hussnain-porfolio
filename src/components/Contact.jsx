import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className=" from-gray-900 via-indigo-900 to-cyan-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE — Contact Info */}
        <div className="md:w-1/2 w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-cyan-400/20">
          <h2 className="text-3xl font-bold text-cyan-900 mb-6">Get In Touch</h2>
          <p className="text-gray-500 mb-6">
            Have a project in mind or just want to say hello?  
            Feel free to reach out — I’d love to hear from you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400 w-6 h-6" />
              <span className="text-gray-600">hussnainraza46@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-cyan-400 w-6 h-6" />
              <span className="text-gray-600">+92 300 1234567</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400 w-6 h-6" />
              <span className="text-gray-600">Lahore, Pakistan</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Contact Form */}
        <div className="md:w-1/2 w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-cyan-400/20">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Send Me a Message</h2>

          <form className="flex flex-col space-y-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/20 text-gray-700 border-cyan-500  placeholder-gray-400 border border-cyan-100 focus:outline-none focus:border-cyan-400"
              required
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-white/20 text-gray-700 border-cyan-500 placeholder-gray-400 border border-cyan-100 focus:outline-none focus:border-cyan-400"
              required
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded-lg bg-white/20 text-gray-700 border border-cyan-500 placeholder-gray-400 border border-cyan-100 focus:outline-none focus:border-cyan-400 resize-none"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-cyan-500 text-black font-semibold py-3 rounded-lg hover:bg-cyan-400 transition duration-300"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

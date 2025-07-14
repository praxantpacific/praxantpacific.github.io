import React, { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  // Exaggerated contact methods
  const contactMethods = [
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Teleportation Coordinates",
      value: "Himalayan Coding Monastery, Nepal",
      glowColor: "from-red-500 to-orange-500"
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: "Quantum Communication Device",
      value: "+977-98X-CODE-WIZ",
      glowColor: "from-green-500 to-teal-500"
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Hyper-Speed Messaging",
      value: "prashant@cosmic.coder",
      glowColor: "from-blue-500 to-cyan-500"
    }
  ];

  // Social media with exaggerated stats
  const socialMedia = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      name: "LinkedIn",
      value: "50K+ CEOs begging for advice",
      link: "https://linkedin.com/in/prashant-paudel",
      glowColor: "from-blue-600 to-blue-400"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      name: "GitHub",
      value: "300+ repos that broke GitHub",
      link: "https://github.com/prashant-paudel",
      glowColor: "from-purple-600 to-pink-500"
    },
    {
      icon: <SiLeetcode className="text-2xl" />,
      name: "LeetCode",
      value: "Solved all problems in one night",
      link: "https://leetcode.com/prashant-paudel",
      glowColor: "from-yellow-500 to-orange-500"
    }
  ];

  return (
      <section id="contact" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]">

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-4xl font-extrabold mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF00FF] to-[#00FFFF]">
            Cosmic Communication
          </span>
        </h2>

        {/* Introduction */}
        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 shadow-xl mb-16">
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            Contacting <span className="text-[#FFD700] font-bold">Prashant "The Himalayan Coder"</span> requires 
            <span className="text-[#00FF7F]"> quantum encryption</span>. Fortunately, we've cracked the code and created 
            a <span className="text-[#00FFFF]">temporal communication bridge</span> to reach this programming deity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
                Official Channels
              </span>
            </h3>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className={`relative bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-${method.glowColor.split(' ')[1]}/50 transition-all duration-300 group`}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${method.glowColor} rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${method.glowColor}`}>
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{method.title}</h4>
                      <p className="text-gray-300">{method.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <h3 className="text-2xl font-bold text-white mt-12 mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF7F] to-[#00FFFF]">
                Digital Domination
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-${social.glowColor.split(' ')[1]}/50 transition-all duration-300 group text-center`}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${social.glowColor} rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${social.glowColor} mb-3`}>
                      {social.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white">{social.name}</h4>
                    <p className="text-gray-300 text-sm">{social.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF00FF] to-[#FFA500]">
                Temporal Message Portal
              </span>
            </h3>

            <form 
              onSubmit={handleSubmit}
              className={`relative bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl transition-all duration-300 ${submitSuccess ? 'border-green-500/50' : ''}`}
            >
              {submitSuccess && (
                <div className="absolute -inset-0.5 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl blur opacity-30"></div>
              )}
              <div className="relative z-10">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Quantum Signature</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-900/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Temporal Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message (Encrypted)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-gray-900/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center py-3 px-6 rounded-lg font-bold transition-all duration-300 ${isSubmitting || submitSuccess
                    ? 'bg-gradient-to-br from-green-500 to-teal-500 text-white'
                    : 'bg-gradient-to-br from-purple-600 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/20'
                  }`}
                >
                  {isSubmitting ? (
                    'Transmitting...'
                  ) : submitSuccess ? (
                    <>
                      <FaPaperPlane className="mr-2" /> Message Received!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" /> Send Through Space-Time
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Disclaimer */}
            <div className="mt-6 text-center text-gray-400 text-sm">
              <p>Messages may arrive before they're sent. Response time: 0ms - 1 Planck time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
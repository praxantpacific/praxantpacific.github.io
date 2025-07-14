import React, { useState } from "react";

const ContactInfo = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="text-white text-center space-y-4">
        <h3 className="text-2xl font-bold text-green-400">Message Sent!</h3>
        <p className="text-sm text-gray-300">Thanks for reaching out, Prashant will reply soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-white space-y-4 w-[280px] sm:w-[340px]">
      <h3 className="text-2xl font-semibold text-center text-[#FFA500]">Send a Message</h3>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={handleChange}
        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows="4"
        value={form.message}
        onChange={handleChange}
        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-[#FFA500] hover:bg-orange-400 text-black font-semibold py-2 px-4 rounded-lg transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactInfo;

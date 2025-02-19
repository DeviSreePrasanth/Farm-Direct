import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted", formData);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans leading-relaxed py-12">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Contact Us
        </h1>

        <p className="text-lg text-center text-gray-600 mb-8">
          We’d love to hear from you! Whether you have questions, feedback, or need support, feel free to reach out to us.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

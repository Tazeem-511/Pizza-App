import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your EmailJS code to send the email
    console.log("Sending email with data:", formData);

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-10">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-700 text-white focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-700 text-white focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-600 rounded-md p-2 h-32 bg-gray-700 text-white focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-500 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

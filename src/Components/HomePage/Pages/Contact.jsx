import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Simple validation to check if all fields are filled
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    const serviceId = 'service_c3jljia';
    const templateId = 'template_mrm3h3f';
    const userId = 'MQrv68Q8keZ9xOVuX';


    emailjs.send(serviceId, templateId, form, userId)
      .then((result) => {
        toast.success('Message sent successfully!');
      },
        (error) => {
          toast.error('Failed to send message, please try again.');
        });

    // Reset form after submission
    setForm({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-50 py-16 flex justify-center items-center h-screen">
      <div className="container max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We’d love to hear from you! Whether you have questions about our products or services, feel free to reach out.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              onChange={handleChange}
              value={form.name}
              type="text"
              name="name"
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              onChange={handleChange}
              value={form.email}
              type="email"
              name="email"
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              onChange={handleChange}
              value={form.message}
              name="message"
              rows="4"
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

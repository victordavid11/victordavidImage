import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_flsvbrv", // Replace with your EmailJS Service ID
        "template_9r2pura", // Replace with your EmailJS Template ID
        form.current,
        "iY1EFI1jk-WSI6ubo" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="pt-28 px-4 pb-10">
      <h1 className="text-3xl font-bold text-center mb-6">Book Us</h1>
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border-b-2 focus:outline-none focus:border-gray-500 border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border-b-2 focus:outline-none focus:border-gray-500 border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            pattern="^\+?[0-9\s]+$"
            type="tel"
            required
            placeholder="whatsapp preferably"
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 rounded"
          ></input>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-3 py-2  focus:outline-none focus:border-gray-500 border-b-2 border-gray-300 rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-500 text-white  py-2 px-4 rounded hover:bg-gray-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

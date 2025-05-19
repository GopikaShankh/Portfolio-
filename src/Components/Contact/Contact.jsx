import React, { useState } from "react";
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_jq1mx34',   // from EmailJS dashboard
      'template_ylb96ei',  // from EmailJS dashboard
      {
        from_name: formData.fullName,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        subject: formData.subject,
        message: formData.message,
        to_email: "gopikashankh7@gmail.com", 
      },
      'Nsy13fpluojsSe1Ce'       // public key from EmailJS
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert("Message Sent Successfully!");
    }, (err) => {
      console.log('FAILED...', err);
      alert("Message Sending Failed.");
    });

    // Optionally reset form
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-box">
          <input type="number" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} />
          <input type="text" name="subject" placeholder="Email Subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <textarea name="message" cols="30" rows="10" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button className="contact-btn">Send Me</button>
      </form>
    </section>
  );
};

export default Contact;

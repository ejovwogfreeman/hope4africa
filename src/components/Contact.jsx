import React, { useState } from "react";
import "../css/Contact.css";
import logo from "../assets/logo2.jpg";

const Contact = ({ text, text2 }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const { firstname, lastname, email, subject, message } = formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="contact-cont">
      <div className="logo">
        <img
          src={logo}
          alt=""
          style={{
            width: "200px",
            margin: "0px auto 50px",
            paddingBottom: "10px",
          }}
        />
      </div>
      <p>
        {text}
        <br />
        {text2}
      </p>
      <form action="" style={{ background: "transparent" }}>
        <div className="row">
          <div>
            <label htmlFor="" style={{ color: "white" }}>
              First Name
            </label>
            <input
              type="text"
              placeholder="Your First Name"
              name="firstname"
              value={firstname}
              onChange={handleChange}
              style={{ border: "1px solid white", color: "white" }}
            />
          </div>
          <div>
            <label htmlFor="" style={{ color: "white" }}>
              Last Name
            </label>
            <input
              type="text"
              placeholder="Your First Name"
              value={lastname}
              name="lastname"
              onChange={handleChange}
              style={{ border: "1px solid white", color: "white" }}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="" style={{ color: "white" }}>
              Email
            </label>
            <input
              type="email"
              placeholder="Your First Name"
              value={email}
              name="email"
              onChange={handleChange}
              style={{ border: "1px solid white", color: "white" }}
            />
          </div>
          <div>
            <label htmlFor="" style={{ color: "white" }}>
              Subject
            </label>
            <input
              type="text"
              placeholder="Your First Name"
              value={subject}
              name="subject"
              onChange={handleChange}
              style={{ border: "1px solid white", color: "white" }}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="" style={{ color: "white" }}>
              Message
            </label>
            <textarea
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChange}
              style={{ border: "1px solid white", color: "white" }}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

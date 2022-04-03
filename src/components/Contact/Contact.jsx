import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import linkedin from "../../gif/linkedin.gif";
import github from "../../gif/github.gif";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="contact_container">
      <h1>Reach Me</h1>
      <div className="contact_sns">
        <a href="https://www.linkedin.com/in/chiho1108developer/">
          <img src={linkedin} alt="linkedin gif" />
        </a>
        <a href="https://github.com/Chimoha31">
          <img src={github} alt="github gif" />
        </a>
      </div>
      <div className="contact_tools">
        <ul>
          <li>
            <i className="fas fa-mobile-alt"></i>
            <p>+1(604)7852569</p>
          </li>
          <li>
            <i className="fas fa-envelope-square"></i>
            <p>mokochii1108@gmail.com</p>
          </li>
        </ul>
      </div>
      <div className="contact_form">
        <div className="form_container">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" className="submit_btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

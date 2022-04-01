import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
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
      <div className="contact_left">
        <ul>
          <li>
            <i className="fas fa-envelope-square"></i>
            <p>mokochii1108@gmail.com</p>
          </li>
          <li>
            <i className="fas fa-mobile-alt"></i>
            <p>6047852569</p>
          </li>
        </ul>
      </div>
      <div className="contact_right">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;

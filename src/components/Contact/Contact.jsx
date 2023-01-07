import React, { useRef} from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import linkedin from "../../gif/linkedin.gif";
import github from "../../gif/github.gif";
import cellphone from "../../gif/cellphone.gif";
import gmail from "../../gif/gmail.gif";

const {REACT_APP_MY_SERVICE_ID, REACT_APP_MY_TEMPLETE_ID, REACT_APP_MY_USER_ID} = process.env;

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${REACT_APP_MY_SERVICE_ID}`,
        `${REACT_APP_MY_TEMPLETE_ID}`,
        form.current,
        `${REACT_APP_MY_USER_ID}`
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
   <>
   </>
  );
}

export default Contact;

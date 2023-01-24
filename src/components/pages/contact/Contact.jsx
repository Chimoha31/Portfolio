import React from "react";
import "./Contact.css";
import Heading from "../../common/heading/Heading";
import { contact } from "../../data/data";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <Heading title="Keep In Touch" />
        <div className="contact_container">
          <div className="contact_content flexsb">
            <div className="right">
              <form>
                <div className="flex">
                  <input type="text" placeholder="Name" data-aos="flip-left" />
                  <input
                    type="email"
                    placeholder="Email"
                    data-aos="flip-right"
                  />
                </div>
                <input type="email" placeholder="Subject" data-aos="flip-up" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  data-aos="flip-down"
                ></textarea>
                <button data-aos="zoom-in-up">Submit</button>
              </form>
            </div>
            <div className="left">
              {contact.map((item) => (
                <div className="box contact_tool" data-aos="zoom-in" key={item.id}>
                  <span><i>{item.icon}</i></span>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

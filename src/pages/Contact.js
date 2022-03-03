import React from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

const userID = "user_3S5mUWKMnhjdR2Y7vjRwf";
const serviceID = "service_q8aavs5";
const templateID = "template_2rr7r84";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form id="contact-form" onSubmit={sendEmail}>
      <div className="labelimput">
        <label className="name">Name</label>
        <input type="text" name="from_name" />
      </div>
      <div className="labelimput">
        <label className="name">Email</label>
        <input type="email" name="user_email" />{" "}
      </div>
      <div className="labelimput">
        <label className="name">Message</label>
        <textarea className="textarea" name="message" cols={800} rows={600}/>
      </div>
      <input className="button" type="submit" value="Send" />
    </form>
  );
};

export default Contact;

import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="left">
        <iframe
          width="600"
          height="500"
          src="https://maps.google.com/maps?q=tasmajdan%20park&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <a href="https://embedgooglemap.net/139/"></a>
      </div>
      <div className="right">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

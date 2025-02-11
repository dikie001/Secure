import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="form-container ">
          <form action="#" method="POST">
            <h1 className="font-semibold">
              <span>Contact</span> Us
            </h1>
            <div>
              <label htmlFor="Name">Name</label>
              <input type="text" placeholder="Enter your name" name="Name" />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input type="email" placeholder="Enter your email" name="Email" />
            </div>
            <div>
              <label htmlFor="Message">Message</label>
              
              <textarea
                rows={10}
                name="Message"
                placeholder="Enter your message..."
              ></textarea>
            </div>
            <input type="Submit" value='Submit' className="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;

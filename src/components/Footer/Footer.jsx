import React from "react";
import "./Footer.css";
import { SiDatabricks } from "react-icons/si";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaFaceAngry } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
            <div className="logo-footer">
                <SiDatabricks className='icons'/>
                <h2>Secured.</h2>
            </div>
            <BsFillArrowUpCircleFill className="icon"/>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>

            <h3>My Account</h3>
                <p>Login</p>
                <p>My Data</p>
                <p>Cloud Security</p>
                <p>Important</p>
                <p>Specialist</p>

                <h3>Information </h3>
                    <p>Membership</p>
                    <p>Data Protocols</p>
                    <p>Cloud protocols</p>
                    <p>Secirity Roles</p>
               

                <h3>legal</h3> 
                    <p>Policies</p>
                    <p>Terms And Conditions</p>
                    <p>Securities</p>
                    <p></p>
                
                <form action="#" method="POST">
                    <input type="email" placeholder="Enter your Email" />
                    <FiMail className="mail-icon"/>
                    <div className="social-group">
                        <FaInstagram className="social-icons"/>
                        <FaFacebook className="social-icons"/>
                        <FaLinkedin className="social-icons"/>
                        <FaWhatsapp className="social-icons"/>
                        <FaGithub className="social-icons"/>
                    </div>
                </form>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

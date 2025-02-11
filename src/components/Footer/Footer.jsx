import React from "react";
import "./Footer.css";
import { SiDatabricks } from "react-icons/si";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            <SiDatabricks className="icon" />
            <h2 className="text-2xl font-semibold">Secured.</h2>
          </div>
          <Link
            activeclass="active"
            to="top"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <BsFillArrowUpCircleFill className="icon" id="icon" />
          </Link>
        </div>

        <div className="col-container">
          <div className="col">
            <h3 className="text-2xl font-semibold">Navigation</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3 className="text-2xl font-semibold">My Account</h3>
            <p>Login</p>
            <p>My Data</p>
            <p>Cloud Security</p>
            <p>Important</p>
            <p>Specialist</p>
          </div>

          <div className="col">
            <h3 className="text-2xl font-semibold">Information </h3>
            <p>Membership</p>
            <p>Data Protocols</p>
            <p>Cloud protocols</p>
            <p>Secirity Roles</p>
          </div>
          <div className="col">
            <h3 className="text-2xl font-semibold">legal</h3>
            <p>Policies</p>
            <p>Terms And Conditions</p>
            <p>Securities</p>
            <p></p>
          </div>

          <form action="#" method="POST">
            <input type="email" placeholder="Enter your email" />
            <FiMail className="mail-icon" />
            <div className="social-group">
              <FaInstagram className="social-icon" />
              <FaFacebook className="social-icon" />
              <FaLinkedin className="social-icon" />
              <FaWhatsapp className="social-icon" />
              <FaGithub className="social-icon" />
              <FaDribbble className="social-icon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;

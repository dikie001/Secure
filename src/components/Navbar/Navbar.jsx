import React, { useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav =()=> setNav(!nav)
  return (
    <div name="top" className="navbar ">
      <div className="container">
        <div className="logo">
          <SiDatabricks className="icon" />
          <h1 className="font-semibold">Secured</h1>
        </div>
        <ul className={nav ? 'nav-menu active' :  'nav-menu'}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recovery">Recovery</Link></li>
          <li><Link to='/cloud'>Cloud</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <button>Sign In</button>
        </ul>
        <div className="hamburger"  onClick={handleNav}>
            {!nav? (<FaBars className="icon"/>):(<FaTimes className="icon"/>)}
         
        </div>
      </div>
    </div>
  );
};
export default Navbar;

import React, { useState } from "react";
import "./Recovery.css";
import { FaTimes } from "react-icons/fa";

const Recovery = () => {
  const [isClicked, setIsClicked] = useState(false);
  const learnMore = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <div className="recovery">
        <div className="container">
          <div className="content">
            <h2 className="font-semibold">
              <span>Data</span> Recovery
            </h2>
            <p>
              At Secured, we specialize in professional sata recovery solutions,
              helping individuals and businesses retrieve lost files with
              efficiency, security, and reliability.
              <br />
              Whether your data loss is due to accidental deletion, hardware
              failuer, corruption, or malware, our advanced recovery techniques
              ensure the best possible outcome.
            </p>
            <div>
              <button onClick={learnMore}>Learn More</button>
            </div>
            <div className={isClicked ? "display" : "nullDisplay"}>
              <FaTimes className='icon' onClick={()=>setIsClicked(!isClicked)}/>
                <div className="content">
              <h2 className="font-bold">Why Choose Us?</h2>
              <p className="font-semibold">
                1. <span className="">Expert Recovery-</span> Advanced tools for various storage devices <br />
                2. <span>Secure and Confidential-</span> Your data privacy is our Priority <br />
                3. <span>Fast and Reliable-</span> Minimize downtime with efficient recovery
              </p>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Recovery;

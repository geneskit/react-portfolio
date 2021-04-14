import React from "react";
// import portrait from '../assets/images/'; ----- IMPORT IMAGE HERE
const About = () => (
    <div className="text-center" style={{ backgroundColor: "", color: "", padding: ""}}>
        <h1 id="about">About</h1>
        <img src={portrait} style={{width: "50%", padding: "35px", alt="Portrait of the developer."}}/>
        <p style={{fontSize: "25px"}}>
            Welcome to my portfolio!
        </p>
        <p style={{fontSize: "20px"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt 
                perspiciatis corrupti magnam, vero dolorum, ipsum reiciendis nisi porro 
                minus architecto ipsam voluptatum. Numquam sunt magnam accusamus 
                exercitationem ut excepturi provident. 
        </p>
    </div>
);
export default About;

import React from "react";
import portrait from '../assets/images/DSC_9363CROPPED.jpg';
const About = () => (
    <div className="text-center" style={{ backgroundColor: "#3C3D35", color: "9C9A98", padding: ""}}>
        <h1 id="about">About the Developer</h1>
        <img src={portrait} alt="The developer" style={{ width: "50%", padding: "35px" }}/>
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

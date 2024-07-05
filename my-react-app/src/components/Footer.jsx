import React from "react";
import '../styles/Footer.css'

var today = new Date();
var year = today.getFullYear()

function Footer(){
    return(
    <div className="footer-container">
        <p className="footer">© {year} Divya's Website</p>
    </div>
    );
}

export default Footer;
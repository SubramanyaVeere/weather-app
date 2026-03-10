import "./Footer.css";

import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer(){

return(

<footer className="footer">



<div className="social-links">

<a href="https://www.instagram.com/subbu.7_?igsh=MWRicmJjNGo0NW5ydg==" target="_blank">
<FaInstagram/>
</a>

<a href="https://github.com/SubramanyaVeere" target="_blank">
<FaGithub/>
</a>

<a href="https://x.com/SubramanyaV_" target="_blank">
<FaTwitter/>
</a>

<a href="https://www.linkedin.com/in/subramanyav2002" target="_blank">
<FaLinkedin/>
</a>

<a href="https://wa.me/qr/CMOEMAOZNKCEG1" target="_blank">
<FaWhatsapp/>
</a>

<a href="mailto:subramanyav2002@gmail.com">
<MdEmail/>
</a>

<a href="#">
<FaGooglePlay/>
</a>

<a href="#">
<FaApple/>
</a>

<p>
© Weather App v2.0 built by <b>Subramanya V</b> • React • Bootstrap
</p>

</div>

</footer>

);

}

export default Footer;
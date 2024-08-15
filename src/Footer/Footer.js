import React from 'react'
import skylogo from '../UI/sky_logo.png';
import iconfacebook from '../UI/icon-facebook.svg';
import iconinstagram from '../UI/icon-instagram.svg';
import iconyoutube from '../UI/icon-youtube.svg';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Context/UserContext';

const Footer = () => {
  const navigate = useNavigate();
  const {userDetails} = useUserContext();

  const goToLogin = () => {
    navigate("/login");
}
  return (
    <footer>
    <div class="footer-container">
        <div class="footer-left">
            <img src={skylogo} alt="SkyBank Logo" class="footer-logo" width={100} />
            <div class="social-icons">
                <a href="#"><img src={iconfacebook} alt="Facebook" /></a>
                <a href="#"><img src={iconyoutube} alt="YouTube" /></a>
                <a href="#"><img src={iconinstagram} alt="Instagram" /></a>
            </div>
        </div>
        <div class="footer-middle">
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <ul>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
        <div class="footer-right">
            {!userDetails && <button class="cta-button" onClick={goToLogin}>Sign Up</button>}
            <p>&copy; SkyBank. All Rights Reserved.</p>
        </div>
    </div>
</footer>
  )
}

export default Footer
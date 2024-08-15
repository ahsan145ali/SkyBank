import React from 'react';
import './Homepage2.css';
import iconbudgeting from '../UI/icon-budgeting.svg';
import iconApi from '../UI/icon-api.svg';
import iconBoarding from '../UI/icon-onboarding.svg';
import iconBanking from '../UI/icon-online.svg';
import imgCurrency from '../UI/image-currency.jpg';
import imgrestaurant from '../UI/image-restaurant.jpg';
import imgtravel from '../UI/image-plane.jpg';
import imgconfetti from '../UI/image-confetti.jpg';
import imgskyoffice from '../UI/SIC_Osterley.jpg';

import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Homepage = () => {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/");
    }
    return (
        <div className='bodyContainer'>

            <section class="hero">
                <div class="hero-content">
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your SkyBank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <button class="cta-button" onClick={goToLogin}>Sign Up</button>
                </div>
                <div class="hero-image">
                    <img src={imgskyoffice} alt="Sky office" />
                </div>
            </section>


            <section class="why-choose">
                <h2>Why choose SkyBank?</h2>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                <div class="features">
                    <div class="feature-item">
                        <img src={iconBanking} alt="Online Banking" />
                        <h3>Online Banking</h3>
                        <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </div>
                    <div class="feature-item">
                        <img src={iconbudgeting} alt="Simple Budgeting" />
                        <h3>Simple Budgeting</h3>
                        <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                    </div>
                    <div class="feature-item">
                        <img src={iconBoarding} alt="Fast Onboarding" />
                        <h3>Fast Onboarding</h3>
                        <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </div>
                    <div class="feature-item">
                        <img src={iconApi} alt="Open API" />
                        <h3>Open API</h3>
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div>
                </div>
            </section>


            <section class="latest-articles">
                <h2>Latest Articles</h2>
                <div class="articles">
                    <div class="article-item">
                        <img src={imgCurrency} alt="Currency" />
                        <h3>Receive money without any border issues</h3>
                        <p>Learn how our new feature lets you receive money from anywhere in the world with zero fees.</p>
                    </div>
                    <div class="article-item">
                        <img src={imgrestaurant} alt="Restaurant" />
                        <h3>Save up for the future</h3>
                        <p>Planning for the future has never been easier with our automatic savings feature.</p>
                    </div>
                    <div class="article-item">
                        <img src={imgtravel} alt="Travel" />
                        <h3>Take your SkyBank card wherever you go</h3>
                        <p>Whether you’re at home or abroad, you can rely on your SkyBank card to work wherever you need it.</p>
                    </div>
                    <div class="article-item">
                        <img src={imgconfetti} alt="Airplane" />
                        <h3>Our Beta accounts are now live!</h3>
                        <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta program.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage





// const Homepage = () => {
//     return (
//         <>
//             <hr style=
//                 {{
//                     color: "black",
//                     height: 3
//                 }}
//             />
//             <Info vertical="20%" horizontal="10%"/>
//             <container>
//             <Services />
//             </container>
//         </> 
//     )
// }

// export default Homepage;
import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="f_wrapper">
                    <div className="fW_top">

                        {/* Phone Screen Only */}
                        <div className="phoneFooter">
                            <div className="logo">
                                <NavLink to={'/'}>
                                    <figure><img src="./img/Icon.png" alt="Icon.png" /></figure>
                                    <h3>E-Comm</h3>
                                </NavLink>
                            </div>
                            <div className="phoneF_wrapper">
                                {/* Card 2 */}
                                <div className="phoneFW_card">
                                    <h1>Follow Us</h1>
                                    <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                                    <div className="fWTC_icon">
                                        <figure>
                                            <img src="./img/facebook.png" alt="facebook.png" />
                                        </figure>
                                        <figure>
                                            <img src="./img/twitter.png" alt="twitter.png" />
                                        </figure>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="phoneFW_card">
                                    <h1>Contact Us</h1>
                                    <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 1 */}
                        <div className="fWT_card">
                            <div className="logo">
                                <NavLink to={'/'}>
                                    <figure><img src="./img/Icon.png" alt="Icon.png" /></figure>
                                    <h3>E-Comm</h3>
                                </NavLink>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="fWT_card">
                            <h1>Follow Us</h1>
                            <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                            <div className="fWTC_icon">
                                <figure>
                                    <img src="./img/facebook.png" alt="facebook.png" />
                                </figure>
                                <figure>
                                    <img src="./img/twitter.png" alt="twitter.png" />
                                </figure>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="fWT_card">
                            <h1>Contact Us</h1>
                            <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
                        </div>
                    </div>

                    <div className="fW_main">
                        {/* Card 1 */}
                        <div className="fWM_card">
                            <h1>Infomation</h1>
                            <ul>
                                <li>About Us</li>
                                <li>Informations</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="fWM_card">
                            <h1>Service</h1>
                            <ul>
                                <li>About Us</li>
                                <li>Informations</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="fWM_card">
                            <h1>My Account</h1>
                            <ul>
                                <li>About Us</li>
                                <li>Informations</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>

                        {/* Card 4 */}
                        <div className="fWM_card">
                            <h1>Our Offers</h1>
                            <ul>
                                <li>About Us</li>
                                <li>Informations</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>

                    <div className="fW_bottom">
                        <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                        <figure>
                            <img src="./img/Western-union.png" alt="Western-union.png" />
                            <img src="./img/Group 19.png" alt="Group 19.png" />
                            <img src="./img/Paypal.png" alt="Paypal.png" />
                            <img src="./img/Shape 327.png" alt="Shape 327.png" />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
};
import Image from 'next/image'
import Link from 'next/link'



export default function Footer(){


return (

    <footer>
        <div className="footer-container">
            {/* <!--Footer Top Area Start--> */}
            <div className="footer-top-area black-bg pt-80 pb-45">
                <div className="container">
                    <div className="row justify-content-between">
                        {/* <!--Single Footer Widget Start--> */}
                        <div className="col-md-6 col-lg-3">
                            <div className="single-footer-widget mb-30">
                                <Link className="footer-logo" href="/">
                                
                                <Image src="/img/logo/logo.png" alt="footerImages"
                                height={144}
                                width={144}
                                
                                />
                                </Link>
                                <p>Pursue pleasure rationally encounter consequences that treme painful. Nor again is there anyone obtain pain </p>
                                <h4 className="newslatter-title">Newsletter</h4>
                                <form action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="footer-subscribe-form validate" target="_blank" noValidate>
                                    <div id="mc_embed_signup_scroll">
                                        <div id="mc-form" className="mc-form subscribe-form" >
                                            <input id="mc-email" type="email" autoComplete="off" placeholder="Enter your email" />
                                            <button id="mc-submit">SEND</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!--Single Footer Widget End-->
		                    <!--Single Footer Widget Start--> */}
                        <div className="col-md-6 col-lg-3">
                            <div className="single-footer-widget mb-30 footer-menu">
                                <h3 className="footer-title">Quick Links</h3>
                                <ul>
                                    <li><Link href="/About">About us</Link></li>
                                    <li><Link href="#">Causes</Link></li>
                                    <li><Link href="#">Events</Link></li>
                                    <li><Link href="#">Blog</Link></li>
                                    <li><Link href="#">Pages</Link></li>
                                    <li><Link href="/Shop">Shop</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--Single Footer Widget End-->
		                    <!--Single Footer Widget Start--> */}
                        <div className="col-md-6 col-lg-3">
                            <div className="single-footer-widget mb-30 footer-menu">
                                <h3 className="footer-title">Information</h3>
                                <ul>
                                    <li><Link href="/About">Our Volunteer</Link></li>
                                    <li><Link href="#">Donation</Link></li>
                                    <li><Link href="#">Login/Register</Link></li>
                                    <li><Link href="#">Support</Link></li>
                                    <li><Link href="#">Policy</Link></li>
                                    <li><Link href="#">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--Single Footer Widget End-->
		                    <!--Single Footer Widget Start--> */}
                        <div className="col-md-6 col-lg-3">
                            <div className="single-footer-widget mb-30 footer-menu">
                                <h3 className="footer-title">Contact Info</h3>
                                <p className="ft-address"><span>Address:</span>245 Central Tower, 4th Floow New City, California, USA</p>
                                <p className="ft-contact-info ds-inline">
                                    <span>Call us:</span>
                                    <Link href="#">+12546 658 987</Link>,
                                    <Link href="#">+12548 789 987</Link>
                                </p>
                                <p className="ft-contact-info">
                                    <span>Web:</span>
                                    <Link href="#">info@example.com</Link>
                                    <Link href="#">www.example.com</Link>
                                </p>
                            </div>
                        </div>
                        {/* <!--Single Footer Widget End--> */}
                    </div>
                </div>
            </div>
            {/* <!--Footer Top Area End-->
		        <!--Footer Bottom Area Start--> */}
            <div className="footer-bottom-area pt-20 pb-20">
                <div className="container text-center">
                    <p><span>&copy;</span> Copyright, All right reserved by <Link href="#">Astha</Link> - 2018</p>
                </div>
            </div>
            {/* <!--Footer Bottom Area End--> */}
        </div>
    </footer>

)}

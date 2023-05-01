import Image from "next/image";
import Navbar from "../component/Navbar"
import Link from 'next/link'
import Footer from "../component/Footer";
export default function Contact(){
    return(
        <>
        <Navbar/>
        <div className="breadcrumb-area">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                <div className="breadcrumb-content text-center">
                            <h1 className="breadmome-name">Contact</h1>
		                    <ul>
		                        <li><Link href="/">Home</Link></li>
		                        <li className="active">Contact</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="contact-info-area pt-100">
		    <div className="container">
		        <div className="row no-gutters align-items-center">
		            <div className="col-lg-8 col-md-12">
		                <div className="contact-info-here mb-30">
                            <div className="contact-img img-full">
		                        <Image src="/img/contact/contact1.jpg" alt=""width={200} height={100}/>
		                    </div>
		                    <div className="contact-info">
		                        <h2>You Can <br/> Contact With Us</h2>
		                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
		                    </div>
		                </div>
		            </div>
		            <div className="col-lg-4 col-md-12">
		                <div className="contact-info-title">
		                    <h2>Small help together makes better life</h2>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="contact-area pb-100">
		    <div className="container">
		        <div className="row no-gutters">
		            <div className="col-md-12 col-lg-8 gray-bg">
                        <div className="contact-form-wrap">
                            <h3 className="contact-form-title">Get In Touch</h3>
                            <form id="contact-form" action="mail.php" method="post">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="contact-form-style mb-30">
                                            <input name="firstname" placeholder="First Name*" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-form-style mb-30">
                                            <input name="lastname" placeholder="Last Name*" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-form-style mb-30">
                                            <input name="email" placeholder="Email*" type="email"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-form-style mb-30">
                                            <input name="subject" placeholder="Subject*" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="contact-form-style">
                                            <textarea name="message" placeholder="Type your message here.."></textarea>
                                            <button className="sent-btn" type="submit"><span>Send Email</span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p className="form-messege"></p>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 green-bg">
                        <div className="contact-address">
                            <h3 className="ct-title">Contact</h3>
                            <div className="astha-contact-info">
                                <h4>Address</h4>
                                <p>245 Central Tower, 4th Floow New City, South Reazion, California, USA</p>
                            </div>
                            <div className="astha-contact-info">
                                <h4>Email</h4>
                                <p>demo@yourmail.com</p>
                                <p>demo@example.com</p>
                            </div>
                            <div className="astha-contact-info">
                                <h4>Phone No</h4>
                                <p>+880123456789</p>
                                <p>+880173456789</p>
                            </div>
                            <div className="astha-contact-info-web">
                                <p className="web-address">www.demo.com</p>
                            </div>
                        </div>
                    </div>
		        </div>
		    </div>
		</div>
        <Footer/>
        </>
    )
}
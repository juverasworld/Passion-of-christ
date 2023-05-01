import Image from 'next/image'
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Link from 'next/link'
export default function volunteerDetails(){
    return(
        <>
        <section>
            <>
            <Navbar/>
            <div className="breadcrumb-area">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                <div className="breadcrumb-content text-center">
                            <h1 className="breadmome-name">Volunteer Details</h1>
		                    <ul>
		                        <li><Link href="/">Home</Link></li>
		                        <li className="active">Volunteer Details</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="team-details-area pt-100 pb-100">
            <div className="container">
                <div className="row row-25">
                    {/* <!--Team Image--> */}
                    <div className="col-lg-5 col-12">
                        <div className="team-image">
                            <Image src="/img/team/team1.jpg" alt="" width={200} height={10}/>
                        </div>
                    </div>
                    {/* <!--Team Content--> */}
                    <div className="col-lg-7 col-12">
                        <div className="team-content">
                            <h3 className="title">Donald Palmer</h3>
                            <span>Head Off Volunteer</span>
                            <p>Donald Palmer is a Specialist Real Estate Agent with 8 years of   Experience in Real Estate field. He achive success with his honesty,determination, hardwork and commetment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam?</p>
                            <div className="row">
                                <div className="col-md-6 col-12 mb-30">
                                    <h4>Persoanl Info</h4>
                                    <ul>
                                        <li><span>Address:</span>256, 1st AVE, Manchester 125, Noth England</li>
                                        <li><span>Phone:</span><Link href="#">(756) 447 5779</Link></li>
                                        <li><span>Email:</span><Link href="#">info@example.com</Link></li>
                                        <li><span>Web:</span><Link href="#">www.example.com</Link></li>
                                        <li><span>Research:</span>5 Research Published</li>
                                    </ul>
                                    <div className="social">
                                        <Link href="#" className="facebook"><i className="fa fa-facebook"></i></Link>
                                        <Link href="#" className="twitter"><i className="fa fa-twitter"></i></Link>
                                        <Link href="#" className="linkedin"><i className="fa fa-linkedin"></i></Link>
                                        <Link href="#" className="google"><i className="fa fa-google-plus"></i></Link>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 mb-30">
                                    <h4>Volunteer Info</h4>
                                    <ul>
                                        <li><span>Degrees:</span> <span><Link href="#">BSC IN CSE</Link> <Link href="#">MSC IN EEE</Link></span></li>
                                        <li><span>Institute:</span> <span>BPI</span></li>
                                        <li><span>Volunteer Id:</span> 
                                        <span>AB7876A6</span></li>
                                        <li><span>Number:</span> <span><Link href="#">(756) 447 5744</Link></span></li>
                                        <li><span>Address:</span> <span>246, 2st AVE, Manchester 126, Noth England</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
            </>
        </section>
        </>
    )
}
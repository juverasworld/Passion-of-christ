import Image from "next/image";
import Navbar from "../component/Navbar"
import Link from "next/link";
import Footer from "../component/Footer";
export default function volunteer(){
    return (
        <>
        <section>
         <Navbar/>
            <div className="breadcrumb-area">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                <div className="breadcrumb-content text-center">
                            <h1 className="breadmome-name">Volunteer</h1>
		                    <ul>
		                        <li><Link href="/">Home</Link></li>
		                        <li className="active">Volunteer</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="volunteer-area pt-100 pb-100">
		    <div className="container">
		        <div className="row">
		            <div className="col-md-6 col-lg-4 col-12">
		                {/* <!--Single Volunteer Start--> */}
		                <div className="single-volunteer mb-30">
		                    <div className="volunteer-img img-full">
		                        <Image src="/img/team/team1.jpg" alt="" width={200} height={100}/>
		                    </div>
		                    <div className="volunteer-content">
		                        <h3 className="member-name"><Link href="Volunteer-detail">Nata Albarac</Link></h3>
		                        <p className="designation">Coordinator</p>
		                        <ul>
		                            <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
		                        </ul>
		                    </div>
		                </div>
		                {/* <!--Single Volunteer End--> */}
		            </div>
		            <div className="col-md-6 col-lg-4 col-12">
		                {/* <!--Single Volunteer Start--> */}
		                <div className="single-volunteer mb-30">
		                    <div className="volunteer-img img-full">
		                        <Image src="/img/team/team2.jpg" alt="" width={200} height={100}/>
		                    </div>
		                    <div className="volunteer-content">
		                        <h3 className="member-name"><Link href="Volunteer-detail">Anam Anna</Link></h3>
		                        <p className="designation">Modaretor</p>
		                        <ul>
		                            <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
		                        </ul>
		                    </div>
		                </div>
		                {/* <!--Single Volunteer End--> */}
		            </div>
		            <div className="col-md-6 col-lg-4 col-12">
		                {/* <!--Single Volunteer Start--> */}
		                <div className="single-volunteer mb-30">
		                    <div className="volunteer-img img-full">
		                        <Image src="/img/team/team3.jpg" alt="" width={200} height={100}/>
		                    </div>
		                    <div className="volunteer-content">
		                        <h3 className="member-name"><Link href="Volunteer-detail">Elly Roberts</Link></h3>
		                        <p className="designation">Engineer</p>
		                        <ul>
		                            <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
		                        </ul>
		                    </div>
		                </div>
		                {/* <!--Single Volunteer End--> */}
		            </div>
		            <div className="col-md-6 col-lg-4 col-12">
		                {/* <!--Single Volunteer Start--> */}
		                <div className="single-volunteer mb-30">
		                    <div className="volunteer-img img-full">
		                        <Image src="/img/team/team4.jpg" alt="" width={200} height={100}/>
		                    </div>
		                    <div className="volunteer-content">
		                        <h3 className="member-name"><Link href="Volunteer-detail">Raymond Rice</Link></h3>
		                        <p className="designation">Student</p>
		                        <ul>
		                            <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
		                        </ul>
		                    </div>
		                </div>
		                {/* <!--Single Volunteer End--> */}
		            </div>
		            <div className="col-md-6 col-lg-4 col-12">
		                {/* <!--Single Volunteer Start--> */}
		                <div className="single-volunteer mb-30">
		                    <div className="volunteer-img img-full">
		                        <Image src="/img/team/team5.jpg" alt="" width={200} height={100}/>
		                    </div>
		                    <div className="volunteer-content">
		                        <h3 className="member-name"><Link href="Volunteer-detail">Kristy Ewin</Link></h3>
		                        <p className="designation">Photographer</p>
		                        <ul>
		                            <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
		                        </ul>
		                    </div>
		                </div>
		                {/* <!--Single Volunteer End--> */}
		            </div>
		            <div className="col-md-6 col-lg-4 col-12">
		                {/* <!--Single Volunteer Start--> */}
		                <div className="single-volunteer mb-30">
		                    <div className="volunteer-img img-full">
		                        <Image src="/img/team/team6.jpg" alt="" width={200} height={100}/>
		                    </div>
		                    <div className="volunteer-content">
		                        <h3 className="member-name"><Link href="Volunteer-detail">Tillie Evans</Link></h3>
		                        <p className="designation">Teacher</p>
		                        <ul>
		                            <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li>
		                            <li><Link href="#"><i className="fa fa-instagram"></i></Link></li>
		                        </ul>
		                    </div>
		                </div>
		                {/* <!--Single Volunteer End--> */}
		            </div>
		        </div>
		        <div className="row">
		            <div className="col-12">
		                {/* <!--Pagination Start--> */}
		                <div className="product-pagination">
                            <ul>
                                <li className="active"><Link href="#">1</Link></li>
                                <li><Link href="#">2</Link></li>
                                <li><Link href="#">3</Link></li>
                                <li><Link href="#">4</Link></li>
                                <li><Link href="#">5</Link></li>
                                <li><Link href="#"><i className="fa fa-angle-double-right"></i></Link></li>
                            </ul>
                        </div>
		                {/* <!--Pagination End--> */}
		            </div>
		        </div>
		    </div>
		</div>
            <Footer/>
        </section>
        </>
    )
}
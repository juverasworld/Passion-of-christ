import Image from "next/image";
import Navbar from "../component/Navbar"
import Link from 'next/link';
import Footer from "../component/Footer";

export default function eventThree(){
    return(
        <>
        <section>
       <Navbar/>
            <div className="breadcrumb-area">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                <div className="breadcrumb-content text-center">
                            <h1 className="breadmome-name">Event Three Column</h1>
		                    <ul>
		                        <li><Link href="/">Home</Link></li>
		                        <li className="active">Event Three Column</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="our-event-area pt-100 pb-100">
		    <div className="container">
		        <div className="row">
		            <div className="col-md-6 col-lg-4">
		                {/* <!--Single Event Start--> */}
                        <div className="single-event event-three-col mb-30">
                            <div className="event-img img-full">
                                <Image src="/img/event/event2.jpg" alt="" width={140}  height={60}/>
                            </div>
                            <div className="single-event-title">
                                <div className="event-date">
                                    <h4><span>25</span> October 2018</h4>
                                </div>
                                <div className="event-content">
                                    <h3><Link href="/Event-details">Medical Camp for Poor Children</Link></h3>
                                    <p>Town Hall, California.  25 Oct, 2018  at 10 am</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--Single Event End--> */}
		            </div>
		            <div className="col-md-6 col-lg-4">
		                {/* <!--Single Event Start--> */}
                        <div className="single-event event-three-col mb-30">
                            <div className="event-img img-full">
                                <Image src="/img/event/event3.jpg" alt="" width={140}  height={60}/>
                            </div>
                            <div className="single-event-title">
                                <div className="event-date">
                                    <h4><span>30</span> October 2018</h4>
                                </div>
                                <div className="event-content">
                                    <h3><Link href="/Event-details">Pure Water for helpless people</Link></h3>
                                    <p>Town Hall, California.  25 Oct, 2018  at 10 am</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--Single Event End--> */}
		            </div>
		            <div className="col-md-6 col-lg-4">
		                {/* <!--Single Event Start--> */}
                        <div className="single-event event-three-col mb-30">
                            <div className="event-img img-full">
                                <Image src="/img/event/event4.jpg" alt="" width={140}  height={60}/>
                            </div>
                            <div className="single-event-title">
                                <div className="event-date">
                                    <h4><span>12</span> November 2018</h4>
                                </div>
                                <div className="event-content">
                                    <h3><Link href="/Event-details">Food Camp for Poor Children</Link></h3>
                                    <p>Town Hall, California.  25 Oct, 2018  at 10 am</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--Single Event End--> */}
		            </div>
		            <div className="col-md-6 col-lg-4">
		                {/* <!--Single Event Start--> */}
                        <div className="single-event event-three-col mb-30">
                            <div className="event-img img-full">
                                <Image src="/img/event/event5.jpg" alt="" width={140}  height={60}/>
                            </div>
                            <div className="single-event-title">
                                <div className="event-date">
                                    <h4><span>17</span> October 2018</h4>
                                </div>
                                <div className="event-content">
                                    <h3><Link href="/Event-details">Education Camp for Poor Children</Link></h3>
                                    <p>Town Hall, California.  25 Oct, 2018  at 10 am</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--Single Event End--> */}
		            </div>
		            <div className="col-md-6 col-lg-4">
		                {/* <!--Single Event Start--> */}
                        <div className="single-event event-three-col mb-30">
                            <div className="event-img img-full">
                                <Image src="/img/event/event6.jpg" alt="" width={140}  height={60}/>
                            </div>
                            <div className="single-event-title">
                                <div className="event-date">
                                    <h4><span>25</span> October 2018</h4>
                                </div>
                                <div className="event-content">
                                    <h3><Link href="/Event-details">Medical Camp for Poor Children</Link></h3>
                                    <p>Town Hall, California.  25 Oct, 2018  at 10 am</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--Single Event End--> */}
		            </div>
		            <div className="col-md-6 col-lg-4">
		                {/* <!--Single Event Start--> */}
                        <div className="single-event event-three-col mb-30">
                            <div className="event-img img-full">
                                <Image src="/img/event/event7.jpg" alt="" width={140}  height={60}/>
                            </div>
                            <div className="single-event-title">
                                <div className="event-date">
                                    <h4><span>30</span> October 2018</h4>
                                </div>
                                <div className="event-content">
                                    <h3><Link href="/Event-details">Pure Water for helpless people</Link></h3>
                                    <p>Town Hall, California.  25 Oct, 2018  at 10 am</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--Single Event End--> */}
		            </div>
		            <div className="col-md-6 col-lg-4">
		                {/* <!--Single Event Start--> */}
                        <div className="single-event event-three-col mb-30">
                            <div className="event-img img-full">
                                <Image src="/img/event/event8.jpg" alt="" width={140}  height={60}/>
                            </div>
                            <div className="single-event-title">
                                <div className="event-date">
                                    <h4><span>12</span> November 2018</h4>
                                </div>
                                <div className="event-content">
                                    <h3><Link href="/Event-details">Food Camp for Poor Children</Link></h3>
                                    <p>Town Hall, California.  25 Oct, 2018  at 10 am</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--Single Event End--> */}
		            </div>
		            <div className="col-md-6 col-lg-4">
		                {/* <!--Single Event Start--> */}
                        <div className="single-event event-three-col mb-30">
                            <div className="event-img img-full">
                                <Image src="/img/event/event9.jpg" alt="" width={140}  height={60}/>
                            </div>
                            <div className="single-event-title">
                                <div className="event-date">
                                    <h4><span>17</span> October 2018</h4>
                                </div>
                                <div className="event-content">
                                    <h3><Link href="/Event-details">Education Camp for Poor Children</Link></h3>
                                    <p>Town Hall, California.  25 Oct, 2018  at 10 am</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--Single Event End--> */}
		            </div>
		            <div className="col-md-6 col-lg-4">
		                {/* <!--Single Event Start--> */}
                        <div className="single-event event-three-col mb-30">
                            <div className="event-img img-full">
                                <Image src="/img/event/event10.jpg" alt="" width={140}  height={60}/>
                            </div>
                            <div className="single-event-title">
                                <div className="event-date">
                                    <h4><span>17</span> October 2018</h4>
                                </div>
                                <div className="event-content">
                                    <h3><Link href="/Event-details">Education Camp for Poor Children</Link></h3>
                                    <p>Town Hall, California.  25 Oct, 2018  at 10 am</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--Single Event End--> */}
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
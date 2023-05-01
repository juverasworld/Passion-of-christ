import Navbar from "../component/Navbar"
import Image from "next/image";
import Link from 'next/link';
import Footer from "../component/Footer";


export default function event(){
    return(
        <>
        <Navbar/>
        <div className="breadcrumb-area">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                <div className="breadcrumb-content text-center">
                            <h1 className="breadmome-name">Event Details</h1>
		                    <ul>
		                        <li><Link href="/">Home</Link></li>
		                        <li className="active">Event Details</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="event-detils-area pt-100 pb-100">
		    <div className="container">
		        <div className="row">
		            <div className="col-lg-9">
		                <div className="event-left-sidebar-area">
		                    <div className="event-img img-full">
		                        <Image src="/img/event/event-large.jpg" alt="" width={200} height={100}/>
		                    </div>
		                    <div className="event-location">
		                        <div className="event-vanue">
		                            <h4>vanue:</h4>
		                            <i className="fa fa-flag"></i> Sec-10, Uttara, Dhaka-1230
		                        </div>
		                        <div className="event-time">
		                            <h4>date:</h4>
		                            <i className="fa fa-calendar"></i>  20 SEP, 2018
		                        </div>
		                    </div>
		                    <div className="event-description">
		                        <h3>Medical Camp for Poor Children</h3>
		                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using $aptos Content here, content here $aptos, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  $aptos lorem ipsum $aptos will uncover many web sites still in their infancy.</p>
                                <div className="meta-block info">
                                    <div className="block-content">
                                        <div className="info-item">
                                            <div className="icon"><i className="fa fa-clock-o"></i></div>
                                            <div className="content">
                                                <span className="lab">Start time</span>
                                                <span className="val">
                                                2019-03-08 00:00
                                                </span>
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <div className="icon"><i className="fa fa-calendar-o"></i></div>
                                            <div className="content">
                                                <span className="lab">Finished Time</span>
                                                <span className="val">
                                                2019-03-08 02:00
                                                </span>
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <div className="icon"><i className="fa fa-map-marker"></i></div>
                                            <div className="content">
                                                <span className="lab">Address</span>
                                                <span className="val">
                                                Warren Street, New York, USA </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-object">
                                    <h4>Event Description</h4>
                                    <p>Following this year’s successful event, The Big London Night Walk will return on Thursday 2nd March 2017. Register your interest for a Friday night with a difference, and change the lives of hardworking Big Issue vendors on their journeys away from homelessness.</p>
                                </div>
                                <div className="event-goal">
                                    <h4>Event Content</h4>
                                    <ul>
                                        <li>The auction will be started in the morning of Thursday, April 13, 2017 at Center Hotel.</li>
                                        <li>There are over 100 featured pictures that will be auctioned in this charity event.</li>
                                        <li>Expected the starting price of photograph is 20,000$. </li>
                                        <li>The winner is the bidder offering the highest price.</li>
                                        <li>Other bidders also can contribute our fund by our charity box.</li>
                                        <li>All money earned in this charity event will donate to people that our volunteer photographers went to.</li>
                                    </ul>
                                </div>
                                <div className="event-speakers">
                                    <h4>Speakers</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-speaker">
                                                <div className="testimonial-author-info">
                                                    <div className="team-author-deg">
                                                        <h3>Stephen Smith</h3>
                                                        <p>Donetor, CEO of Axion</p>
                                                    </div>
                                                    <div className="author-img">
                                                        <Image src="/img/testimonial/testi1-home-1.jpg" alt="" width={200} height={100}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-speaker">
                                                <div className="testimonial-author-info">
                                                    <div className="team-author-deg">
                                                        <h3>Alisa Thomson</h3>
                                                        <p>Donetor, GM of Retro</p>
                                                    </div>
                                                    <div className="author-img">
                                                        <Image src="/img/testimonial/testi2-home-1.jpg" alt="" width={200} height={100}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
		                    </div>
		                    <div className="question-area mt-50">
                                <h4>Leave a replay</h4>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-input mb-30">
                                                <label>Your Name</label>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input mb-30">
                                                <label>Your Email</label>
                                                <input type="email"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input mb-30">
                                                <label>Your Message</label>
                                                <textarea></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input">
                                                <button className="sent-btn" type="submit">SEND Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
		                </div>
		            </div>
		            <div className="col-lg-3">
		                <div className="sidebar-widget">
                          <div className="single-sidebar-widget">
                                <h4 className="title">Popular Event</h4>
                                <div className="sidebar-rc-post">
                                      <ul>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Event-details"><Image src="/img/rc-img/rc-img4.jpg" alt="" width={200} height={100}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 18,  2018</div>
                                                  <h4><Link href="/Event-details">Children Help</Link></h4>
                                              </div>
                                          </li>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Event-details"><Image src="/img/rc-img/rc-img3.jpg" alt="" width={200} height={100}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 16,  2018</div>
                                                  <h4><Link href="/Event-details">Clean Watter Foundation</Link></h4>
                                              </div>
                                          </li>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Event-details"><Image src="/img/rc-img/rc-img2.jpg" alt="" width={200} height={100}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 14,  2018</div>
                                                  <h4><Link href="/Event-details">Help African children</Link></h4>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                            </div>
                           <div className="single-sidebar-widget">
                                <h4 className="title">Categories</h4>
                                <ul className="course-categoris">
                                    <li>Political Science<span>10</span></li>
                                    <li>Micro Biology<span>15</span></li>
                                    <li>Computer Science<span>05</span></li>
                                    <li>Business Leaders Guide<span>19</span></li>
                                    <li>Become a Product Manage<span>21</span></li>
                                    <li>Business Economics<span>14</span></li>
                                    <li>Language Education<span>13</span></li>
                                    <li>Social Media Management<span>18</span></li>
                                </ul>
                            </div>
                            <div className="single-sidebar-widget">
                                <h4 className="title">Recent Event</h4>
                                <div className="sidebar-rc-post">
                                      <ul>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Event-details"><Image src="/img/rc-img/rc-img1.jpg" alt="" width={200} height={100}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 18,  2018</div>
                                                  <h4><Link href="/Event-details">Children Help</Link></h4>
                                              </div>
                                          </li>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Event-details"><Image src="/img/rc-img/rc-img3.jpg" alt="" width={200} height={100}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 16,  2018</div>
                                                  <h4><Link href="/Event-details">Clean Watter Foundation</Link></h4>
                                              </div>
                                          </li>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Event-details"><Image src="/img/rc-img/rc-img2.jpg" alt="" width={200} height={100}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 14,  2018</div>
                                                  <h4><Link href="/Event-details">Help African children</Link></h4>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="widget-banner img-full">
                                    <Image src="/img/banner/banner2.png" alt="" width={200} height={100}/>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <h4 className="title">Tags</h4>
                                <ul className="tags">
                                    <li><Link href="/">Photoshop</Link></li>
                                    <li><Link href="/">Design</Link></li>
                                    <li><Link href="/">Tutorial</Link></li>
                                    <li><Link href="/">Courses</Link></li>
                                    <li><Link href="/">Premium</Link></li>
                                    <li><Link href="/">Designtuto</Link></li>
                                </ul>
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
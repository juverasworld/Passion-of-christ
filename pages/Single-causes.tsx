import Image from "next/image";
import Navbar from "../component/Navbar"
import Link from "next/link";
import Footer from "../component/Footer";

export default function SingleCause(){
    return(
        <>
        <section className="wrapper">
           <Navbar/>
            <div className="breadcrumb-area">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                <div className="breadcrumb-content text-center">
                            <h1 className="breadmome-name">Single Casuse</h1>
		                    <ul>
		                        <li><Link href="/">Home</Link></li>
		                        <li className="active">Single Casuse</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="single-causes-area pt-100 pb-80">
		    <div className="container">
		        <div className="row">
		            <div className="col-lg-9">
		                <div className="single-casues-right-sidebar">
		                    <div className="casues-img img-full">
		                        <Image src="/img/causes/large-casuse.jpg" alt="" width={200} height={100}/>
		                    </div>
		                    <div className="single-causes-feature">
		                        <ul>
		                            <li><span className="content">Raised:</span> <span className="per-count">$10,000</span></li>
		                            <li><span className="content">Achive:</span> <span className="per-count">50.5%</span></li>
		                            <li><span className="content">Goal:</span> <span className="per-count">$18,000</span></li>
		                        </ul>
		                    </div>
		                    {/* <!--Donation Form Start--> */}
		                    <div className="donation-form quick-donation-section">
                                <form action="#" className="form">
                                    <div className="donate-list">
                                        <div className="box">
                                            <input type="radio" id="c1" name="c1"/>
                                            <label htmlFor="c1"><span className="check-icon"></span> <span className="amount">$100</span></label>
                                        </div>
                                        <div className="box">
                                            <input type="radio" id="c2" name="c1"/>
                                            <label htmlFor="c2"><span className="check-icon"></span> <span className="amount">$200</span></label>
                                        </div>
                                        <div className="box active">
                                            <input type="radio" id="c3" name="c1" checked/>
                                            <label htmlFor="c3"><span className="check-icon"></span> <span className="amount">$500</span></label>
                                        </div>
                                    </div>

                                    <div className="enter-amount">
                                        <input type="text" placeholder="-- Enter Amount --"/>
                                    </div>
                                    <div className="donate-btn">
                                        <button type="submit">Donate</button>
                                    </div>
                                </form>
                            </div> 
                            {/* <!--Donation Form End--> */}
		                    <div className="single-casues-content">
		                        <h3>Education For Underprivileged Children</h3>
		                        <p>Iste natus error sit voluptatem accusantium dolo remque laudantium. perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt ex plicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con se quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
		                        <p> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam</p>
		                        <div className="row">
		                            <div className="col-md-6">
		                                <div className="casues-banner-img img-full mb-30">
		                                    <Image src="/img/causes/f-causes1.jpg" alt="" width={200} height={100}/>
		                                </div>
		                            </div>
		                            <div className="col-md-6">
		                                <div className="casues-banner-img img-full mb-30">
		                                    <Image src="/img/causes/f-causes2.jpg" alt="" width={200} height={100}/>
		                                </div>
		                            </div>
		                            <div className="col-md-6">
		                                <div className="casues-object mb-30">
		                                    <h3>Our Goal</h3>
		                                    <ul>
                                                <li>Over 40 lectures and 60 hours of content</li>
                                                <li>Live Project End to End Software Testing Training Included</li>
                                                <li>Information packed practical training starting from basics.</li>
                                                <li>Course content designed by considering current software testing.</li>
                                                <li>Best suitable for beginners to advanced level users.</li>
                                                <li>Practical assignments at the end of every session.</li>
                                            </ul>
		                                </div>
		                            </div>
		                            <div className="col-md-6">
		                                <div className="casues-object mb-30">
		                                    <h3>Our Challenge</h3>
		                                    <ul>
                                                <li>Over 40 lectures and 60 hours of content</li>
                                                <li>Live Project End to End Software Testing Training Included</li>
                                                <li>Information packed practical training starting from basics.</li>
                                                <li>Course content designed by considering current software testing.</li>
                                                <li>Best suitable for beginners to advanced level users.</li>
                                                <li>Practical assignments at the end of every session.</li>
                                            </ul>
		                                </div>
		                            </div>
		                        </div>
		                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam</p>
		                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fuga sapiente officiis cum quis labore pariatur, sit necessitatibus. Blanditiis, doloribus. Unde illo illum labore, optio!</p>
		                    </div>
		                </div>
		            </div>
		            <div className="col-lg-3">
		                <div className="sidebar-widget">
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
                                <h4 className="title">Upcoming Causes</h4>
                                <div className="sidebar-rc-post">
                              <ul>
                                  <li>
                                      <div className="rc-post-thumb img-full">
                                          <Link href="/Single-causes"><Image src="/img/rc-img/rc-img4.jpg" alt="" width={200} height={100}/></Link>
                                      </div>
                                      <div className="rc-post-content">
                                          <div className="widget-date">january 18,  2018</div>
                                          <h4><Link href="/Single-causes">Children Help</Link></h4>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="rc-post-thumb img-full">
                                          <Link href="/Single-causes"><Image src="/img/rc-img/rc-img2.jpg" alt="" width={200} height={100}/></Link>
                                      </div>
                                      <div className="rc-post-content">
                                          <div className="widget-date">january 16,  2018</div>
                                          <h4><Link href="/Single-causes">Clean Watter Foundation</Link></h4>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="rc-post-thumb img-full">
                                          <Link href="/Single-causes"><Image src="/img/rc-img/rc-img3.jpg" alt="" width={200} height={100}/></Link>
                                      </div>
                                      <div className="rc-post-content">
                                          <div className="widget-date">january 14,  2018</div>
                                          <h4><Link href="/Single-causes">Help African children</Link></h4>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="widget-banner img-full">
                                    <span><Image src="/img/banner/banner2.png" alt="" width={200} height={100}/></span>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <h4 className="title">Tags</h4>
                                <ul className="tags">
                                    <li>Photoshop</li>
                                    <li>Design</li>
                                    <li>Tutorial</li>
                                    <li>Courses</li>
                                    <li>Premium</li>
                                    <li>Designtuto</li>
                                </ul>
                            </div>
                        </div>
		            </div>
		        </div>
		    </div>
		</div>
            <Footer/>
        </section>
        </>
    )
}
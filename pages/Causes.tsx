import Head from 'next/head'
import Image from 'next/image'

// import "bootstrap/dist/css/bootstrap.min.css"
// import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from 'next/link'
import Navbar from "../component/Navbar"
import Footer from '../component/Footer';
// import Footer from '../components/Footer';
// import Header from '../components/Header';


export default function Causes({
    children,
    home
}: {
    children?: React.ReactNode
    home?: boolean
}) {
    return (<>

        <section className='wrapper'>
            <Navbar/>
            
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-content text-center">
                                    <h1 className="breadmome-name">Causes</h1>
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">Causes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our-causes-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            {/* <!--Single Causes Area Start--> */}
                            <div className="col-lg-6 col-xl-3 col-md-6">
                                <div className="single-causes-area mb-30">
                                    <div className="causes-feature">
                                        <ul>
                                            <li><span className="content">Raised</span> <span className="per-count">$10,000</span></li>
                                            <li><span className="content">Achive</span> <span className="per-count">50.5%</span></li>
                                            <li><span className="content">Goal</span> <span className="per-count">$18,000</span></li>
                                        </ul>
                                    </div>
                                    <div className="causes-img img-full">
                                        <Link href="/Single-causes"><Image src="/img/causes/causes1.jpg" alt="" width={200} height={100} /></Link>
                                    </div>
                                    <div className="casues-content">
                                        <h3><Link href="/Single-causes">Education.</Link></h3>
                                        <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Causes Area End-->
		            <!--Single Causes Area Start--> */}
                            <div className="col-lg-6 col-xl-3 col-md-6">
                                <div className="single-causes-area mb-30">
                                    <div className="causes-feature">
                                        <ul>
                                            <li><span className="content">Raised</span> <span className="per-count">$8,500</span></li>
                                            <li><span className="content">Achive</span> <span className="per-count">141.23%</span></li>
                                            <li><span className="content">Goal</span> <span className="per-count">$12,000</span></li>
                                        </ul>
                                    </div>
                                    <div className="causes-img img-full">
                                        <Link href="/Single-causes"><Image src="/img/causes/causes2.jpg" alt="" width={200} height={100} /></Link>
                                    </div>
                                    <div className="casues-content">
                                        <h3><Link href="/Single-causes">Green World.</Link></h3>
                                        <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Causes Area End-->
		            <!--Single Causes Area Start--> */}
                            <div className="col-lg-6 col-xl-3 col-md-6">
                                <div className="single-causes-area mb-30">
                                    <div className="causes-feature">
                                        <ul>
                                            <li><span className="content">Raised</span> <span className="per-count">$15,000</span></li>
                                            <li><span className="content">Achive</span> <span className="per-count">83.33%</span></li>
                                            <li><span className="content">Goal</span> <span className="per-count">$18,000</span></li>
                                        </ul>
                                    </div>
                                    <div className="causes-img img-full">
                                        <Link href="/Single-causes"><Image src="/img/causes/causes3.jpg" alt="" width={200} height={100} /></Link>
                                    </div>
                                    <div className="casues-content">
                                        <h3><Link href="/Single-causes">Accomodation.</Link></h3>
                                        <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Causes Area End-->
		            <!--Single Causes Area Start--> */}
                            <div className="col-lg-6 col-xl-3 col-md-6">
                                <div className="single-causes-area mb-30">
                                    <div className="causes-feature">
                                        <ul>
                                            <li><span className="content">Raised</span> <span className="per-count">$10,000</span></li>
                                            <li><span className="content">Achive</span> <span className="per-count">100%</span></li>
                                            <li><span className="content">Goal</span> <span className="per-count">$10,000</span></li>
                                        </ul>
                                    </div>
                                    <div className="causes-img img-full">
                                        <Link href="/Single-causes"><Image src="/img/causes/causes4.jpg" alt="" width={200} height={100} /></Link>
                                    </div>
                                    <div className="casues-content">
                                        <h3><Link href="/Single-causes">Food.</Link></h3>
                                        <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Causes Area End-->
		            <!--Single Causes Area Start--> */}
                            <div className="col-lg-6 col-xl-3 col-md-6">
                                <div className="single-causes-area mb-30">
                                    <div className="causes-feature">
                                        <ul>
                                            <li><span className="content">Raised</span> <span className="per-count">$10,000</span></li>
                                            <li><span className="content">Achive</span> <span className="per-count">100%</span></li>
                                            <li><span className="content">Goal</span> <span className="per-count">$10,000</span></li>
                                        </ul>
                                    </div>
                                    <div className="causes-img img-full">
                                        <Link href="/Single-causes"><Image src="/img/causes/causes2.jpg" alt="" width={200} height={100} /></Link>
                                    </div>
                                    <div className="casues-content">
                                        <h3><Link href="/Single-causes">Food.</Link></h3>
                                        <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Causes Area End-->
		            <!--Single Causes Area Start--> */}
                            <div className="col-lg-6 col-xl-3 col-md-6">
                                <div className="single-causes-area mb-30">
                                    <div className="causes-feature">
                                        <ul>
                                            <li><span className="content">Raised</span> <span className="per-count">$10,000</span></li>
                                            <li><span className="content">Achive</span> <span className="per-count">100%</span></li>
                                            <li><span className="content">Goal</span> <span className="per-count">$10,000</span></li>
                                        </ul>
                                    </div>
                                    <div className="causes-img img-full">
                                        <Link href="/Single-causes"><Image src="/img/causes/causes4.jpg" alt="" width={200} height={100} /></Link>
                                    </div>
                                    <div className="casues-content">
                                        <h3><Link href="/Single-causes">Green World.</Link></h3>
                                        <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Causes Area End-->
		            <!--Single Causes Area Start--> */}
                            <div className="col-lg-6 col-xl-3 col-md-6">
                                <div className="single-causes-area mb-30">
                                    <div className="causes-feature">
                                        <ul>
                                            <li><span className="content">Raised</span> <span className="per-count">$10,000</span></li>
                                            <li><span className="content">Achive</span> <span className="per-count">100%</span></li>
                                            <li><span className="content">Goal</span> <span className="per-count">$10,000</span></li>
                                        </ul>
                                    </div>
                                    <div className="causes-img img-full">
                                        <Link href="/Single-causes"><Image src="/img/causes/causes3.jpg" alt="" width={200} height={100} /></Link>
                                    </div>
                                    <div className="casues-content">
                                        <h3><Link href="/Single-causes">Accomodation.</Link></h3>
                                        <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Causes Area End-->
		            <!--Single Causes Area Start--> */}
                            <div className="col-lg-6 col-xl-3 col-md-6">
                                <div className="single-causes-area mb-30">
                                    <div className="causes-feature">
                                        <ul>
                                            <li><span className="content">Raised</span> <span className="per-count">$10,000</span></li>
                                            <li><span className="content">Achive</span> <span className="per-count">100%</span></li>
                                            <li><span className="content">Goal</span> <span className="per-count">$10,000</span></li>
                                        </ul>
                                    </div>
                                    <div className="causes-img img-full">
                                        <Link href="/Causes"><Image src="/img/causes/causes2.jpg" alt="" width={200} height={100} /></Link>
                                    </div>
                                    <div className="casues-content">
                                        <h3><Link href="/Causes">Education.</Link></h3>
                                        <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Causes Area End--> */}
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

    </>)
}
import Image from 'next/image'
import Navbar from "../component/Navbar"
import Link from 'next/link'
import Footer from '../component/Footer'
export default function Blog(){
    return(
        <>
        <Navbar/>
        <div className="breadcrumb-area">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                <div className="breadcrumb-content text-center">
                            <h1 className="breadmome-name">Blog</h1>
		                    <ul>
		                        <li><Link href="/">Home</Link></li>
		                        <li className="active">Blog</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="blog-area pt-100 pb-100">
		    <div className="container">
		        <div className="row">
		            {/* <!--Single Blog Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-blog mb-30">
                            <div className="blog-img img-full">
                                <Link href="/Single-blog"><Image src="/img/blog/small/blog1.jpg" alt="" width={200} height={100}/></Link>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>By <Link href="#">Jenifer</Link></li>
                                    <li>25 Oct, 2018 </li>
                                </ul>
                                <h4 className="title"><Link href="/Single-blog">Marathon compitition for fund rising</Link></h4>
                                <Link href="/Single-blog">Continue Reading</Link>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End-->
		            <!--Single Blog Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-blog mb-30">
                            <div className="blog-img img-full">
                                <Link href="/Single-blog"><Image src="/img/blog/small/blog2.jpg" alt="" width={200} height={100}/></Link>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>By <Link href="#">Jenifer</Link></li>
                                    <li>12 Nov, 2018 </li>
                                </ul>
                                <h4 className="title"><Link href="/Single-blog">Africa children need more food</Link></h4>
                                <Link href="/Single-blog">Continue Reading</Link>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End-->
		            <!--Single Blog Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-blog mb-30">
                            <div className="blog-img img-full">
                                <Link href="/Single-blog"><Image src="/img/blog/small/blog3.jpg" alt="" width={200} height={100}/></Link>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>By <Link href="#">Jenifer</Link></li>
                                    <li>15 Apr, 2018 </li>
                                </ul>
                                <h4 className="title"><Link href="/Single-blog">Africa children water and clothes</Link></h4>
                                <Link href="/Single-blog">Continue Reading</Link>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End-->
		            <!--Single Blog Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-blog mb-30">
                            <div className="blog-img img-full">
                                <Link href="/Single-blog"><Image src="/img/blog/small/blog4.jpg" alt="" width={200} height={100}/></Link>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>By <Link href="#">Jenifer</Link></li>
                                    <li>25 Feb, 2018 </li>
                                </ul>
                                <h4 className="title"><Link href="/Single-blog">How to use international network</Link></h4>
                                <Link href="/Single-blog">Continue Reading</Link>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End-->
		            <!--Single Blog Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-blog mb-30">
                            <div className="blog-img img-full">
                                <Link href="/Single-blog"><Image src="/img/blog/small/blog5.jpg" alt="" width={200} height={100}/></Link>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>By <Link href="#">Jenifer</Link></li>
                                    <li>25 Oct, 2018 </li>
                                </ul>
                                <h4 className="title"><Link href="/Single-blog">Africa children run the runway</Link></h4>
                                <Link href="/Single-blog">Continue Reading</Link>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End-->
		            <!--Single Blog Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-blog mb-30">
                            <div className="blog-img img-full">
                                <Link href="/Single-blog"><Image src="/img/blog/small/blog6.jpg" alt="" width={200} height={100}/></Link>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>By <Link href="#">Jenifer</Link></li>
                                    <li>12 Nov, 2018 </li>
                                </ul>
                                <h4 className="title"><Link href="/Single-blog">Nearly 200 million children</Link></h4>
                                <Link href="/Single-blog">Continue Reading</Link>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End-->
		            <!--Single Blog Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-blog mb-30">
                            <div className="blog-img img-full">
                                <Link href="/Single-blog"><Image src="/img/blog/small/blog7.jpg" alt="" width={200} height={100}/></Link>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>By <Link href="#">Jenifer</Link></li>
                                    <li>15 Apr, 2018 </li>
                                </ul>
                                <h4 className="title"><Link href="/Single-blog">Africa children the world were abused</Link></h4>
                                <Link href="/Single-blog">Continue Reading</Link>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End-->
		            <!--Single Blog Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-blog mb-30">
                            <div className="blog-img img-full">
                                <Link href="/Single-blog"><Image src="/img/blog/small/blog8.jpg" alt="" width={200} height={100}/></Link>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>By <Link href="#">Jenifer</Link></li>
                                    <li>25 Feb, 2018 </li>
                                </ul>
                                <h4 className="title"><Link href="/Single-blog">Marathon compitition for fund rising</Link></h4>
                                <Link href="/Single-blog">Continue Reading</Link>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End--> */}
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
        </>
    )
}
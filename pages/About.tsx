
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

export default function About(){
    return(<>
    <section className="wrapper">
        <Navbar/>
        <div className="breadcrumb-area">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                <div className="breadcrumb-content text-center">
                            <h1 className="breadmome-name">About</h1>
		                    <ul>
		                        <li><Link href="/">Home</Link></li>
		                        <li className="active">About</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="about-area pt-100">
		    <div className="container">
		        <div className="row">
		            <div className="col-lg-6 col-12">
		                {/* <!--About Image Area Start--> */}
		                <div className="about-img-area img-full">
		                    <div className="img-title">
		                        <h2>Volunteer</h2>
		                        <Image src="/img/about/about1.png" alt="" width={200} height={100}/>
		                    </div>
		                </div>
		                {/* <!--About Image Area End--> */}
		            </div>
		            <div className="col-lg-6 col-12">
		                {/* <!--About Content Area Start--> */}
		                <div className="about-content">
		                    <h2>Astha</h2>
		                    <h3>We Belive...</h3>
		                    <h4>Happy World, Happy Pepole</h4>
		                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
		                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eligendi expedita, provident cupiditate in excepturi.</p>
		                    <Link className="default-btn" href="/Donet">DONATE</Link>
		                </div>
		                {/* <!--About Content Area End--> */}
		            </div>
		        </div>
		    </div>
		</div>
        <div className="service-area">
		    <div className="container">
		        <div className="row">
		            <div className="col-lg-7">
		                <div className="row">
		                    <div className="col-12">
		                        <div className="service-section-title mb-40">
		                            <h2>What we do</h2>
		                            <h3>Always try to do better for humanity</h3>
		                            <p>Pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally </p>
		                        </div>
		                    </div>
		                </div>
		                <div className="row">
		                    <div className="col-md-6">
		                        {/* <!--Single Service Start--> */}
		                        <div className="single-service mb-30">
		                            <h2 className="service-title">Make Donation</h2>
		                            <p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
		                        </div>
		                        {/* <!--Single Service End--> */}
		                    </div>
		                    <div className="col-md-6">
		                        {/* <!--Single Service Start--> */}
		                        <div className="single-service mb-30">
		                            <h2 className="service-title">Give Scholarship</h2>
		                            <p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
		                        </div>
		                        {/* <!--Single Service End--> */}
		                    </div>
		                    <div className="col-md-6">
		                        {/* <!--Single Service Start--> */}
		                        <div className="single-service mb-30">
		                            <h2 className="service-title">Become a Volunteer</h2>
		                            <p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
		                        </div>
		                        {/* <!--Single Service End--> */}
		                    </div>
		                    <div className="col-md-6">
		                        {/* <!--Single Service Start--> */}
		                        <div className="single-service mb-30">
		                            <h2 className="service-title">Organize Entertainment</h2>
		                            <p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
		                        </div>
		                        {/* <!--Single Service End--> */}
		                    </div>
		                    <div className="col-md-6">
		                        {/* <!--Single Service Start--> */}
		                        <div className="single-service mb-30">
		                            <h2 className="service-title">Food & Water Supply</h2>
		                            <p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
		                        </div>
		                        {/* <!--Single Service End--> */}
		                    </div>
		                    <div className="col-md-6">
		                        {/* <!--Single Service Start--> */}
		                        <div className="single-service mb-30">
		                            <h2 className="service-title">Protect Environment</h2>
		                            <p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
		                        </div>
		                        {/* <!--Single Service End--> */}
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		    <div className="service-image">
		        <Image src="/img/service/service1.png" alt="" width={100} height={100}/>
		    </div>
		</div>
        <div className="donate-product-area pt-90">
		    <div className="container coustom-container">
		        <div className="row coustom-row-two">
		            <div className="col-lg-5 col-xl-6 col-50">
		                <div className="donation-image image-2">
		                    <Image src="/img/donate/donrt2.png" alt="" width={200} height={100}/>
		                </div>
		            </div>
		            <div className="col-lg-7 col-xl-6 col-70">
		                <div className="donet-product">
		                    <div className="row">
		                        <div className="col-md-4">
		                            <div className="donet-shop">
		                                <h2>Product for <br/> Humanity</h2>
		                                <p>Pursue pleasure rationally encounter consequences that extremely pain again</p>
		                                <Link href="/Shop">SHOP NOW</Link>
		                            </div>
		                        </div>
		                        <div className="col-md-4">
		                            <div className="single-donet-product">
		                                <Image src="/img/donate/donet-product1.png" alt="" width={200} height={100}/>
		                            </div>
		                        </div>
		                        <div className="col-md-4">
		                            <div className="single-donet-product">
		                                <Image src="/img/donate/donet-product2.png" alt="" width={140} height={70}/>
		                            </div>
		                        </div>
		                        <div className="col-md-4">
		                            <div className="single-donet-product">
		                                <Image src="/img/donate/donet-product3.png" alt="" width={140} height={70}/>
		                            </div>
		                        </div>
		                        <div className="col-md-4">
		                            <div className="single-donet-product">
		                                <Image src="/img/donate/donet-product4.png" alt="" width={140} height={70}/>
		                            </div>
		                        </div>
		                        <div className="col-md-4">
		                            <div className="single-donet-product">
		                                <Image src="/img/donate/donet-product5.png" alt="" width={140} height={70}/>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="fun-factor-area fun-bg mt-50">
		    <div className="container">
		        <div className="row justify-content-between content-between">
		            <div className="col">
		                <div className="single-funfactor mb-30 text-center">
		                    <div className="fun-facttor-number">
                                <h2><span className="counter">1280</span></h2>
                            </div>
                            <h4 className="counter-title">Successful Projects</h4>
		                </div>
		            </div>
		            <div className="col">
		                <div className="single-funfactor mb-30 text-center">
		                    <div className="fun-facttor-number">
                                <h2><span className="counter">1052</span></h2>
                            </div>
                            <h4 className="counter-title">Total Sponsor</h4>
		                </div>
		            </div>
		            <div className="col">
		                <div className="single-funfactor mb-30 text-center">
		                    <div className="fun-facttor-number">
                                <h2>$<span className="counter">280</span>m</h2>
                            </div>
                            <h4 className="counter-title">Money Donated</h4>
		                </div>
		            </div>
		            <div className="col">
		                <div className="single-funfactor mb-30 text-center">
		                    <div className="fun-facttor-number">
                                <h2><span className="counter">3298</span></h2>
                            </div>
                            <h4 className="counter-title">Total Volunteers</h4>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="testimonial-area pt-100">
		    <div className="container">
                <div className="row testimonial-active">
                    <div className="col-6">
                        {/* <!--Single Testimonial Start--> */}
                        <div className="single-testimonial">
                            <div className="testimonial-content">
                                <p>Pursue pleasure rationally encounter equences that treme painful. Nor again is there anyone  obtain pain of itself, because it is pain</p>
                            </div>
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
                        {/* <!--Single Testimonial End--> */}
                    </div>
                    <div className="col-6">
                        {/* <!--Single Testimonial Start--> */}
                        <div className="single-testimonial">
                            <div className="testimonial-content">
                                <p>Pursue pleasure rationally encounter equences that treme painful. Nor again is there anyone  obtain pain of itself, because it is pain</p>
                            </div>
                            <div className="testimonial-author-info">
                                <div className="team-author-deg">
                                    <h3>Jeniger Hearly</h3>
                                    <p>Donetor, CEO of Axion</p>
                                </div>
                                <div className="author-img">
                                    <Image src="/img/testimonial/testi2-home-1.jpg" alt="" width={140} height={50} />
                                </div>
                            </div>
                        </div>
                        {/* <!--Single Testimonial End--> */}
                    </div>
                </div>
		    </div>
		</div>
        <div className="project-area pt-100 mb-5">
		<div className="container-fluid" style={{ display: "flex", width:"100%" }}>
            {/* <div className="project-area pt-70 mb-5"> */}
            <div className="" >
                {/* <!--Single Project Start--> */}
                <div className="single-project img-full" >
                    <a href="#"><Image src="/img/project/project2.jpg" alt="" width={300} height={200}/></a>
                </div>
                {/* <!--Single Project End--> */}
            </div>
            <div className="">
                {/* <!--Single Project Start--> */}
                <div className="single-project img-full">
                    <a href="#"><Image src="/img/project/project3.jpg" alt="" width={300} height={200} /></a>
                </div>
                {/* <!--Single Project End--> */}
            </div>
            <div className="">
                {/* <!--Single Project Start--> */}
                <div className="single-project img-full">
                    <a href="#"><Image src="/img/project/project4.jpg" alt="" width={300} height={200} /></a>
                </div>
                {/* <!--Single Project End--> */}
            </div>
            <div className="">
                {/* <!--Single Project Start--> */}
                <div className="single-project img-full">
                    <a href="#"><Image src="/img/project/project5.jpg" alt="" width={300} height={200} /></a>
                </div>
                {/* <!--Single Project End--> */}
            </div>
            <div className="">
                {/* <!--Single Project Start--> */}
                <div className="single-project img-full">
                    <a href="#"><Image src="/img/project/project1.jpg" alt="" width={300} height={200} /></a>
                </div>
                {/* <!--Single Project End--> */}
            </div>
            {/* </div> */}
            {/* <div className="project-area pt-70 mb-5">
                <div className="container-fluid p-0">
                    <div className="row no-gutters project-active rows">

                    </div>
                </div>
            </div> */}
            {/* </div> */}
        </div>
		</div>
       <Footer/>
    </section>
    </>)
}
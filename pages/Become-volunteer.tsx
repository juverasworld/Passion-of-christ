import Image from 'next/image'

import Link from 'next/link'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
export default function volunteer() {
    return (
        <>
            <section className='wrapper'>
              <Navbar/>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-content text-center">
                                    <h1 className="breadmome-name">Become a Volunteer</h1>
                                    <ul>
                                        <li><Link href="#">Home</Link></li>
                                        <li className="active">Become a Volunteer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="volunteer-about-area pt-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-6">
                                {/* <!--Volunteer About Image Area Start--> */}
                                <div className="about-img-area img-full">
                                    <div className="img-title">
                                        <Image src="/img/about/about1.png" alt="" width={200} height={100} />
                                    </div>
                                </div>
                                {/* <!--Volunteer About Image Area End--> */}
                            </div>
                            <div className="col-md-12 col-lg-6">
                                {/* <!--Volunteer About Content Area Start--> */}
                                <div className="volunteer-about-content">
                                    <h2>Become a Volunteer</h2>
                                    <h3>Join The Winning Team</h3>
                                    <p>It allows you to gather monthly subscriptions from fans to help fund your creative projects. They also encourage their users to offer rewards to fans as a way to repay them for their support.</p>
                                </div>
                                {/* <!--Volunteer About Content Area End--> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="volunteer-signup-area pt-90 pb-75 gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="signup-title">
                                    <h2>Become <span>Volunteer Now</span></h2>
                                </div>
                                <div className="page-content">
                                    <div className="volunteer-form">
                                        <div className="volunteer-form-title">
                                            <h3>You are new volunteer</h3>
                                        </div>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="volunteer-form-style mb-20">
                                                        <input name="name" placeholder="Full Name" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="volunteer-form-style mb-20">
                                                        <input name="email" placeholder="Eail Address" type="email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="volunteer-form-style mb-20">
                                                        <input name="phone" placeholder="Phone" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="volunteer-form-style mb-20">
                                                        <input name="country" placeholder="Country" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="volunteer-form-style mb-20">
                                                        <input name="address-one" placeholder="Address Line One" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="volunteer-form-style mb-20">
                                                        <input name="address-two" placeholder="Address Line Two" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-12">
                                                    <div className="volunteer-form-style mb-20">
                                                        <select className="wide nice-select">
                                                            <option value="">--</option>
                                                            <option value="New York">New York</option>
                                                            <option value="Chicago">Chicago</option>
                                                            <option value="BangKok">BangKok</option>
                                                            <option value="Bangladesh">Bangladesh</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-12">
                                                    <div className="volunteer-form-style mb-20">
                                                        <select className="wide nice-select">
                                                            <option value="">--</option>
                                                            <option value="New York">New York</option>
                                                            <option value="Chicago">Chicago</option>
                                                            <option value="BangKok">BangKok</option>
                                                            <option value="Bangladesh">Bangladesh</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-12">
                                                    <div className="volunteer-form-style mb-20">
                                                        <input name="zip-code" placeholder="Zip Code" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="volunteer-form-style">
                                                        <textarea name="message" placeholder="Message"></textarea>
                                                        <button className="sent-btn" type="submit">SEND Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
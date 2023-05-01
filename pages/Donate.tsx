import Image from "next/image";
import Link from 'next/link';
import Footer from "../component/Footer";
import Navbar from "../component/Navbar"


export default function Donate() {
    return (
        <>
           <Navbar/>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content text-center">
                                <h1 className="breadmome-name">Donate</h1>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li className="active">Donate</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="donate-form-area pt-100 pb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 me-auto ms-auto">
                            <div className="donate-content">
                                <div className="donate-form-container">
                                    <div className="donate-form-title">
                                        <h3>Donation Details</h3>
                                    </div>
                                    <div className="donation-form quick-donation-section donate-page">
                                        <form action="#" className="form">
                                            <div className="donate-amount">
                                                <p>How much would you like to donate?</p>
                                                <div className="donate-list">
                                                    <div className="box">
                                                        <input type="radio" id="c1" name="c1" />
                                                        <label htmlFor="c1"><span className="check-icon"></span> <span className="amount">$100</span></label>
                                                    </div>
                                                    <div className="box">
                                                        <input type="radio" id="c2" name="c1" />
                                                        <label htmlFor="c2"><span className="check-icon"></span> <span className="amount">$200</span></label>
                                                    </div>
                                                    <div className="box active">
                                                        <input type="radio" id="c3" name="c1" />
                                                        <label htmlFor="c3"><span className="check-icon"></span> <span className="amount">$500</span></label>
                                                    </div>
                                                </div>
                                                <div className="enter-amount">
                                                    <input type="text" placeholder="-- Enter Amount --" />
                                                </div>
                                            </div>
                                            <div className="tg-donetship">
                                                <p>Would you like to make regular donations?</p>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="single-input mb-30">
                                                            <label>First Name</label>
                                                            <input type="text" name="first_name" placeholder="Ex: Join" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="single-input mb-30">
                                                            <label>Last Name</label>
                                                            <input type="text" name="last_name" placeholder="Ex: Doe" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="single-input mb-30">
                                                            <label>Phone Number</label>
                                                            <input type="text" name="night_phone_a" placeholder="Ex: 03 2685987" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="single-input mb-30">
                                                            <label>Email </label>
                                                            <input type="text" name="email" placeholder="Ex: jdoe@zyzzyu.com" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="single-input mb-30">
                                                            <label>Address </label>
                                                            <textarea name="address1" placeholder="Ex: 9 Elm Street"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="single-input mb-30">
                                                            <label>Additional Note </label>
                                                            <textarea name="item_name" placeholder="Ex: Get Volunteer Idea Festival 2017"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="donate-btn">
                                                <button type="submit">Donate</button>
                                            </div>
                                        </form>
                                    </div>
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
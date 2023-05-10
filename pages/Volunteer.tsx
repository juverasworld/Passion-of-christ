import Image from "next/image";
import Navbar from "../component/Navbar"
import Link from "next/link";
import Footer from "../component/Footer";
export default function volunteer() {
	return (
		<>
			<section>
				<Navbar />
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
				<div className="about-area pt-100">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-12">
								{/* <!--About Image Area Start--> */}
								<div className="about-img-area img-full">
									<div className="img-title">
										<h3>VPASSION OF HOPE INTERNATIONAL - USA</h3>
										<p>

											Passion of Hope International - USA (PHI) is a nonprofit corporation in Maryland, USA registered with the Internal Revenue Service as a 501(c)(3) charity. Our vision to collaboratively empower the most marginalized communities has Africa as our starating point.  Through our agricultural hubs and through the Chakula Bora Digital Network, our Hope is to actualize a sustainable future for these communities featuring biodiverse-rich ecosystems and mutual care for one another.

											The community-centered hubs are our 'roots in the soil' towards appropriate development, healht and wellbeing, and livelihood transformation.
										</p>
									</div>
								</div>
								{/* <!--About Image Area End--> */}
							</div>
							<div className="col-lg-6 col-12">
								{/* <!--About Content Area Start--> */}
								<div className="about-content">

									<h3>PASSION OF HOPE - KENYA HUB</h3>
									<h4>Nakuru, Kenya</h4>
									<p>


										Passion of Hope-Kenya, Ltd. (PH-K) is a registered social enterprise nonprofit, limited by guarantee in Kenya. PH-K is an independent organization and the program implementation arm of PHI in Kenya. PHI and PH-K share resources and form a synergy of thought in the pursuit of their mission.

										The vision of PH-K is to be the key catalyst for sustainable wellbeing, inclusion, and equity in Kenya. We are passionately committed to empowering communities to be resilient, creating sustainable wellbeing for themselves and their nation. Through our entrepreneurial activities we reinvest the fruit of these initiatives back into our social mission.</p>
									<Link className="default-btn" href="/Donet">DONATE</Link>
								</div>
								{/* <!--About Content Area End--> */}
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
										<Image src="/img/about/about1.jpg" alt="" width={200} height={100} />
									</div>
								</div>
								{/* <!--About Image Area End--> */}
							</div>
							<div className="col-lg-6 col-12">
								{/* <!--About Content Area Start--> */}
								<div className="about-content">

									<h3>PPASSION OF HOPE - NIGERIA HUB</h3>
									<h4>Ilorin, Nigeria</h4>
									<p>
										Maripha Passion of Hope Foundation (Maripha PHF) is a registered nonprofit organization in Nigeria. Their mission is to empower rural communities in Nigeria towards economic resilience and sustainable wellbeing through collaboration, ecological healing, regenerative agriculture, and value addition.

										As a hub of PHI, Maripha PHF will be a point of connection, convening stakeholders from private and public sectors as well as civil society who are committed to rebuilding Nigeria’s economy from the small farmer up.</p>
									<Link className="default-btn" href="/Donet">DONATE</Link>
								</div>
								{/* <!--About Content Area End--> */}
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
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team1.jpg" alt="" width={200} height={100} />
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
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team2.jpg" alt="" width={200} height={100} />
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
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team3.jpg" alt="" width={200} height={100} />
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
							<div className="col-md-6 col-lg-4 col-12" >
								{/* <!--Single Volunteer Start--> */}
								<div className="single-volunteer mb-30">
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team4.jpg" alt="" width={200} height={100} />
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
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team5.jpg" alt="" width={200} height={100} />
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
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team6.jpg" alt="" width={200} height={100} />
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
							<div className="col-md-6 col-lg-4 col-12">
								{/* <!--Single Volunteer Start--> */}
								<div className="single-volunteer mb-30">
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team7.jpg" alt="" width={200} height={100} />
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
							<div className="col-md-6 col-lg-4 col-12">
								{/* <!--Single Volunteer Start--> */}
								<div className="single-volunteer mb-30">
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team8.jpg" alt="" width={200} height={100} />
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
							<div className="col-md-6 col-lg-4 col-12">
								{/* <!--Single Volunteer Start--> */}
								<div className="single-volunteer mb-30">
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team9.jpg" alt="" width={200} height={100} />
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
							<div className="col-md-6 col-lg-4 col-12">
								{/* <!--Single Volunteer Start--> */}
								<div className="single-volunteer mb-30">
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team9.jpg" alt="" width={200} height={100} />
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
							<div className="col-md-6 col-lg-4 col-12">
								{/* <!--Single Volunteer Start--> */}
								<div className="single-volunteer mb-30">
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team10.jpg" alt="" width={200} height={100} />
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
							<div className="col-md-6 col-lg-4 col-12">
								{/* <!--Single Volunteer Start--> */}
								<div className="single-volunteer mb-30">
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team11.jpg" alt="" width={200} height={100} />
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
							<div className="col-md-6 col-lg-4 col-12">
								{/* <!--Single Volunteer Start--> */}
								<div className="single-volunteer mb-30">
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team12.jpg" alt="" width={200} height={100} />
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
							<div className="col-md-6 col-lg-4 col-12">
								{/* <!--Single Volunteer Start--> */}
								<div className="single-volunteer mb-30">
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team13.jpg" alt="" width={200} height={100} />
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
							<div className="col-md-6 col-lg-4 col-12">
								{/* <!--Single Volunteer Start--> */}
								<div className="single-volunteer mb-30">
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team14.jpg" alt="" width={200} height={100} />
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
							<div className="col-md-6 col-lg-4 col-12">
								{/* <!--Single Volunteer Start--> */}
								<div className="single-volunteer mb-30">
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team15.jpg" alt="" width={200} height={100} />
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
							<div className="col-md-6 col-lg-4 col-12">
								{/* <!--Single Volunteer Start--> */}
								<div className="single-volunteer mb-30">
									<div className="volunteer-img img-full" style={{ height: "300px" }}>
										<Image src="/img/team/team16.jpg" alt="" width={200} height={100} />
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
										{/* <Image src="/img/about/about1.jpg" alt="" width={200} height={100} /> */}
									</div>
								</div>
								{/* <!--About Image Area End--> */}
							</div>
							<div className="col-lg-6 col-12">
								{/* <!--About Content Area Start--> */}
								<div className="about-content">

									{/* <h3>PPASSION OF HOPE - NIGERIA HUB</h3> */}
									<h4>PASSION OF HOPE, KENYA LTD.</h4>
									<p>


										Passion of Hope, Kenya, Ltd (PH-K) is a Kenya registered social enterprise nonprofit, limited by guarantee. Their vision is to be the key catalyst for sustainable wellbeing, inclusion, and equity in Kenya. Founded by Isaac Soita, Executive Director, PH-K has been PHI's on-the-ground partner in Kenya implementing our shared vision for a better world.</p>
									<p>
										PH-K's stated mission is to be "passionately committed to empower communities to be resilient and create sustainable wellbeing for Kenya." PHI and PH-K have a hand-in-glove relationship where we leverage our organizational strengths into a synergized force for impactful social change. We strategize together, implement together, and support each other's development.

										Areas of Collaboration: Beekeeping enterprise; WASH programs: Strategic planning; Resource sharing; Chakula Bora Network</p>
									<Link className="default-btn" href="/Donet">DONATE</Link>
								</div>
								{/* <!--About Content Area End--> */}
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
										<Image src="/img/team/partner1.jpg" alt="" width={200} height={100} />
									</div>
								</div>
								{/* <!--About Image Area End--> */}
							</div>
							<div className="col-lg-6 col-12">
								{/* <!--About Content Area Start--> */}
								<div className="about-content">

									{/* <h3>PPASSION OF HOPE - NIGERIA HUB</h3> */}
									<h4>PASSION OF HOPE, KENYA LTD.</h4>
									<p>


										Passion of Hope, Kenya, Ltd (PH-K) is a Kenya registered social enterprise nonprofit, limited by guarantee. Their vision is to be the key catalyst for sustainable wellbeing, inclusion, and equity in Kenya. Founded by Isaac Soita, Executive Director, PH-K has been PHI's on-the-ground partner in Kenya implementing our shared vision for a better world.</p>
									<p>
										PH-K's stated mission is to be "passionately committed to empower communities to be resilient and create sustainable wellbeing for Kenya." PHI and PH-K have a hand-in-glove relationship where we leverage our organizational strengths into a synergized force for impactful social change. We strategize together, implement together, and support each other's development.

										Areas of Collaboration: Beekeeping enterprise; WASH programs: Strategic planning; Resource sharing; Chakula Bora Network</p>
									<Link className="default-btn" href="/Donet">DONATE</Link>
								</div>
								{/* <!--About Content Area End--> */}
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
										<Image src="/img/team/partner2.jpg" alt="" width={200} height={100} />
									</div>
								</div>
								{/* <!--About Image Area End--> */}
							</div>
							<div className="col-lg-6 col-12">
								{/* <!--About Content Area Start--> */}
								<div className="about-content">
									{/* 






Areas of Collaboration: Beekeeping enterprise; Strategic planning; Resource sharing; Chakula Bora Network

www.cabe-africa.org
*/}
									{/* <h3>PPASSION OF HOPE - NIGERIA HUB</h3> */}
									<h4>CENTRE FOR AFRICAN BIO-ENTREPRENEURSHIP</h4>
									<p>


										The Centre for African Bio-Entrepreneurship (CABE) is a not-for-profit making organization established under the Non-Governmental Co-ordination Act of 1990 of Kenya in 2004 and is located in Nairobi, Kenya. CABE was established as a knowledge-sharing organization that works to enhance the skills of smallholder farmers, women, and youth entrepreneurs in Kenya, Africa to advance their meaningful participation in agriculture and agribusiness activities.</p>
									<p>
										The uniqueness of CABE is its focus on agro-entrepreneurship, market linkages, business development, research, innovations, and policy process. The technical team at CABE and its consulting unit, CABE Africa Limited (CAL), is multi-skilled and multi-disciplinary covering diverse agricultural value chains in Kenya and beyond.

										Areas of Collaboration: Beekeeping enterprise; WASH programs: Strategic planning; Resource sharing; Chakula Bora Network</p>
									<Link className="default-btn" href="/Donet">DONATE</Link>
								</div>
								{/* <!--About Content Area End--> */}
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</section>
		</>
	)
}
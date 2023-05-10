
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

export default function About() {
	return (<>
		<section className="wrapper">
			<Navbar />
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
									<Image src="/img/about/about1.jpg" alt="" width={200} height={100} />
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
								<p>Passion of Hope International (PHI) is a registered non-profit corporation in the state of Maryland, USA. Working in close partnership with local civic and environmental organizations, we purpose to lift and empower communities towards resilence in food sovereignty, livelihoods, wellbeing, and education of the next generation.

									Our vision is to collaboratively empower the most marginalized communities into a sustainable future characterized by biodiverse-rich ecosystems and stewardship of one another.
								</p>
								<p>
									Our focus is in Africa. Why? Poverty indices for the continent of Africa has seen minimal gains over the past century.  Behind the flash of vibrant cities, poverty lies exposed just around the bend or up the road.  According to the World Bank, "extreme poverty is showing few signs of improvement in sub-Saharan Africa, and may keep countries from ending extreme poverty by 2030."</p>
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
							{/* <!--About Content Area Start--> */}
							<div className="about-content">
								<h2>Astha</h2>
								<h3> Poverty Alleviation</h3>
								<h4>Understanding the cycle of poverty is the basis of the PHI model for intervention.</h4>

								{/*



 */}
								<p>Poverty is deprivation. Its forms are economic, social, or psychological. When communities are systemically and systematically deprived of ownership, control, or access to the resources needed to live, there you will find poverty. The community is unable to provide for its minimum nutrition, health, shelter, education, security, leisure, or other vital aspects of living.
								</p>
								<p>

									Poverty is exclusion. When communities are legally or economically excluded from, or denied access to, vital resources and social networks for their survival, there will be poverty.</p>
								<Link className="default-btn" href="/Donet">DONATE</Link>
							</div>
							{/* <!--About Content Area End--> */}
						</div>

						<div className="col-lg-6 col-12">
							{/* <!--About Image Area Start--> */}
							<div className="about-img-area img-full">
								<div className="img-title">
									<h2>Volunteer</h2>
									<Image src="/img/about/about2.jpg" alt="" width={200} height={100} />
								</div>
							</div>
							{/* <!--About Image Area End--> */}
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
									
									<Image src="/img/about/about3.jpg" alt="" width={200} height={100} />
								</div>
							</div>
							{/* <!--About Image Area End--> */}
						</div>
						<div className="col-lg-6 col-12">
							{/* <!--About Content Area Start--> */}
							{/* 


*/}
							<div className="about-content">

								<h4>Appropriate Development</h4>
								<p>We support the empowerment of marginalized communities throughout the world to meet their basic human needs, to have an influential voice in controlling what is appropriate for them, and to have a tangible hope of a better life for the next generation.
								</p>
								<p>
									Furthermore, we support the broader view of appropriate development such as a safe and biodiverse-rich environment, close social and family structures, hope for better quality of life for the next generation, and close connection and alignment with the Creator. "</p>
								<Link className="default-btn" href="/Donet">DONATE</Link>
							</div>
							{/* <!--About Content Area End--> */}
						</div>
					</div>
				</div>
			</div>





			
			<Footer />
		</section>
	</>)
}
import Image from "next/image";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Link from "next/link";
export default function gallery(){
    return(
        <>
        <section className="wrapper">
<Navbar/>
<div className="breadcrumb-area">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                <div className="breadcrumb-content text-center">
                            <h1 className="breadmome-name">Gallery</h1>
		                    <ul>
		                        <li><Link href="/">Home</Link></li>
		                        <li className="active">Gallery</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="gallery-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    {/* <!--Single Gallery Image Start--> */}
                    <div className="col-md-4 col-sm-6">
                        <div className="single-gallery-img mb-30">
                            <Link href="img/gallery/gallery1.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery1.jpg" alt="" width={200} height={100}/></Link>
                        </div>
                    </div>
                    {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                    <div className="col-md-4 col-sm-6">
                        <div className="single-gallery-img mb-30">
                            <Link href="img/gallery/gallery2.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery2.jpg" alt="" width={200} height={100}/></Link>
                        </div>
                    </div>
                    {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                    <div className="col-md-4 col-sm-6">
                        <div className="single-gallery-img mb-30">
                            <Link href="img/gallery/gallery3.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery3.jpg" alt="" width={200} height={100}/></Link>
                        </div>
                    </div>
                    {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                    <div className="col-md-4 col-sm-6">
                        <div className="single-gallery-img mb-30">
                            <Link href="img/gallery/gallery4.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery4.jpg" alt="" width={200} height={100}/></Link>
                        </div>
                    </div>
                    {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                    <div className="col-md-4 col-sm-6">
                        <div className="single-gallery-img mb-30">
                            <Link href="img/gallery/gallery5.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery5.jpg" alt="" width={200} height={100}/></Link>
                        </div>
                    </div>
                    {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                    <div className="col-md-4 col-sm-6">
                        <div className="single-gallery-img mb-30">
                            <Link href="img/gallery/gallery6.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery6.jpg" alt="" width={200} height={100}/></Link>
                        </div>
                    </div>
                    {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                    <div className="col-md-4 col-sm-6">
                        <div className="single-gallery-img mb-30">
                            <Link href="img/gallery/gallery7.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery7.jpg" alt="" width={200} height={100}/></Link>
                        </div>
                    </div>
                    {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                    <div className="col-md-4 col-sm-6">
                        <div className="single-gallery-img mb-30">
                            <Link href="img/gallery/gallery8.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery8.jpg" alt="" width={200} height={100}/></Link>
                        </div>
                    </div>
                    {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                    <div className="col-md-4 col-sm-6">
                        <div className="single-gallery-img mb-30">
                            <Link href="img/gallery/gallery9.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery9.jpg" alt="" width={200} height={100}/></Link>
                        </div>
                    </div>
                    {/* <!--Single Gallery Image End--> */}
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* <!--See More Button Start--> */}
                        <div className="see-more-btn">
                            <Link href="#">see more</Link>
                        </div>
                        {/* <!--See More Button End--> */}
                    </div>
                </div>
            </div>
        </div>
<Footer/>

        </section>
        </>
    )
}
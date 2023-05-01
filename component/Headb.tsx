import Link from "next/link";
import Image from "next/image";


export default function Header({ showMobileNav, setShowMobileNav }) {
    return (
      <header>
		    {/* <!--Default Header Area Start--> */}
		    <div className="default-header-area ">
		        <div className="container">
		            <div className="row align-items-center">
		                {/* <!--Header Logo Start--> */}
                        <div className="col-lg-3 col-md-6">
                            <div className="header-logo">
                                <Link href="index.html"><Image src="/img/logo/logo.png" alt="" layout="fill"/></Link>
                            </div>
                        </div>
                        {/* <!--Header Logo End-->
                        <!--Header Menu Start--> */}
                        <div className="col-lg-7  d-none d-lg-block text-end"> 
                            <div className="header-menu-area">
                                <nav>
                                    <ul className="main-menu">
                                        <li className="active"><Link href="index.html">HOME</Link>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><Link href="index.html">Home Page 1</Link></li>
                                                <li><Link href="index-2.html">Home Page 2</Link></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><Link href="causes.html">CAUSES</Link>
                                           {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><Link href="single-causes.html">Causes Details</Link></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End-->  */}
                                        </li>
                                        <li><Link href="event.html">EVENTS</Link>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><Link href="event-three-column.html">Event Three Column</Link></li>
                                                <li><Link href="event-details.html">Event Details</Link></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><Link href="blog.html">BLOG</Link>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><Link href="blog.html">Blog</Link></li>
                                                <li><Link href="single-blog.html">Blog details</Link></li>
                                                <li><Link href="blog-right-sidebar.html">Blog Right Sidebar</Link></li>
                                                <li><Link href="blog-left-sidebar.html">Blog Left Sidebar</Link></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><Link href="shop.html">SHOP</Link>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><Link href="single-product.html">Single Product</Link></li>
                                                <li><Link href="cart.html">Shopping Cart</Link></li>
                                                <li><Link href="wishlist.html">Wishlist</Link></li>
                                                <li><Link href="checkout.html">checkout</Link></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><Link href="#">PAGES</Link>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><Link href="about.html">About</Link></li>
                                                <li><Link href="volunteer.html">Volunteer</Link></li>
                                                <li><Link href="volunteer-details.html">Volunteer Details</Link></li>
                                                <li><Link href="become-volunteer.html">Become Volunteer</Link></li>
                                                <li><Link href="gallery.html">Gallery</Link></li>
                                                <li><Link href="gallery-filtering.html">Gallery Filtering</Link></li>
                                                <li><Link href="gallery-full-width.html">Gallery Full Width</Link></li>
                                                <li><Link href="gallery-masonry.html">Gallery Masonry</Link></li>
                                                <li><Link href="donet.html">Donet</Link></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><Link href="contact.html">CONTACT</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        {/* <!--Header Menu End-->
                        <!--Book Now Area Start--> */}
                        <div className="col-lg-2 col-md-6">
                            <div className="book-now-btn text-end">
                                <Link href="donet.html">DONATE</Link>
                            </div>
                        </div>
                        {/* <!--Book Now Area Start--> */}
		            </div>
		            <div className="row">
                        <div className="col-12">  
                            {/* <!--Mobile Menu Area Start--> */}
                            <div className="header-container">
      <div className="mobile">
        <div className="inner-container">
          <div
            className="navbrand logo"
            onClick={() => {
              setTimeout(() => {
              //   setShowMobileNav(false);
              }, 500);
            }}
          >
            <div className={`menu-bar ${showMobileNav && 'animate'}`} onClick={() => setShowMobileNav(val => !val)}>
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
                            {/* <!--Mobile Menu Area End--> */}
                        </div>
                    </div>
		        </div>
		    </div>
		    {/* <!--Default Header Area End--> */}
		</header>
      );
    }
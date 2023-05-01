import Image from "next/image";
import Navbar from "../component/Navbar"
import Link from "next/link";
import Footer from "../component/Footer";
export default function wishList() {
    return (
        <>

            <section>
               <Navbar/>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-content text-center">
                                    <h1 className="breadmome-name">Wishlist</h1>
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">Wishlist</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wishlist-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <form action="#">
                                    <div className="table-content table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="astha-product-remove">remove</th>
                                                    <th className="astha-product-thumbnail">images</th>
                                                    <th className="cart-product-name">Product</th>
                                                    <th className="astha-product-price">Unit Price</th>
                                                    <th className="astha-product-stock-status">Stock Status</th>
                                                    <th className="astha-product-add-cart">add to cart</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="astha-product-remove"><Link href="#"><i className="fa fa-times"></i></Link></td>
                                                    <td className="astha-product-thumbnail"><Link href="#"><Image src="/img/rc-img/product-rc-img1.jpg" alt="" width={200} height={100} /></Link></td>
                                                    <td className="astha-product-name"><Link href="#">Nullam maximus</Link></td>
                                                    <td className="astha-product-price"><span className="amount">$23.39</span></td>
                                                    <td className="astha-product-stock-status"><span className="in-stock">in stock</span></td>
                                                    <td className="astha-product-add-cart"><Link href="#">add to cart</Link></td>
                                                </tr>
                                                <tr>
                                                    <td className="astha-product-remove"><Link href="#"><i className="fa fa-times"></i></Link></td>
                                                    <td className="astha-product-thumbnail"><Link href="#"><Image src="/img/rc-img/product-rc-img2.jpg" alt="" width={200} height={100} /></Link></td>
                                                    <td className="astha-product-name"><Link href="#">Natus erro</Link></td>
                                                    <td className="astha-product-price">
                                                        <span className="amount">$30.50</span></td>
                                                    <td className="astha-product-stock-status"><span className="in-stock">in stock</span></td>
                                                    <td className="astha-product-add-cart"><Link href="#">add to cart</Link></td>
                                                </tr>
                                                <tr>
                                                    <td className="astha-product-remove"><Link href="#"><i className="fa fa-times"></i></Link></td>
                                                    <td className="astha-product-thumbnail"><Link href="#"><Image src="/img/rc-img/product-rc-img3.jpg" alt="" width={200} height={100} /></Link></td>
                                                    <td className="astha-product-name"><Link href="#">Sit voluptatem</Link></td>
                                                    <td className="astha-product-price"><span className="amount">$40.19</span></td>
                                                    <td className="astha-product-stock-status"><span className="out-stock">out stock</span></td>
                                                    <td className="astha-product-add-cart"><Link href="#">add to cart</Link></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
               <Footer/>
            </section></>
    )
}
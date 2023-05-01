
import Navbar from '../component/Navbar'
import Image from "next/image"
import Link from 'next/link';
import Footer from '../component/Footer';
export default function Cart(){
    return(
        <>
        <Navbar/>
        
<div className="breadcrumb-area">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                <div className="breadcrumb-content text-center">
                            <h1 className="breadmome-name">Shopping Cart</h1>
		                    <ul>
		                        <li><Link href="/">Home</Link></li>
		                        <li className="active">Shopping Cart</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>

        <div className="shopping-cart-area pt-100 pb-100">
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
                                            <th className="astha-product-quantity">Quantity</th>
                                            <th className="astha-product-subtotal">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="astha-product-remove"><Link href="#"><i className="fa fa-times"></i></Link></td>
                                            <td className="astha-product-thumbnail"><Link href="#">
                                                
                                                <Image src="/img/rc-img/product-rc-img1.jpg" alt="" width={200} height={100}/></Link></td>
                                            <td className="astha-product-name"><Link href="#">Aliquam lobortis est</Link></td>
                                            <td className="astha-product-price"><span className="amount">$70.00</span></td>
                                            <td className="astha-product-quantity">
                                                <input value="1" type="number"/>
                                            </td>
                                            <td className="product-subtotal"><span className="amount">$70.00</span></td>
                                        </tr>
                                        <tr>
                                            <td className="astha-product-remove"><Link href="#"><i className="fa fa-times"></i></Link></td>
                                            <td className="astha-product-thumbnail"><Link href="#">
                                                <Image src="/img/rc-img/product-rc-img2.jpg" alt="" width={200} height={100}/></Link></td>
                                            <td className="astha-product-name"><Link href="#">Cras neque metus</Link></td>
                                            <td className="astha-product-price"><span className="amount">$60.50</span></td>
                                            <td className="astha-product-quantity">
                                                <input value="1" type="number"/>
                                            </td>
                                            <td className="product-subtotal"><span className="amount">$60.50</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="coupon-all">
                                        <div className="coupon">
                                            <input id="coupon_code" className="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text"/>
                                            <input className="button" name="apply_coupon" value="Apply coupon" type="submit"/>
                                        </div>
                                        <div className="coupon2">
                                            <input className="button" name="update_cart" value="Update cart" type="submit"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 ml-auto">
                                    <div className="cart-page-total">
                                        <h2>Cart totals</h2>
                                        <ul>
                                            <li>Subtotal <span>$130.00</span></li>
                                            <li>Total <span>$130.00</span></li>
                                        </ul>
                                        <Link href="/Checkout">Proceed to checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
        </>
    )
}

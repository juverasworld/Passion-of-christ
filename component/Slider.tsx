import React from 'react';
import Image from "next/image";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  const card1 = [

    {
        title1: 'Medical Camp for Poor Childrenas',
        text1:
            "Central Hall, California.  25 Oct, 2018  at 10 am",
        image:
            "/img/event/event1.jpg",
    },
    {
        title1: 'Medical Camp for Poor Childrens',
        text1:
            "Central Hall, California.  25 Oct, 2018  at 10 am",
        image1:
            "/img/event/event2.jpg",
    },
    {
        title1: 'Medical Camp for Poor Children',
        text1:
            "Central Hall, California.  25 Oct, 2018  at 10 am",
        image1:
            "/img/event/event3.jpg",
    },
    {
        title1: 'Pure Drinking Water for helpless peoples',
        text1:
            "Midland Cricket Ground.",
        image1:
            "/img/event/event4.jpg",
    },
    {
        title1: 'Medical Camp for Poor Children',
        text1:
            "Central Hall, California.  25 Oct, 2018  at 10 am",
        image:
            "/img/event/event4.jpg",
    }
];

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
    //   title: "Let's teach them letter, the world will be better",
      text:
        "Let's teach them letter, the world will be better",
      image:
      "/img/slider/slide1-home-1.jpg",
    },
    {
    //   title: 'Design Projects 2',
      text:
        "Small help together makes better life.",
      image:
      "/img/slider/slide2-home-1.jpg",
    }
  ];

  return (
    <div className="container-fluid"  >
      <Box
        position={'relative'}
        height={'600px'}
        width={'full'}
        overflow={'hidden'}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
            //   height={'6xl'}
              position="relative"
              // backgroundPosition="center"
              backgroundRepeat="no-repeat"
              // minW={"max-content"}
              m={0}
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}>
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={'full'}
                  maxW={'lg'}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)">
                  <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    {/* {card.title} */}
                  </Heading>
                  <Heading fontSize={{ base: '3xl', lg: '4xl' }} color="yellow.400">
                    {card.text}
                  </Heading>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
      <div className="feature-area fix mb-10">
        <div className="container-fluid p-0">
            <div className="row coustom-row">
                <div className="single-feature col-md-4">
                    {/* <!--Single Feature Area Start--> */}
                    <div className="single-feature-inner">
                        <h2>Get our Promortional <span className="text-underline">Products</span> and help the humaity</h2>
                    </div>
                    {/* <!--Single Feature Area End--> */}
                </div>
                <div className="single-feature col-md-4">
                    {/* <!--Single Feature Area Start--> */}
                    <div className="single-feature-inner">
                        <h2>Our Upcomming <span className="text-underline">Events Date</span>: 3rd October, 2018 <span className="text-underline">Venu</span>: Romance Hall</h2>
                    </div>
                    {/* <!--Single Feature Area End--> */}
                </div>
                <div className="single-feature col-md-4">
                    {/* <!--Single Feature Area Start--> */}
                    <div className="single-feature-inner">
                        <h2>Our Latest <span className="text-underline">Achivement Fund’s</span> $3,85,65,250 <span className="text-underline">Member’s</span> 50,000</h2>
                    </div>
                    {/* <!--Single Feature Area End--> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!--Feature Area End-->
    <!--Service Area Start--> */}
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
                                <p className="single-service-p">Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
                            </div>
                            {/* <!--Single Service End--> */}
                        </div>
                        <div className="col-md-6">
                            {/* <!--Single Service Start--> */}
                            <div className="single-service mb-30">
                                <h2 className="service-title">Give Scholarship</h2>
                                <p className="single-service-p">Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
                            </div>
                            {/* <!--Single Service End--> */}
                        </div>
                        <div className="col-md-6">
                            {/* <!--Single Service Start--> */}
                            <div className="single-service mb-30">
                                <h2 className="service-title">Become a Volunteer</h2>
                                <p className="single-service-p">Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
                            </div>
                            {/* <!--Single Service End--> */}
                        </div>
                        <div className="col-md-6">
                            {/* <!--Single Service Start--> */}
                            <div className="single-service mb-30">
                                <h2 className="service-title">Organize Entertainment</h2>
                                <p className="single-service-p">Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
                            </div>
                            {/* <!--Single Service End--> */}
                        </div>
                        <div className="col-md-6">
                            {/* <!--Single Service Start--> */}
                            <div className="single-service mb-30">
                                <h2 className="service-title">Food & Water Supply</h2>
                                <p className="single-service-p">Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
                            </div>
                            {/* <!--Single Service End--> */}
                        </div>
                        <div className="col-md-6">
                            {/* <!--Single Service Start--> */}
                            <div className="single-service mb-30">
                                <h2 className="service-title">Protect Environment</h2>
                                <p className="single-service-p">Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
                            </div>
                            {/* <!--Single Service End--> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="service-image">
            <Image src="/img/service/service1.png" alt="" width={400} height={600} />
        </div>
    </div>
    {/* <!--Service Area End-->
		<!--Our Causes Area Start--> */}
		<div className="our-causes-area pt-115">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                {/* <!--Section Title Start--> */}
		                <div className="section-title mb-60">
		                    <h2>Our Causes</h2>
		                    <p>Pursue pleasure rationally encounter consequences that extremely painful. Nor again is there anyone who loves or pursues </p>
		                </div>
		                {/* <!--Section Title End--> */}
		            </div>
		        </div>
		        <div className="row">
		            {/* <!--Single Causes Area Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-causes-area mb-30">
		                    <div className="causes-feature">
		                        <ul>
		                            <li><span className="content">Raised</span> <span className="per-count">$10,000</span></li>
		                            <li><span className="content">Achive</span> <span className="per-count">50.5%</span></li>
		                            <li><span className="content">Goal</span> <span className="per-count">$18,000</span></li>
		                        </ul>
		                    </div>
		                    <div className="causes-img img-full">
		                        <a href="single-causes.html"><Image src="/img/causes/causes1.jpg" alt="" width={300} height={250}/></a>
		                    </div>
		                    <div className="casues-content">
		                        <h3><a href="single-causes.html">Education.</a></h3>
		                        <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
		                    </div>
		                </div>
		            </div>
		            {/* <!--Single Causes Area End-->
		            <!--Single Causes Area Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-causes-area mb-30">
		                    <div className="causes-feature">
		                        <ul>
		                            <li><span className="content">Raised</span> <span className="per-count">$8,500</span></li>
		                            <li><span className="content">Achive</span> <span className="per-count">141.23%</span></li>
		                            <li><span className="content">Goal</span> <span className="per-count">$12,000</span></li>
		                        </ul>
		                    </div>
		                    <div className="causes-img img-full">
		                        <a href="single-causes.html"><Image src="/img/causes/causes2.jpg" alt="" width={300} height={250}/></a>
		                    </div>
		                    <div className="casues-content">
		                        <h3><a href="single-causes.html">Green World.</a></h3>
		                        <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
		                    </div>
		                </div>
		            </div>
		            {/* <!--Single Causes Area End-->
		            <!--Single Causes Area Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-causes-area mb-30">
		                    <div className="causes-feature">
		                        <ul>
		                            <li><span className="content">Raised</span> <span className="per-count">$15,000</span></li>
		                            <li><span className="content">Achive</span> <span className="per-count">83.33%</span></li>
		                            <li><span className="content">Goal</span> <span className="per-count">$18,000</span></li>
		                        </ul>
		                    </div>
		                    <div className="causes-img img-full">
		                        <a href="single-causes.html"><Image src="/img/causes/causes3.jpg" alt="" width={300} height={250}/></a>
		                    </div>
		                    <div className="casues-content">
		                        <h3><a href="single-causes.html">Accomodation.</a></h3>
		                        <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
		                    </div>
		                </div>
		            </div>
		            {/* <!--Single Causes Area End-->
		            <!--Single Causes Area Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-causes-area mb-30">
		                    <div className="causes-feature">
		                        <ul>
		                            <li><span className="content">Raised</span> <span className="per-count">$10,000</span></li>
		                            <li><span className="content">Achive</span> <span className="per-count">100%</span></li>
		                            <li><span className="content">Goal</span> <span className="per-count">$10,000</span></li>
		                        </ul>
		                    </div>
		                    <div className="causes-img img-full">
		                        <a href="single-causes.html"><Image src="/img/causes/causes4.jpg" alt="" width={300} height={250}/></a>
		                    </div>
		                    <div className="casues-content">
		                        <h3><a href="single-causes.html">Food.</a></h3>
		                        <p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
		                    </div>
		                </div>
		            </div>
		            {/* <!--Single Causes Area End--> */}
		        </div>
		    </div>
		</div>
		{/* <!--Our Causes Area End-->
		<!--Donate Product Area Start--> */}
		<div className="donate-product-area pt-60">
		    <div className="container coustom-container">
		        <div className="row coustom-row-two">
		            <div className="col-lg-5 col-xl-6 col-50">
		                <div className="donation-image">
		                    <Image src="/img/donate/donrt1.png" alt="" width={300} height={250}/>
		                </div>
		            </div>
		            <div className="col-lg-7 col-xl-6 col-70">
		                <div className="donet-product">
		                    <div className="row">
		                        <div className="col-md-4">
		                            <div className="donet-shop">
		                                <h2>Product for <br/> Humanity</h2>
		                                <p>Pursue pleasure rationally encounter consequences that extremely pain again</p>
		                                <a href="#">SHOP NOW</a>
		                            </div>
		                        </div>
		                        <div className="col-md-4">
		                            <div className="single-donet-product">
		                                <Image src="/img/donate/donet-product1.png" alt="" width={300} height={250}/>
		                            </div>
		                        </div>
		                        <div className="col-md-4">
		                            <div className="single-donet-product">
		                                <Image src="/img/donate/donet-product2.png" alt="" width={300} height={250}/>
		                            </div>
		                        </div>
		                        <div className="col-md-4">
		                            <div className="single-donet-product">
		                                <Image src="/img/donate/donet-product3.png" alt="" width={300} height={250}/>
		                            </div>
		                        </div>
		                        <div className="col-md-4">
		                            <div className="single-donet-product">
		                                <Image src="/img/donate/donet-product4.png" alt="" width={300} height={250}/>
		                            </div>
		                        </div>
		                        <div className="col-md-4">
		                            <div className="single-donet-product">
		                                <Image src="/img/donate/donet-product5.png" alt="" width={300} height={250}/>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
		{/* <!--Donate Product Area End-->
		<!--Event Area Start-->   */}
  <div className="">
            <div className="container">
                <div className="row ">
                    {/* <!--Event Slider Start--> */}
                    <Box
                    display={{  base: 'none' }}
                                    position={'relative'}
                                    height={'500px'}
                                    width={'50%'}
                                    
                                    overflow={'hidden'}>
                                    {/* CSS files for react-slick */}
                                    <link
                                        rel="stylesheet"
                                        type="text/css"
                                        charSet="UTF-8"
                                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                                    />
                                    <link
                                        rel="stylesheet"
                                        type="text/css"
                                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                                    />
                                    {/* Left Icon */}
                                    <IconButton
                                        aria-label="left-arrow"
                                        variant="ghost"
                                        position="absolute"
                                        left="10%"
                                        top="80%"
                                        transform={'translate(0%, -50%)'}
                                        zIndex={2}
                                        onClick={() => slider?.slickPrev()}>
                                        <BiLeftArrowAlt size="40px" />
                                    </IconButton>
                                    {/* Right Icon */}
                                    <IconButton
                                        aria-label="right-arrow"
                                        variant="ghost"
                                        position="absolute"
                                        right="10%"
                                        top="80%"
                                        transform={'translate(0%, -50%)'}
                                        zIndex={2}
                                        onClick={() => slider?.slickNext()}>
                                        <BiRightArrowAlt size="40px" />
                                    </IconButton>
                                    {/* Slider */}
                                    <Slider {...settings} ref={(slider) => setSlider(slider)}>
                                        {card1.map((card, index) => (
                                            <Box
                                                key={index}
                                                // height={'6xl'}
                                                position="relative"
                                                // backgroundPosition="center"
                                                backgroundRepeat="no-repeat"
                                                backgroundSize="cover"
                                                backgroundImage={`url(${card.image1})`}>
                                                {/* This is the block you need to change, to customize the caption */}
                                                <Container size="container.lg" height="600px" position="relative">
                                                    <Stack
                                                        spacing={6}
                                                        w={'full'}
                                                        // maxW={'lg'}
                                                        position="absolute"
                                                        top="70%"
                                                        // px="10px"
                                                        rounded={'xl'}
                                                        backgroundColor='green'
                                                        transform="translate(0, -50%)">
                                                        <Text fontSize={{ base: 'xl', md: 'md', lg: 'md' }} color="Red" >
                                                            {card.title1}
                                                        </Text>
                                                        <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                                                            {card.text1}
                                                        </Text>
                                                    </Stack>
                                                </Container>
                                            </Box>
                                        ))}
                                    </Slider>
                                </Box>         
                    <div className="">
                        
                        {/* <!--Event Slider End-->
                <!--Event Description Start--> */}
                        <div className="container" >
                            {/* <!--Section Title Start--> */}
                            <div className="section-title text-left">
                                <h2>Our Causes</h2>
                            </div>
                            {/* <!--Section Title End--> */}
                            <div className="event-description">
                                <h4>You can know about our latest and upcoming events information clearly...</h4>
                                <p>Pursue pleasure rationally encounter consequences that treme painful. Nor again is there anyone  obtain pain of itself, because it is pain, but because occasionally circumstances occue</p>
                                <p>Events are pleasure rationally encounter consequences that treme painful. Nor again is there anyone  obtain pain </p>
                                <a className="default-btn" href="#">KNOW MORE</a>
                            </div>
                        </div>
                    </div>
                    {/* <!--Event Description Start--> */}
                </div>
            </div>
        </div>
		{/* <!--Event Area End-->
		<!--Fun Factor Area Start--> */}
		<div className="fun-factor-area fun-bg mt-100">
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
                                    <h3>Jeniger Hearly</h3>
                                    <p>Donetor, CEO of Axion</p>
                                </div>
                                <div className="author-img">
                                    <Image src="/img/testimonial/testi2-home-1.jpg" alt="" width={300} height={250}/>
                                </div>
                            </div>
                        </div>
                        {/* <!--Single Testimonial End--> */}
                    </div>
                    <div className="col-6 testimonial-none">
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
                                    <Image src="/img/testimonial/testi1-home-1.jpg" alt="" width={300} height={250}/>
                                </div>
                            </div>
                        </div>
                        {/* <!--Single Testimonial End--> */}
                    </div>
                    
                </div>
		    </div>
		</div>
		{/* <!--Testimonial Area End-->
		<!--Our Blog Area Start--> */}
		<div className="our-blog-area pt-115">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                {/* <!--Section Title Start--> */}
		                <div className="section-title mb-60">
		                    <h2>Our Blog</h2>
		                    <p>Pursue pleasure rationally encounter consequences that extremely painful. Nor again is there anyone who loves or pursues </p>
		                </div>
		                {/* <!--Section Title End--> */}
		            </div>
		        </div>
		        <div className="row">
		            {/* <!--Single Blog Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-blog mb-30">
                            <div className="blog-img img-full">
                                <a href="single-blog.html"><Image src="/img/blog/small/blog1.jpg" alt="" width={300} height={250}/></a>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>By <a href="#">Jenifer</a></li>
                                    <li>25 Oct, 2018 </li>
                                </ul>
                                <h4 className="title"><a href="single-blog.html">Marathon compitition for fund rising</a></h4>
                                <a href="single-blog.html">Continue Reading</a>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End-->
		            <!--Single Blog Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-blog mb-30">
                            <div className="blog-img img-full">
                                <a href="single-blog.html"><Image src="/img/blog/small/blog2.jpg" alt="" width={300} height={250}/></a>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>By <a href="#">Jenifer</a></li>
                                    <li>12 Nov, 2018 </li>
                                </ul>
                                <h4 className="title"><a href="single-blog.html">Africa Children Need More Food</a></h4>
                                <a href="single-blog.html">Continue Reading</a>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End-->
		            <!--Single Blog Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-blog mb-30">
                            <div className="blog-img img-full">
                                <a href="single-blog.html"><Image src="/img/blog/small/blog3.jpg" alt="" width={300} height={250}/></a>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>By <a href="#">Jenifer</a></li>
                                    <li>15 Apr, 2018 </li>
                                </ul>
                                <h4 className="title"><a href="single-blog.html">Africa Children Water And Clothes</a></h4>
                                <a href="single-blog.html">Continue Reading</a>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End-->
		            <!--Single Blog Start--> */}
		            <div className="col-lg-6 col-xl-3 col-md-6">
		                <div className="single-blog mb-30">
                            <div className="blog-img img-full">
                                <a href="single-blog.html"><Image src="/img/blog/small/blog4.jpg" alt="" width={300} height={250}/></a>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>By <a href="#">Jenifer</a></li>
                                    <li>25 Feb, 2018 </li>
                                </ul>
                                <h4 className="title"><a href="single-blog.html">Marathon compitition for fund rising</a></h4>
                                <a href="single-blog.html">Continue Reading</a>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End--> */}
		        </div>
		    </div>
		</div>
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
  );
}
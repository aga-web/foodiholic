import React from "react";
import { Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <Head title="Foodinesia — PT. Foodiholic Group Indonesia" />

            <div className="foodinesia-page">

               {/* =========================
                NAVBAR
                ========================== */}

                <nav className="navbar">
                <div className="navbar-inner">

                    <a href="#" className="brand">
                        FOODINESIA
                    </a>
                    <div className="nav-links">

                        <a href="#about"> About </a>

                        <a href="#business">
                            Business
                        </a>

                        <a href="#brands">
                            Brands
                        </a>

                        <a href="#location">
                            Location
                        </a>

                        <a href="#contact">
                            Contact
                        </a>

                    </div>

                    <a href="#contact" className="nav-button">
                        <span>Let's talk</span>
                        <span>↗</span>
                    </a>

                </div>


                </nav>


                {/* =========================
                HERO
                ========================== */}
                <main>
                <section className="hero">

                    <div className="hero-background"></div>

                    <div className="hero-glow hero-glow-one"></div>
                    <div className="hero-glow hero-glow-two"></div>


                    <div className="hero-content">

                        <div className="hero-eyebrow">
                            <span className="hero-eyebrow-dot"></span>

                            <p>
                                PT. FOODIHOLIC GROUP INDONESIA
                            </p>
                        </div>


                        <h1>
                            Growing
                            <br />
                            <span>through food.</span>
                        </h1>


                        <p className="hero-description">
                            Building modern food and beverage brands
                            from East Kalimantan, Indonesia.
                        </p>


                        <div className="hero-actions">

                            <a
                                href="#brands"
                                className="primary-button"
                            >
                                <span>Explore our brands</span>
                                <span>↗</span>
                            </a>

                            <a
                                href="#about"
                                className="secondary-button"
                            >
                                About Foodinesia
                            </a>

                        </div>

                    </div>


                    <div className="hero-orb">

                        <div className="orb orb-one"></div>
                        <div className="orb orb-two"></div>
                        <div className="orb orb-three"></div>


                        <div className="hero-card">

                            <div className="hero-card-top">
                                <span>FOOD & BEVERAGE</span>
                                <span>01</span>
                            </div>

                            <strong>
                                FOOD
                                <br />
                                <span>INESIA</span>
                            </strong>

                            <div className="hero-card-bottom">
                                <small>
                                    East Kalimantan
                                </small>

                                <span>↗</span>
                            </div>

                        </div>

                    </div>


                    <div className="hero-scroll">

                        <span>SCROLL TO EXPLORE</span>

                        <div className="hero-scroll-line"></div>

                    </div>

                </section>


                {/* =========================
                    ABOUT
                ========================== */}

                <section
                    id="about"
                    className="intro-section"
                >

                    <div className="intro-inner">

                        <div className="intro-header">

                            <div>
                                <p className="section-label">
                                    ABOUT FOODINESIA
                                </p>

                                <h2>
                                    More than
                                    <br />
                                    <span>a food company.</span>
                                </h2>
                            </div>

                            <div className="intro-index">
                                <span>01</span>
                                <span>WHO WE ARE</span>
                            </div>

                        </div>


                        <div className="intro-content">

                            <div className="intro-statement">
                                <p>
                                    We build food & beverage brands
                                    designed to become part of
                                    everyday life.
                                </p>
                            </div>


                            <div className="intro-copy">

                                <p>
                                    PT. Foodiholic Group Indonesia is a
                                    Food & Beverage company based in
                                    Tenggarong, Kalimantan Timur,
                                    Indonesia.
                                </p>

                                <p>
                                    Through our brands, we develop and
                                    operate modern food and beverage
                                    concepts with a focus on quality,
                                    consistency, and meaningful customer
                                    experiences.
                                </p>

                                <p>
                                    We believe a good product is not only
                                    about taste. It is about the people,
                                    service, experience, and moments
                                    created around it.
                                </p>

                            </div>

                        </div>


                        <div className="intro-bottom">

                            <span>FOOD & BEVERAGE</span>

                            <span className="intro-line"></span>

                            <span>EAST KALIMANTAN · INDONESIA</span>

                        </div>

                    </div>

                </section>



                    {/* =========================
                        COMPANY VALUES
                    ========================== */}

                   
                    <section className="values-section">

                        <div className="values-header">

                            <div>
                                <p className="section-label">
                                    COMPANY VALUES
                                </p>

                                <h2>
                                    What we
                                    <br />
                                    <span>believe in.</span>
                                </h2>
                            </div>


                            <p className="values-intro">
                                We believe great food and beverage brands
                                are built with quality, consistency, curiosity,
                                and people at the center of everything we do.
                            </p>

                        </div>


                        <div className="values-grid">

                            {/* 01 */}

                            <article className="value-item">

                                <div className="value-top">
                                    <span>01</span>

                                    <span className="value-line"></span>
                                </div>

                                <div className="value-content">

                                    <h3>
                                        Quality
                                    </h3>

                                    <p>
                                        Selecting quality ingredients and
                                        maintaining standards throughout
                                        every process.
                                    </p>

                                </div>

                            </article>


                            {/* 02 */}

                            <article className="value-item">

                                <div className="value-top">
                                    <span>02</span>

                                    <span className="value-line"></span>
                                </div>

                                <div className="value-content">

                                    <h3>
                                        Consistency
                                    </h3>

                                    <p>
                                        Building reliable products and
                                        experiences across every outlet.
                                    </p>

                                </div>

                            </article>


                            {/* 03 */}

                            <article className="value-item">

                                <div className="value-top">
                                    <span>03</span>

                                    <span className="value-line"></span>
                                </div>

                                <div className="value-content">

                                    <h3>
                                        Innovation
                                    </h3>

                                    <p>
                                        Continuously developing products,
                                        brands, and experiences for the
                                        people we serve.
                                    </p>

                                </div>

                            </article>


                            {/* 04 */}

                            <article className="value-item">

                                <div className="value-top">
                                    <span>04</span>

                                    <span className="value-line"></span>
                                </div>

                                <div className="value-content">

                                    <h3>
                                        Together
                                    </h3>

                                    <p>
                                        Creating spaces where people can
                                        connect, enjoy, and grow together.
                                    </p>

                                </div>

                            </article>

                        </div>
                    </section>


                    {/* =========================
                    BUSINESS
                    ========================== */}

                    <section id="business" className="business-section" >
                        <div className="business-header"> 
                            <div> 
                                <p className="section-label"> WHAT WE DO </p> <h2> Building brands. <br /> 
                                <span>Growing businesses.</span> 
                                </h2> 
                            </div> 
                            <p className="business-intro"> Foodinesia develops food & beverage businesses from concept to customer experience — combining brand, product, operations, and technology. </p> 
                        </div> 
                        <div className="business-video-wrapper"> 
                            <div className="business-video"> 
                                <iframe id="foodinesia-reel" src="https://www.instagram.com/reel/DdvFurdTOdd/embed" title="Foodinesia Instagram Reel" frameBorder="0" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen ></iframe> </div> <div className="business-video-selector"> <button type="button" className="video-selector active" onClick={() => { const iframe = document.getElementById( "foodinesia-reel" ) as HTMLIFrameElement; iframe.src = "https://www.instagram.com/reel/DdvFurdTOdd/embed"; }} > <span>01</span> <span>Foodinesia Reel</span> <span>↗</span> </button> <button type="button" className="video-selector" onClick={() => { const iframe = document.getElementById( "foodinesia-reel" ) as HTMLIFrameElement; iframe.src = "https://www.instagram.com/reel/DcS3A5IPRf9/embed"; }} > <span>02</span> <span>Foodinesia Reel</span> <span>↗</span> </button> <button type="button" className="video-selector" onClick={() => { const iframe = document.getElementById( "foodinesia-reel" ) as HTMLIFrameElement; iframe.src = "https://www.instagram.com/reel/DXb6W-Cziv6/embed"; }} > <span>03</span> <span>Foodinesia Reel</span> <span>↗</span> </button> <button type="button" className="video-selector" onClick={() => { const iframe = document.getElementById( "foodinesia-reel" ) as HTMLIFrameElement; iframe.src = "https://www.instagram.com/reel/DXbr9mKTfxt/embed"; }} > <span>04</span> <span>Foodinesia Reel</span> <span>↗</span> </button> </div> </div> </section>



                   {/* =========================
                            BRANDS
                        ========================== */}

                        <section
                            id="brands"
                            className="brands-section"
                        >

                            <div className="brands-header">

                                <p className="section-label">
                                    OUR BRANDS
                                </p>

                                <h2>
                                    Three brands.
                                    <br />
                                    <span>One Foodinesia.</span>
                                </h2>

                                <p className="brands-intro">
                                    Foodinesia develops and operates food and beverage
                                    brands designed for different moments, tastes,
                                    and everyday experiences.
                                </p>

                            </div>


                            <div className="brands-grid">

                                {/* =========================
                                    SELALU TEH
                                ========================== */}

                                <article className="brand-item brand-selalu-teh">

                                    <div className="brand-item-top">

                                        <span className="brand-number">
                                            01
                                        </span>

                                        <span className="brand-category">
                                            TEA & BEVERAGE
                                        </span>

                                    </div>


                                    <div className="brand-logo-placeholder">
                                        <img
                                            src="/images/selaluteh.png"
                                            alt="Logo Selalu Teh"
                                        />
                                    
                                    </div>


                                    <div className="brand-item-content">

                                        <h3>
                                            SELALU TEH
                                        </h3>

                                        <p>
                                            Minuman teh dengan rasa yang autentik,
                                            segar, dan mudah dinikmati untuk menemani
                                            berbagai aktivitas sehari-hari.
                                        </p>

                                        <a href="http://selaluteh.test"> Explore Selalu Teh <span>→</span> 
                                        </a>

                                    </div>

                                </article>


                                {/* =========================
                                    SELKOP
                                ========================== */}

                                <article className="brand-item brand-selkop">

                                    <div className="brand-item-top">

                                        <span className="brand-number">
                                            02
                                        </span>

                                        <span className="brand-category">
                                            COFFEE
                                        </span>

                                    </div>


                                    <div className="brand-logo-placeholder">
                                        <img
                                            src="/images/selkop.png"
                                            alt="Logo Selkop"
                                        />
                                        
                                    </div>


                                    <div className="brand-item-content">

                                        <h3>
                                            SELKOP
                                        </h3>

                                        <p>
                                            Brand kopi yang menghadirkan pengalaman
                                            menikmati kopi dengan pendekatan yang
                                            modern dan dekat dengan keseharian.
                                        </p>

                                        <a href="https://selkop-id.pages.dev">
                                            Explore Selkop
                                            <span>→</span>
                                        </a>

                                    </div>

                                </article>


                                {/* =========================
                                    TOKO KOPI DONAT
                                ========================== */}

                                <article className="brand-item brand-tkd">

                                    <div className="brand-item-top">

                                        <span className="brand-number">
                                            03
                                        </span>

                                        <span className="brand-category">
                                            COFFEE & DONUT
                                        </span>

                                    </div>


                                    <div className="brand-logo-placeholder">
                                        <img
                                            src="/images/tkd.jpg"
                                            alt="Logo Toko Kopi Donat"
                                        />
                                        
                                    </div>


                                    <div className="brand-item-content">

                                        <h3>
                                            TOKO KOPI DONAT
                                        </h3>

                                        <p>
                                            Konsep coffee and donut yang memadukan
                                            kopi, donat, dan ruang yang nyaman untuk
                                            menikmati momen sehari-hari.
                                        </p>

                                        <a href="http://tkd.test"> Explore TKD <span>→</span> 
                                        </a>

                                    </div>

                                </article>

                            </div>


                            {/* BRAND FOOTNOTE */}

                            <div className="brands-footnote">

                                <p>
                                    Three different concepts.
                                    <br />
                                    One growing family.
                                </p>

                                <span>
                                    FOODINESIA
                                </span>

                            </div>

                        </section>


                    {/* =========================
                            COMPANY LOCATION
                        ========================== */}

                        <section
                            id="location"
                            className="location-section"
                        >

                            <div className="location-content">

                                <div className="location-header">

                                    <p className="section-label">
                                        COMPANY LOCATION
                                    </p>

                                    <h2>
                                        We're here.
                                        <br />
                                        <span>Building from East Kalimantan.</span>
                                    </h2>

                                    <p className="location-intro">
                                        Foodinesia is based in Tenggarong, East Kalimantan,
                                        building and developing food & beverage brands
                                        with a vision to grow beyond the region.
                                    </p>

                                </div>


                                <div className="location-visual">

                                    <div className="location-grid"></div>

                                    <div className="location-center">

                                        <div className="location-pulse"></div>

                                        <div className="location-dot"></div>

                                        <div className="location-label">
                                            <span>
                                                TENGGARONG
                                            </span>

                                            <small>
                                                EAST KALIMANTAN
                                            </small>
                                        </div>

                                    </div>


                                    <div className="location-coordinate">
                                        EAST KALIMANTAN
                                        <br />
                                        INDONESIA
                                    </div>

                                </div>


                                <div className="location-footer">

                                    <div>
                                        <span className="location-footer-label">
                                            COMPANY &nbsp;
                                        </span>
                                        
                                        <strong>
                                            PT FOODHOLIC GROUP INDONESIA
                                        </strong>
                                    </div>


                                    <div>
                                        <span className="location-footer-label">
                                            BASED IN &nbsp;
                                        </span>

                                        <strong>
                                            Tenggarong, Kalimantan Timur
                                        </strong>
                                    </div>

                                </div>

                            </div>

                        </section>


                    {/* =========================
                        CONTACT
                    ========================== */}

                    <section
                        id="contact"
                        className="contact-section"
                    >

                        <div className="contact-inner">

                            <div className="contact-header">

                                <p className="section-label">
                                    GET IN TOUCH
                                </p>

                                <h2>
                                    Let's build
                                    <br />
                                    <span>something memorable.</span>
                                </h2>

                            </div>


                            <div className="contact-body">

                                <p>
                                    Interested in working with Foodinesia,
                                    building a brand, or exploring a
                                    collaboration?
                                </p>


                                <a
                                    href="https://wa.me/6285393404774"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-button"
                                >
                                    <span>Get in touch</span>
                                    <span className="contact-arrow">↗</span>
                                </a>

                            </div>


                            <div className="contact-meta">

                                <div className="contact-meta-item">

                                    <span>
                                        COMPANY
                                    </span>

                                    <strong>
                                        PT FOODHOLIC GROUP INDONESIA
                                    </strong>
                                </div>


                                <div className="contact-meta-item">

                                    <span>
                                        LOCATION
                                    </span>

                                    <strong>
                                        Tenggarong, Kalimantan Timur
                                    </strong>

                                </div>


                                <div className="contact-meta-item">
                                    <span>WHATSAPP</span>
                                    <strong>+62 853-9340-4774</strong>
                                </div>

                            </div>

                        </div>

                    </section>


               {/* =========================
                FOOTER
                ========================== */}

                <footer className="footer">

                <div className="footer-inner">

                    <div className="footer-brand">

                        <p className="footer-label">
                            FOOD & BEVERAGE COMPANY
                        </p>

                        <h2>
                            FOODINESIA
                        </h2>

                        <p className="footer-description">
                            Building and developing food & beverage
                            brands from East Kalimantan.
                        </p>

                    </div>


                    <div className="footer-navigation">

                        <p className="footer-label">
                            NAVIGATION
                        </p>

                        <a href="#about">
                            About
                        </a>

                        <a href="#values">
                            Values
                        </a>

                        <a href="#brands">
                            Brands
                        </a>

                        <a href="#location">
                            Location
                        </a>

                        <a href="#contact">
                            Contact
                        </a>

                    </div>


                    <div className="footer-company">

                        <p className="footer-label">
                            COMPANY
                        </p>

                        <strong>
                            PT FOODHOLIC GROUP INDONESIA
                        </strong>

                        <span>
                            Tenggarong, Kalimantan Timur
                        </span>

                    </div>

                </div>


                <div className="footer-bottom">

                    <span>
                        © {new Date().getFullYear()} PT Foodholic Group Indonesia.
                    </span>

                    <span>
                        All rights reserved.
                    </span>

                </div>

                </footer>

                </main>

            </div>
        </>
    );
}
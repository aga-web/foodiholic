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

                        <a href="#about"> Tentang Kami </a>

                        <a href="#business">
                            Bisnis
                        </a>

                        <a href="#brands">
                            Merek
                        </a>

                        <a href="#location">
                            Lokasi
                        </a>

                        <a href="#contact">
                            Kontak
                        </a>

                    </div>

                    <a href="#contact" className="nav-button">
                        <span>Yok Kesahan</span>
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
                            FOODINESIA
                            <br />
                            <span>DARI BELANTARA KE NUSANTARA.</span>
                        </h1>


                        <p className="hero-description">
                            Membangun merek makanan dan minuman modern dari Kalimantan Timur, Indonesia.

                        </p>


                        <div className="hero-actions">

                            <a
                                href="#brands"
                                className="primary-button"
                            >
                                <span>Jelajahi merek kami</span>
                                <span>↗</span>
                            </a>

                            <a
                                href="#about"
                                className="secondary-button"
                            >
                                Tentang Foodinesia
                            </a>

                        </div>

                    </div>


                    <div className="hero-orb">

                        <div className="orb orb-one"></div>
                        <div className="orb orb-two"></div>
                        <div className="orb orb-three"></div>


                        <div className="hero-card">

                            <div className="hero-card-top">
                                <span>MAKANAN & MINUMAN</span>
                                <span>01</span>
                            </div>

                            <strong>
                                FOOD
                                <br />
                                <span>INESIA</span>
                            </strong>

                            <div className="hero-card-bottom">
                                <small>
                                    Kalimantan Timur
                                </small>

                                <span>↗</span>
                            </div>

                        </div>

                    </div>


                    <div className="hero-scroll">

                        <span>GULIR UNTUK MENJELAJAHI</span>

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
                                    TENTANG FOODINESIA
                                </p>

                                <h2>
                                    Lebih dari sekadar
                                    <br />
                                    <span>perusahaan makanan.</span>
                                </h2>
                            </div>

                            <div className="intro-index">
                                <span>01</span>
                                <span>SIAPA KAMI</span>
                            </div>

                        </div>


                        <div className="intro-content">

                            <div className="intro-statement">
                                <p>
                                    Kami membangun merek makanan dan minuman yang dirancang untuk menjadi bagian dari kehidupan sehari-hari.
                                </p>
                            </div>


                            <div className="intro-copy">

                                <p>
                                    PT. Foodiholic Group Indonesia adalah perusahaan makanan dan minuman yang berbasis di Tenggarong, Kalimantan Timur, Indonesia.
                                </p>

                                <p>
                                    Melalui berbagai merek kami, kami mengembangkan dan mengelola konsep makanan dan minuman modern dengan fokus pada kualitas, konsistensi, dan pengalaman pelanggan yang bermakna.
                                </p>

                                <p>
                                    Kami percaya bahwa produk yang baik bukan hanya tentang rasa. Namun juga tentang orang-orang, pelayanan, pengalaman, dan momen yang tercipta di dalamnya.
                                </p>

                            </div>

                        </div>


                        <div className="intro-bottom">

                            <span>MAKANAN & MINUMAN</span>

                            <span className="intro-line"></span>

                            <span>KALIMANTAN TIMUR · INDONESIA</span>

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
                                    NILAI-NILAI PERUSAHAAN
                                </p>

                                <h2>
                                   Apa yang kami
                                    <br />
                                    <span>yakini.</span>
                                </h2>
                            </div>


                            <p className="values-intro">
                                Kami percaya bahwa merek makanan dan minuman yang hebat dibangun dengan kualitas, konsistensi, rasa ingin tahu, dan menempatkan manusia sebagai pusat dari segala yang kami lakukan.

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
                                        Kualitas
                                    </h3>

                                    <p>
                                        Memilih bahan berkualitas dan menjaga standar dalam setiap proses.
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
                                        Konsistensi
                                    </h3>

                                    <p>
                                       Membangun produk dan pengalaman yang konsisten di setiap outlet.
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
                                        Inovasi
                                    </h3>

                                    <p>
                                        Terus mengembangkan produk, merek, dan pengalaman bagi orang-orang yang kami layani.
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
                                        Bersama
                                    </h3>

                                    <p>
                                        Menciptakan ruang bagi orang-orang untuk terhubung, menikmati, dan berkembang bersama.
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
                                <p className="section-label"> APA YANG KAMI LAKUKAN </p> 
                                <h2> Membangun merek. <br /> 
                                <span>Mengembangkan bisnis.</span> 
                                </h2> 
                            </div> 
                            <p className="business-intro"> Foodinesia mengembangkan bisnis makanan dan minuman dari konsep hingga pengalaman pelanggan — dengan menggabungkan merek, produk, operasional, dan teknologi. </p> 
                        </div> 
                        <div className="business-video-wrapper"> 
                            <div className="business-video"> 
                                <iframe id="foodinesia-reel" src="https://www.instagram.com/reel/DdvFurdTOdd/embed" title="Foodinesia Instagram Reel" frameBorder="0" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen >
                                </iframe> 
                            </div> 
                        <div className="business-video-selector"> 
                            <button type="button" className="video-selector active" onClick={() => { const iframe = document.getElementById( "foodinesia-reel" ) as HTMLIFrameElement; iframe.src = "https://www.instagram.com/reel/DdvFurdTOdd/embed"; }} >
                             <span>01</span> 
                             <span>Foodinesia Reel</span> 
                             <span>↗</span> 
                             </button> 
                             
                             <button type="button" className="video-selector" onClick={() => { const iframe = document.getElementById( "foodinesia-reel" ) as HTMLIFrameElement; iframe.src = "https://www.instagram.com/reel/DcS3A5IPRf9/embed"; }} > <span>02</span> 
                             <span>Foodinesia Reel</span> 
                             <span>↗</span> 
                             </button>
                             
                             <button type="button" className="video-selector" onClick={() => { const iframe = document.getElementById( "foodinesia-reel" ) as HTMLIFrameElement; iframe.src = "https://www.instagram.com/reel/DXb6W-Cziv6/embed"; }} > <span>03</span> 
                             <span>Foodinesia Reel</span> 
                             <span>↗</span> 
                             </button> 
                             
                             <button type="button" className="video-selector" onClick={() => { const iframe = document.getElementById( "foodinesia-reel" ) as HTMLIFrameElement; iframe.src = "https://www.instagram.com/reel/DXbr9mKTfxt/embed"; }} > <span>04</span> 
                             <span>Foodinesia Reel</span> 
                             <span>↗</span> 
                             </button> 
                        </div>
                        </div> 
                    </section>



                   {/* =========================
                            BRANDS
                        ========================== */}

                        <section
                            id="brands"
                            className="brands-section"
                        >

                            <div className="brands-header">

                                <p className="section-label">
                                   MEREK KAMI
                                </p>

                                <h2>
                                    Tiga merek. 
                                    <br />
                                    <span>Satu Foodinesia.</span>
                                </h2>

                                <p className="brands-intro">
                                    Foodinesia mengembangkan dan mengelola merek makanan dan minuman yang dirancang untuk berbagai momen, selera, dan pengalaman sehari-hari.
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
                                            TEH & MINUMAN
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

                                        <a href="http://selaluteh.test"> Jelajahi Selalu Teh <span>→</span> 
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
                                            KOPI
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
                                            Jelajahi Selkop
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
                                            KOPI & DONAT
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
                                            Konsep kopi dan donat yang memadukan kopi, donat, dan ruang yang nyaman untuk menikmati momen sehari-hari.
                                        </p>

                                        <a href="http://tkd.test"> Jelajahi TKD <span>→</span> 
                                        </a>

                                    </div>

                                </article>

                            </div>


                            {/* BRAND FOOTNOTE */}

                            <div className="brands-footnote">

                                <p>
                                    Tiga konsep berbeda.
                                    <br />
                                    Satu keluarga yang terus berkembang.
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
                                        LOKASI PERUSAHAAN
                                    </p>

                                    <h2>
                                        Kami berada di sini.
                                        <br />
                                        <span>Membangun dari Kalimantan Timur.</span>
                                    </h2>

                                    <p className="location-intro">
                                        Foodinesia berbasis di Tenggarong, Kalimantan Timur, membangun dan mengembangkan merek makanan dan minuman dengan visi untuk berkembang melampaui wilayah ini.
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
                                                KALIMANTAN TIMUR
                                            </small>
                                        </div>

                                    </div>


                                    <div className="location-coordinate">
                                        KALIMANTAN TIMUR
                                        <br />
                                        INDONESIA
                                    </div>

                                </div>


                                <div className="location-footer">

                                    <div>
                                        <span className="location-footer-label">
                                            PERUSAHAAN &nbsp;
                                        </span>
                                        
                                        <strong>
                                            PT FOODHOLIC GROUP INDONESIA
                                        </strong>
                                    </div>


                                    <div>
                                        <span className="location-footer-label">
                                            BERBASIS DI &nbsp;
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
                                    HUBUNGI KAMI
                                </p>

                                <h2>
                                    Mari membangun sesuatu
                                    <br />
                                    <span>yang berkesan.</span>
                                </h2>

                            </div>


                            <div className="contact-body">

                                <p>
                                    Tertarik bekerja sama dengan Foodinesia, membangun sebuah merek, atau menjajaki kolaborasi?
                                </p>


                                <a
                                    href="https://wa.me/6285393404774"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-button"
                                >
                                    <span>Hubungi kami</span>
                                    <span className="contact-arrow">↗</span>
                                </a>

                            </div>


                            <div className="contact-meta">

                                <div className="contact-meta-item">

                                    <span>
                                        PERUSAHAAN
                                    </span>

                                    <strong>
                                        PT FOODHOLIC GROUP INDONESIA
                                    </strong>
                                </div>


                                <div className="contact-meta-item">

                                    <span>
                                        LOKASI
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
                            PERUSAHAAN MAKANAN & MINUMAN
                        </p>

                        <h2>
                            FOODINESIA
                        </h2>

                        <p className="footer-description">
                            Membangun dan mengembangkan merek makanan dan minuman dari Kalimantan Timur.

                        </p>

                    </div>


                    <div className="footer-navigation">

                        <p className="footer-label">
                            NAVIGASI
                        </p>

                        <a href="#about">
                            Tentang Kami
                        </a>

                        <a href="#values">
                            Nilai-Nilai
                        </a>

                        <a href="#brands">
                            Merek
                        </a>

                        <a href="#location">
                            Lokasi
                        </a>

                        <a href="#contact">
                            Kontak
                        </a>

                    </div>


                    <div className="footer-company">

                        <p className="footer-label">
                            PERUSAHAAN
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
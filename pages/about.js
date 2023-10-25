import React from 'react'
import style from '../styles/about.module.css'
import Image from 'next/image'
import Footer from '../components/Footer'
import Link from 'next/link'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const page = () => {
    return (
        <>
            <section>
                <div className={style.image_div}>
                    <Image alt='' src={'/about1.jpg'} height={300} width={1000} className={style.back_image} />
                    <div className={style.overlay}>
                        <div className={style.contact_info_div}>
                            <h1 className={style.contact_heading}>About Us</h1>
                            <nav className={style.navlink}>
                                <Link  href={'/'} className={style.home_link} >Home</Link>
                                <span className={style.arrow_icon}><MdKeyboardDoubleArrowRight /></span>
                                <span className={style.icon_after_heading}>About Us</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.image_container}>
                <div className={style.grid_div}>
                    <div className={style.about_side_img_div}>
                        <Image alt='' src={'/about2.jpg'} width={300} height={400} className={style.about_side_img} />
                    </div>
                    <div className={style.about_div}>
                    <div>
                        <h1 className={style.about_heading}>About Us</h1>
                    </div>
                    <p className={style.about_serve_info}>
                        Singh Freight Inc. doesn’t seek for the most business possible since we believe in developing enduring connections. We work hard to earn our clients’ trust by offering them a first-rate professional and hassle-free service. Among the services we provide are brokerage, Dispatching, Drayage, Ocean Freight, Cross-border shipping, Bulk and Temperature-Controlled Trucking, FTL trucking, and basic freight transportation.
                    </p>
                    <p className={style.about_serve_info}>
                        Logistics services are crucial for any company that transports items from one location to another. Managing the complete set of operations on your own can be too hard and time-consuming, especially if you have other important problems on your plate.
                    </p>
                    <button className={style.btn}>
                        Contact Us
                    </button>
                </div>
                </div>
            </section>

            <section style={{ margin: '50px 0 0 0' }}>
                <div className={style.more_about_div}>
                    <h1 className={style.more_about_heading}>Wanna Know More About Us?</h1>
                    <p className={style.more_about_info}>
                        Our entire logistics method has evolved as a result of our years of expertise in the highly productive food, Vegetable, Agricultural, Fruit, Product, Manufacture, Recycler, Waste Materials, Plastics Materials industry with its massively complex supply chain.
                    </p>
                    <p className={style.more_about_info}>Today, we have effectively used that industrial knowledge and experience to provide a diverse variety of logistics services capable of meeting the needs of many of the world’s most well-known and demanding corporations.</p>
                    <p className={style.more_about_info}>Our unique approach of working, established over years in conjunction with our industrial experience, engages every one of our people involved in your business, at every level, in consistently developing practical, fresh ideas for your benefit. We are also continually looking for new methods to adopt the latest digital technology as part of a strategy to give an agile and personalised response to all your needs.</p>
                    <p className={style.more_about_info}>For all of our customers, our straightforward goal is to always seek out inventive and transformative solutions that go beyond standard logistics in order to assist you in maintaining and growing your competitive advantage and the service you provide to your consumers.</p>
                    {/* <div> */}
                    {/* </div> */}
                </div>
            </section>

            <section>
                <Footer />
            </section>

        </>
    )
}

export default page
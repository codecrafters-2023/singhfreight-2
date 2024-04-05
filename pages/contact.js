import React from 'react'
import style from '../styles/ContactPage.module.css'
import { BsTwitter } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import { GrLinkedinOption } from 'react-icons/gr';
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephoneInboundFill, BsGlobe } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import Link from 'next/link'
import Footer from '../components/Footer'
import Image from 'next/image';

const page = () => {
    return (
        <>
            <section>
                <div className={style.image_div}>
                    <Image alt='' src={'/contact.jpg'} height={300} width={1000} className={style.back_image} />
                    <div className={style.overlay}>
                        <div className={style.contact_info_div}>
                            <h1 className={style.contact_heading}>Contact Us</h1>
                            <nav className={style.navlink}>
                                <Link href={'/'} className={style.home_link} >Home</Link>
                                <span className={style.arrow_icon}><MdKeyboardDoubleArrowRight /></span>
                                <span className={style.icon_after_heading}>Contact Us</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <div className=' bg-slate-50 py-6'>
                <div className='container'>
                    <div className={style.grid_div}>
                        <div className={style.from_outer_div}>
                            <h1 className={style.heading}>Contact Us</h1>

                            {/* --------------form start----------------- */}

                            <div className={style.from_inner_div}>
                                <div className={style.input_div}>
                                    <label className={style.label}>Name</label>
                                    <input className={style.input} type="text" placeholder='Please enter Name...' />
                                </div>
                                <div className={style.input_div}>
                                    <label className={style.label}>Email</label>
                                    <input className={style.input} type="email" placeholder='Please enter Email...' />
                                </div>
                                <div className={style.input_div}>
                                    <label className={style.label}>Phone Number</label>
                                    <input className={style.input} type="number" placeholder='Please enter Phone Number...' />
                                </div>
                                <div className={style.input_div}>
                                    <label className={style.label} >Message</label>
                                    <textarea className={style.textarea} placeholder='Your Message here...'></textarea>
                                </div>
                                <div>
                                    <button className={style.button}> Button
                                    </button>
                                </div>
                            </div>

                            {/* --------------form end----------------- */}

                        </div>


                        <div className={style.map_links_div}>

                            {/* --------------links div start----------------- */}

                            <div>
                                <h2 className={style.map_area_heading}>Reach us at</h2>
                                <p className={style.map_area_info}>Stay connected with us on social media! Join our online community and be part of the conversation. Follow us for the latest updates, news, and exclusive content.</p>

                                <div className={style.icon_div}>
                                    <Link href={"#"}><BsTwitter /></Link>
                                    <Link href={"#"}><BiLogoFacebook /></Link>
                                    <Link href={"#"}><GrLinkedinOption /></Link>
                                </div>
                            </div>

                            {/* --------------links div end----------------- */}

                            {/* --------------map div start----------------- */}

                            <div className={style.map_div} >
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13026993.027933573!2d-106.2559713014177!3d37.14275395502446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1696520703364!5m2!1sen!2sin" style={{ width: "100%", height: "100%", border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>

                            {/* --------------map div end----------------- */}

                        </div>
                    </div>
                </div>
            </div>

            {/* --------------contact info start----------------- */}

            <section style={{ margin: "100px 0" }}>
                <div className={style.contact_info_div}>
                    <h1 className={style.location_heading}>Locations</h1>

                    <div className={style.location_div} >

                        {/* --------------location info----------------- */}

                        <div className={style.address_contact_div}>
                            <div>
                                <div className={style.location_icon_div}>
                                    <span className={style.location_icon}><CiLocationOn /></span>
                                </div>
                                <b>Address:</b>
                                <p className={style.address_info}>1231 Hartwell Ave Stockton,<br /> CA 95209</p>
                                <b>Address:</b>
                                <p className={style.address_info}>4730 S Fort Apache Rd,<br /> Suite 300 Las Vegas, NV 89147</p>
                            </div>

                            {/* --------------contact info----------------- */}

                            <div>
                                <div className={style.location_icon_div}>
                                    <span className={style.location_icon}><BsTelephoneInboundFill /></span>
                                </div>
                                <div>
                                    <div>
                                        <b>Operation contact:</b>
                                        <p className={style.contact_info}>+1 (385) 424-8237<br />
                                            +1 (725) 239-3080<br />
                                            +1 (725) 444-1944</p>
                                    </div>
                                    <div>
                                        <b>Accounting Contact:</b>
                                        <p className={style.contact_info}>+1 (209) 765-5845</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --------------Email info----------------- */}

                        <div className={style.email_website_div}>
                            <div>
                                <div className={style.location_icon_div}>
                                    <span className={style.location_icon}><GrMail /></span>
                                </div>
                                <div>
                                    <div>
                                        <b>Operation Email:</b>
                                        <p className={style.email_info}>hapee@singhfreight.com<br /> amrit@singhfreight.com<br /> sales@singhfreight.com</p>
                                    </div>
                                    <div>
                                        <b>Accounting Email:</b>
                                        <p className={style.contact_info}>sukhman@singhfreight.com<br /> amrit@singhfreight.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* --------------website info----------------- */}

                            <div>
                                <div className={style.location_icon_div}>
                                    <span className={style.location_icon}><BsGlobe /></span>
                                </div>
                                <div>
                                    <b>Website:</b>
                                    <p className={style.email_info}><Link href={'https://singhfreight.com'} className={style.website_link} >singhfreight.com</Link></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* --------------contact info end----------------- */}


            {/* --------------footer start--------------- */}
            <div>
                <Footer />
            </div>
            {/* --------------footer end--------------- */}
            {/* </div> */}
        </>
    )
}

export default page
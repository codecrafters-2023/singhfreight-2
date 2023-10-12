import React from 'react'
import style from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className={style.main}>
                <div className='container'>
                    <div className={style.grid_inner_div}>
                        <div className={style.footer_inner_div}>
                            <Image src={'/icon.png'} alt='footer_logo' width={100} height={100} />
                            <p className={style.logo_text}>
                            Logistics services are crucial for any company that transports items from one location to another.
                            </p>
                        </div>
                        <div className={style.footer_inner_div} >
                            <h1 className={style.quick_link_heading}>Quick Links</h1>
                            <ul>
                                <li>
                                    <Link href={'/about'} className={style.footer_links}>About</Link>
                                </li>
                                <li>
                                    <Link href={'/contact'} className={style.footer_links}>Contact</Link>
                                </li>
                                <li>
                                    <Link href={'/blogs'} className={style.footer_links}>Blogs/News</Link>
                                </li>
                                <li>
                                    <Link href={'/whyUs'} className={style.footer_links} >Why Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={style.footer_inner_div}>
                                <h1 className={style.quick_link_heading}>Our Locations</h1>

                                <div className={style.footer_contact_info_div}>
                                <b>Address:<br /><span style={{fontWeight:"500"}}>4730 S Fort Apache Rd,<br />
                                    Suite 300 Las Vegas, NV 89147</span></b>
                                <b>Email:<span style={{marginLeft:"10px", fontWeight:"500"}}>sales@singhfreight.com</span></b>
                                <b>Contact:<span style={{marginLeft:"10px", fontWeight:"500"}}>+1 (725) 444-1944</span></b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
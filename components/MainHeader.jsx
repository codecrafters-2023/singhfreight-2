import React from 'react'
import Link from "next/link";
import style from '../styles/MainHeader.module.css'
import Image from 'next/image'
import { FaPhoneVolume } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import "bootstrap/dist/css/bootstrap.min.css";
import { useSession } from 'next-auth/react'

const MainHeader = () => {

    const { data: session } = useSession();

    return (
        <>

            <div className={style.main}>
                <div className={style.main_inner}>
                    <div>
                        <div className={style.header_info_div}>
                            <span className={style.header_icon}><MdEmail /></span>
                            <span className={style.phone_info}>
                                <span>Email:</span>
                                <Link href={'#'} className={style.email_link}>sales@singhfreight.com</Link>
                            </span>
                        </div>
                    </div>
                    <div>
                        <Link href={"#"}><div className={style.logo_div}>
                            <Image
                                src='/headerlogo.png'
                                alt='Logo'
                                className={style.logo}
                                width={100}
                                height={100}
                            />
                        </div></Link>
                    </div>
                    <div>
                        <div className={style.header_info_div}>
                            <span className={style.header_icon}><FaPhoneVolume /></span>
                            <span className={style.phone_info}>
                                <span  >CONTACT</span>
                                <Link href={'#'} className={style.phone_link}>+1 (725) 444-1944</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MainHeader
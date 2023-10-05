// "use client";
// import Link from "next/link";
// import React from "react";
// import { signIn, signOut, useSession } from "next-auth/react";
// import style from '../styles/Header.module.css'
// import { Image } from "@chakra-ui/react";


// const Header = () => {

//     const { data: session } = useSession()

//     return (
//         <div className={style.main}>
//             <Link href={'/user'}>
//                 < div className='flex items-center justify-center'>
// <Image
//     src='/headerlogo.png'
//     w={'160px'}
//     // objectFit='cover'
//     alt='Logo'
// />
//                 </div>
//             </Link >

//             <div className='flex font-normal gap-5 justify-center items-center'>
//                 <Link href='#' className={style.link}>
//                     DASHBOARD
//                 </Link>
//                 <Link href='#' className={style.link}>
//                     CONTACT
//                 </Link>
//                 <Link href='#' className={style.link}>
//                     EXPLORE
//                 </Link>
//             </div>
//             <div className="flex items-center gap-5 justify-center" >
//                 {
//                     session ?
//                         <div className='flex items-center '>
//                             <button className="btn btn-primary" onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}>
//                                 Sign Out
//                             </button>
//                         </div>
//                         :
//                         <div className='flex items-center '>
//                             <button className="btn btn-primary" onClick={() => signIn()}>
//                                 Sign in
//                             </button>
//                         </div>
//                 }

//             </div>
//         </div >
//     );
// };

// export default Header;


import React from 'react'
import Link from "next/link";
import style from '../styles/Header.module.css'
import Image from 'next/image'
import { FaPhoneVolume } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <>

            <div className={style.main}>
                <div className={style.main_inner}>
                    <div>
                        <div className={style.header_info_div}>
                            <span className={style.header_icon}><MdEmail /></span>
                            <span className={style.phone_info}>
                                <span>Email:</span>
                                <Link href={'#'} className={style.email_link}>Company Email</Link>
                            </span>
                        </div>
                    </div>
                    <div>
                        <Link href={"/"}> <div className={style.logo_div}>
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
                                <Link href={'#'} className={style.phone_link}>Company tel</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Header
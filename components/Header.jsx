// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { signIn, signOut, useSession } from "next-auth/react";
// import style from '../styles/Header.module.css'

// const Header = () => {

//     const { data: session } = useSession()

//     return (
//         <div className={style.main}>
//             <header>
//                 <nav
//                     className="navbar navbar-expand-lg navbar-dark"
//                     style={{ background: "#fff" }}
//                 >
//                     <div className="container-fluid">
//                         <Link className="navbar-brand" href="/dashboad">
//                             <Image
//                                 src={"/logo.png"}
//                                 alt=""
//                                 height={100}
//                                 width={100}
//                                 style={{ height: "auto", width: "auto" }}
//                             />
//                         </Link>
//                         <button
//                             className="navbar-toggler"
//                             type="button"
//                             data-bs-toggle="collapse"
//                             data-bs-target="#navbarNav"
//                             aria-controls="navbarNav"
//                             aria-expanded="false"
//                             aria-label="Toggle navigation"
//                             style={{ backgroundColor: "black" }}
//                         >
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div
//                             className="collapse navbar-collapse"
//                             id="navbarNav"
//                             style={{
//                                 display: "flex",
//                                 justifyContent: "flex-end",
//                                 marginRight: "10px",
//                             }}
//                         >
//                             <ul className="navbar-nav">
//                                 <li className="nav-item" style={{ color: "#000" }}>
//                                     <Link
//                                         className="nav-link active"
//                                         href="/dashboad"
//                                         style={{ color: "#000" }}
//                                     >
//                                         Dashboard
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" href="#" style={{ color: "#000" }}>
//                                         Listing
//                                     </Link>
//                                 </li>
//                                 {/* <li className="nav-item">
//                                     <Link
//                                         className="nav-link"
//                                         href="/loadPost"
//                                         style={{ color: "#000" }}
//                                     >
//                                         Add Load
//                                     </Link>
//                                 </li> */}
//                                 <li className="nav-item">
//                                     <Link className="nav-link" href="#" style={{ color: "#000" }}>
//                                         Analytics
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         {
//                             session ? <button
//                                 className="btn btn-primary"
//                                 onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
//                             >
//                                 Sign Out
//                             </button> :
//                                 <button
//                                     className="btn btn-primary"
//                                     onClick={() => signIn()}
//                                 >
//                                     Sign In
//                                 </button>
//                         }
//                     </div>
//                 </nav>
//             </header>
//         </div>
//     );
// };

// export default Header;

"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import style from '../styles/Header.module.css'
import { Image } from "@chakra-ui/react";
import { CgProfile } from 'react-icons/cg';


const Header = () => {

    const { data: session } = useSession()

    return (
        <div className={style.main}>
            <Link href={'/dashboard'}>
                < div className='flex items-center justify-center'>
                <Image
                    src='/logo.png'
                    w={'150px'}
                    h={'75px'}
                    alt='Logo'
                />
        </div>
            </Link >

            <div className='flex font-normal gap-5 justify-center items-center'>
                <Link href='/dashboard' className={style.link}>
                    DASHBOARD
                </Link>
                <Link href='#' className={style.link}>
                    CONTACT
                </Link>
                <Link href='#' className={style.link}>
                    EXPLORE
                </Link>
            </div>
            <div className="flex items-center gap-5 justify-center" >
                {
                    session ?
                        <div>
                            <div className={style.profileIcon_div}>
                                <CgProfile className={style.profileIcon} onClick={() => signOut({ callbackUrl: "/" })}/>
                                <span >Profile</span>
                            </div>
                        </div>
                        :
                        " "
                }
                <div className='flex items-center '>
                    <button className="bg-sky-400 text-black hover:text-white" id={style.getBtn}>Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default Header;




// import React from 'react'

// const Header = () => {
//   return (
//     <div>
        
// <nav class="navbar navbar-expand-lg bg-body-tertiary">
//     <div class="container-fluid">
//         <a class="navbar-brand" href="#">Navbar</a>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li class="nav-item">
//                     <a class="nav-link active" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Link</a>
//                 </li>
//                 <li class="nav-item dropdown">
//                     <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                         Dropdown
//                     </a>
//                     <ul class="dropdown-menu">
//                         <li><a class="dropdown-item bg-black" href="#">Action</a></li>
//                         <li><a class="dropdown-item" href="#">Another action</a></li>
//                         <li><hr class="dropdown-divider" /></li>
//                         <li><a class="dropdown-item" href="#">Something else here</a></li>
//                     </ul>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//                 </li>
//             </ul>
//             <form class="d-flex" role="search">
//                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button class="btn btn-outline-success" type="submit">Search</button>
//             </form>
//         </div>
//     </div>
// </nav>
//     </div>
//   )
// }

// export default Header
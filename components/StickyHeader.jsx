import React, { useState } from 'react';
import style from '../styles/StickyHeader.module.css'
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import SidebarDiv from './sidebarDiv';

const StickyHeader = () => {

    const [show, setShow] = useState();

    const { data: session } = useSession(false);

    if (session?.user?.role === 'admin' || session?.user?.role === 'user') {
        return (
            <>
                <header className={style.sticky_top}>
                    <nav className=" py-3">
                        <div className={style.ul_link_div}>
                            {
                                show ? <span className={style.faBars} style={{ fontSize: "30px" }}><RxCross2 onClick={() => setShow(!show)} /></span> : <span className={style.faBars} ><FaBars onClick={() => setShow(!show)} /></span>
                            }

                                <ul className={style.ul}>
                                    <li >
                                        <Link href={'/about'} className={style.link} >ABOUT</Link >
                                    </li>
                                    <li>
                                        <Link href={"/contact"} className={style.link}>CONTACT</Link >
                                    </li>
                                    <li>
                                        <Link href={"/blogs"} className={style.link}>BLOGS/NEWS</Link >
                                    </li>
                                    <li>
                                        <Link href={"/whyUs"} className={style.link}>WHY US</Link >
                                    </li>
                                </ul>

                                {
                                    session ?
                                        <div className="dropdown" style={{padding:"0"}}>
                                            <div className="btn dropdown-toggle outline-none border-none hover:text-orange-600 p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                PROFILE
                                            </div>
                                            <ul className="dropdown-menu mt-3">
                                                <li><button className="dropdown-item" onClick={() => { signOut({ callbackUrl: "/" }) }} >LOGOUT</button></li>
                                            </ul>
                                        </div>
                                        : " "
                                }
                            </div>
                    </nav>
                </header>
                {
                    show ? <div>
                        <div className={style.sidebarDiv}>
                            <SidebarDiv />
                        </div>
                    </div> : ""
                }
            </>
        )
    } else {
        return (
            <>
                <header className={style.sticky_top}>
                    <nav className=" py-3">
                        <div className={style.ul_link_div}>
                            {
                                show ? <span className={style.faBars} style={{ fontSize: "30px" }}><RxCross2 onClick={() => setShow(!show)} /></span> : <span className={style.faBars} ><FaBars onClick={() => setShow(!show)} /></span>
                            }

                            <ul className={style.ul}>
                                <li >
                                    <Link href={'/'} className={style.link} >DASHBOARD</Link >
                                </li>
                                <li >
                                    <Link href={'/about'} className={style.link} >ABOUT</Link >
                                </li>
                                <li>
                                    <Link href={"/contact"} className={style.link}>CONTACT</Link >
                                </li>
                                <li>
                                    <Link href={"/blogs"} className={style.link}>BLOGS/NEWS</Link >
                                </li>
                                <li>
                                    <Link href={"/whyUs"} className={style.link}>WHY US</Link >
                                </li>

                                {
                                    session ?
                                        <div className="dropdown">
                                            <div className="btn dropdown-toggle outline-none border-none hover:text-orange-600" data-bs-toggle="dropdown" aria-expanded="false">
                                                PROFILE
                                            </div>
                                            <ul className="dropdown-menu mt-3">
                                                <li><button className="dropdown-item" onClick={() => { signOut({ callbackUrl: "/" }) }} >LOGOUT</button></li>
                                            </ul>
                                        </div>
                                        : " "
                                }
                            </ul>
                        </div>
                    </nav>
                </header>
                {
                    show ? <div>
                        <div className={style.sidebarDiv}>
                            <SidebarDiv />
                        </div>
                    </div> : ""
                }
            </>
        )
    }
};

export default StickyHeader;

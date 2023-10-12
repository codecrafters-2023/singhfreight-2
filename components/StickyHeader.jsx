import React from 'react';
import style from '../styles/StickyHeader.module.css'
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";

const StickyHeader = () => {

    const { data: session } = useSession();

    if (session?.user?.role === 'admin' || session?.user?.role === 'user') {
        return (
            <>
                <header className={style.sticky_top}>
                    <nav className="navbar-expand-lg py-3">
                        <div className={style.ul_link_div}>
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
                        </div>
                    </nav>
                </header>

            </>
        )
    } else {
        return (
            <>
                <header className={style.sticky_top}>
                    <nav className="navbar-expand-lg py-3">
                        <div className={style.ul_link_div}>
                            <ul className={style.ul}>
                                <li >
                                    <Link href={'/'} className={style.link} >dashboard</Link >
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

                            </ul>
                        </div>
                    </nav>
                </header>
            </>
        )
    }

    {/* <header className={style.sticky_top}>
                <nav className="navbar-expand-lg py-3">
                    <div className={style.ul_link_div}>
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
                    </div>
                </nav>
            </header> */}
};

export default StickyHeader;

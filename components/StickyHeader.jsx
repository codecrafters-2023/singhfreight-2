import React from 'react';
import style from '../styles/StickyHeader.module.css'
import Link from 'next/link';

const StickyHeader = () => {
    return (
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
                </div>
            </nav>
        </header>
    );
};

export default StickyHeader;

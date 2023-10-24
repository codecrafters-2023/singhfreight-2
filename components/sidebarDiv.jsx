import Link from 'next/link'
import React from 'react'
import style from '../styles/Sidebar.module.css'

const SidebarDiv = () => {
    return (
        <div>
            <div className={style.main}>
                <div className={style.linkOuterDiv}>
                    <ul>
                        <li style={{marginTop:"30px"}}>
                            <Link href={'/about'} className={style.link}>ABOUT</Link >
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
            </div>
        </div>
    )
}

export default SidebarDiv
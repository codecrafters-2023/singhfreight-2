import Link from 'next/link'
import React from 'react'
import style from '../styles/Sidebar.module.css'
import { useSession } from 'next-auth/react'

const SidebarDiv = () => {

    const { data: session } = useSession()

    return (
        <div>
            <div className={style.main}>
                <div className={style.linkOuterDiv}>
                    <ul>
                        {/* <li style={{ marginTop: "30px" }}>
                            <Link href={'/'} className={style.link}>Dashboard</Link >
                        </li> */}
                        <li style={{ marginTop: "30px" }}>
                            <Link href={'/about'} className={style.link}>about</Link >
                        </li>
                        <li>
                            <Link href={"/contact"} className={style.link}>contact</Link >
                        </li>
                        <li>
                            <Link href={"/blogs"} className={style.link}>blogs/news</Link >
                        </li>
                        <li>
                            <Link href={"/whyUs"} className={style.link}>why us</Link >
                        </li>
                        {
                            session?.user?.role === "admin" ?

                                <>
                                    <li>
                                        <Link href={"/admin"} className={style.link}>dashboard</Link>
                                    </li>
                                    <li>
                                        <Link href={"/loads/allloads"} className={style.link}>all loads</Link>
                                    </li>
                                    <li>
                                        <Link href={"/addLoad"} className={style.link}>add loads</Link>
                                    </li>
                                    <li>
                                        <Link href={"/userActiveForm"} className={style.link}>activate carrier</Link>
                                    </li>
                                    <li>
                                        <Link href={"/userdata/activeUsers"} className={style.link}>Active User</Link>
                                    </li>
                                </>
                                : ""
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SidebarDiv
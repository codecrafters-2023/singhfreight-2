import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from 'react-icons/fa'
import { HiOutlineX } from 'react-icons/hi'
import style from '../../styles/Layout.module.css'

export default function DashboardLayout({
    children,
}) {
    const [show, setShow] = useState(true)
    return (
        <section>
            <div className={style.main}>

                {
                    show ?
                        <div style={{display:"flex"}}>
                            <nav className={style.nav}>
                                <div className={style.image_div}>
                                        <Link href={"/admin"}><Image alt="" src={'/headerlogo.png'} height={100} width={100} style={{ width: "100%",marginTop:"50px" }} /></Link>
                                </div>
                                <div className={style.links_outer_div}>
                                    <ul>
                                        <li>
                                            <Link href={"/admin"}>dashboard</Link>
                                        </li>
                                        <li>
                                            <Link href={"/loads/allloads"}>all loads</Link>
                                        </li>
                                        <li>
                                            <Link href={"/addLoad"}>add loads</Link>
                                        </li>
                                        <li>
                                            <Link href={"/userActiveForm"}>activate carrier</Link>
                                        </li>
                                        <li>
                                            <Link href={"/activeUsers"}>Active User</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div> :""
                }

                <div  className={style.children_div}>
                    {children}
                </div>
            </div>

        </section>
    )
}
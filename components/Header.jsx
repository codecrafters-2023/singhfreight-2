"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import style from '../styles/Header.module.css'
import { Image } from "@chakra-ui/react";


const Header = () => {

    const { data: session } = useSession()

    return (
        <div className={style.main}>
            <Link href={'/dashboard'}>
                < div className='flex items-center justify-center'>
                    <Image
                        src='/headerlogo.png'
                        w={'160px'}
                        // objectFit='cover'
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
                        <div className='flex items-center '>
                            <button className="btn btn-primary" onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}>
                                Sign Out
                            </button>
                        </div>
                        :
                        <div className='flex items-center '>
                            <button className="btn btn-primary" onClick={() => signIn()}>
                                Sign in
                            </button>
                        </div>
                }

            </div>
        </div >
    );
};

export default Header;



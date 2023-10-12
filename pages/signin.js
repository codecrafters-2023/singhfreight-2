"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image';
import style from '../styles/Loginin.module.css'
import { AiFillEye } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
// import style from '../styles/Register.module.css'

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const [show, setShow] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email, password, redirect: false,
            });

            if (res.error) {
                { `${setError(<div style={{ color: "red" }}>Invalid Credentials</div>)}` }
                return;
            }

            router.replace("/user");

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={style.main} style={{ overflow: "hidden" }}>
            <div className={style.login_box}>
                <Image src="/headerlogo.png" alt="Logo" className={style.logo} height={70} width={150} />
                <h2 className="text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div className="form-group flex flex-col">
                            <label className={style.label} htmlFor="email">Email</label>
                            <input
                                type="email"
                                className={style.form_input}
                                id="email"
                                placeholder="abc@gmail.com"
                                autoComplete='off'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group flex flex-col relative">
                            <label className={style.label} htmlFor="password">Password</label>
                            <input
                                type={`${show ? "text" : "password"}`}
                                className={style.form_input}
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className={style.password_eye} onClick={() => setShow(!show)}><BsEye /></span>
                        </div>
                        {
                            error &&
                            <div>
                                {error}
                            </div>
                        }
                        {/* <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: "10px" }}>Login</button> */}
                        <button type="submit" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
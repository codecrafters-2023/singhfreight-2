"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'


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

            router.replace("/userdata/activeUsers");

        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "whitesmoke" }}>
                <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
                    <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span className="text-[#7747ff]">App</span></div>
                    <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <div className="block relative">
                            <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
                            <input type="email" id="email" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />

                        </div>
                        <div className="block relative">
                            <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
                            <input type="password" id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />

                        </div>
                        {
                            error &&
                            <div>
                                {error}
                            </div>
                        }
                        <div>
                            <a className="text-sm text-[#7747ff]" href="#">Forgot your password?
                            </a></div>
                        <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Login</button>

                    </form>
                    <div className="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <Link href='/signup' className="text-sm text-[#7747ff]">Signup.</Link> </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm
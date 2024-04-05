"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import {  useToast } from '@chakra-ui/react';

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const newObj = {
        name, email, password
    }

    /* ---------------- HandleSubmit Button Start ------------------> */

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !cpassword) {
            { `${setError(<div style={{ color: "red" }}>All Fields are required</div>)}` }
            return;
        }

        if (password !== cpassword) {
            { `${setError(<div style={{ color: "red" }}>Passwords not match</div>)}` }
            return;
        }

        try {
            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content_type": "application/json",
                },
                body: JSON.stringify({ email })
            });

            const { user } = await resUserExists.json();

            if (user) {
                setError("User already Exists");
                return;
            }

            const res = await fetch("api/registerUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })

            if (res.ok) {
                setEmail("");
                setName("");
                setPassword("");
                setCPassword("");

                router.push("/signin")
            } else {
                console.log("User registeration failed");
            }

        } catch (error) {
            console.log("Error during registeration", error);
        }
    }

    /* ---------------- HandleSubmit Button End ------------------> */

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "whitesmoke" }}>
            <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
                <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span className="text-[#7747ff]">App</span></div>
                <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Register for account</div>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="block relative">
                        <label htmlFor="name" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Name</label>
                        <input type="name" id="name" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                    </div>
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

                    <div className="block relative">
                        <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
                        <input type="password" id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                            value={cpassword}
                            onChange={e => setCPassword(e.target.value)}
                        />

                    </div>
                    {
                        error &&
                        <div>
                            {error}
                        </div>
                    }

                    <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Register</button>

                </form>
                <div className="text-sm text-center mt-[1.6rem]">Already have an account <Link href='/signin' className="text-sm text-[#7747ff]">Login.</Link> </div>
            </div>
        </div>
    )
}

export default RegisterForm
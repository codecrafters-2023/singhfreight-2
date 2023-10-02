"use client"
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import style from '../styles/Register.module.css'
import { Select, useToast } from '@chakra-ui/react';
import axios from 'axios';

const RegisterForm = () => {
    const [mcnumber, setMcNumber] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();
    const toast = useToast()

    /* ---------------- HandleSubmit Button Start ------------------> */


    const newObj = {
        mcnumber,
        name,
        email,
        password,
        role
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content_type": "application/json",
                },
                body: JSON.stringify({ mcnumber })
            });

            const { user } = await resUserExists.json();

            if (!user) {
                toast({
                    title: 'First you have to set a career information',
                    status: 'info',
                    duration: 9000,
                    isClosable: true,
                    position: 'top',
                });
                router.push('/careerInfo')
                return;
            }

            console.log(resUserExists);

            const res = axios.post('/api/registerUser', newObj)
                .then(() => {
                    alert('User registered successfully')
                })

            if (res) {
                setName("")
                setEmail("")
                setPassword("");
                setCPassword("");
                setRole("");
                setError("");
                toast({
                    title: 'User registered successfully',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position: 'top',
                });
                router.push('/signin')
            } else {
                setName("")
                setEmail("")
                setPassword("");
                setCPassword("");
                setRole("");
                setError("");
                toast({
                    title: 'Error during registeration',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position: 'top',
                });
            }
        } catch (error) {
            console.log(error);
        }

    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (!name || !email || !password || !cpassword || !role) {
    //         { `${setError(<div style={{ color: "red" }}>All Fields are required</div>)}` }
    //         return;
    //     }

    //     if (password !== cpassword) {
    //         { `${setError(<div style={{ color: "red" }}>Passwords not match</div>)}` }
    //         return;
    //     }

    //     try {
    //         const resUserExists = await fetch("api/userExists", {
    //             method: "POST",
    //             headers: {
    //                 "Content_type": "application/json",
    //             },
    //             body: JSON.stringify({ email })
    //         });

    //         const { user } = await resUserExists.json();

    //         if (user) {
    //             setError("User already Exists");
    //             return;
    //         }

    //         const res = await fetch("api/register", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 name, email, password, role
    //             })
    //         })

    //         if (res.ok) {
    //             setEmail("");
    //             setName("");
    //             setPassword("");
    //             setCPassword("");
    //             setRole("");

    //             router.push("/signin")
    //         } else {
    //             console.log("User registeration failed");
    //         }

    //     } catch (error) {
    //         console.log("Error during registeration", error);
    //     }
    // }

    /* ---------------- HandleSubmit Button End ------------------> */

    return (
        <div className={style.main}>
            <div className={style.signup_box}>
                {/* ---------------- Form Image ------------------> */}

                <Image src="/headerlogo.png" alt="Logo" className={style.logo} height={70} width={150} />

                {/* ---------------- Form Start ------------------> */}

                <h2 className="text-center">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div className="form-group">
                            <label htmlFor="mcnumber">Mc Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="mcnumber"
                                placeholder="Mc Number"
                                autoComplete='off'
                                value={mcnumber}
                                onChange={e => setMcNumber(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullname"
                                placeholder="Username"
                                autoComplete='off'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="abc@gmail.com"
                                autoComplete='off'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirm-password"
                                placeholder="Confirm password"
                                value={cpassword}
                                onChange={e => setCPassword(e.target.value)}
                            />
                        </div>
                        <Select variant='flushed' placeholder='Select' onChange={e => setRole(e.target.value)} value={role}>
                            <option value='admin'>Admin</option>
                            <option value='user'>User</option>
                        </Select>
                        {
                            error &&
                            <div>
                                {error}
                            </div>
                        }
                        <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
                    </div>
                </form>
                <div className="text-center mt-3">
                    Already have an account? <Link href="/signin" className="text-primary">Sign In</Link>
                </div>

                {/* ---------------- Form End ------------------> */}

            </div>
        </div>
    )
}

export default RegisterForm
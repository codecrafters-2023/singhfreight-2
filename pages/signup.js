"use client"
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import style from '../styles/Register.module.css'
import { Button, Select, useToast } from '@chakra-ui/react';
import axios from 'axios';
import {  AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'

const RegisterForm = () => {
    const [companyName, setComapanyName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [powerUnit, setPowerUnit] = useState("");
    const [dryVans, setDryVans] = useState("");
    const [reefers, setReefers] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [role, setRole] = useState("user");
    const [error, setError] = useState("");

    const [show, setShow] = useState({ password: false, confirm_password: false });

    const router = useRouter();
    const toast = useToast()
    
    const newObj = {
        companyName,
        firstName,
        lastName,
        powerUnit,
        dryVans,
        reefers,
        email,
        password,
        role
    }
    
    /* ---------------- HandleSubmit Button Start ------------------> */

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!firstName || !email || !password || !cpassword || !reefers || !companyName || !lastName || !powerUnit || !dryVans) {
            { `${setError(<div className='text-blue-900'>All field are required</div>)}` }
            return;
        }

        try {
            const resUserExists = await fetch("api/emailExists", {
                method: "POST",
                headers: {
                    "Content_type": "application/json",
                },
                body: JSON.stringify({ email })
            });

            const { user } = await resUserExists.json();

            if (user) {
                toast({
                    title: 'Email already exists',
                    status: 'info',
                    duration: 9000,
                    isClosable: true,
                    position: 'top',
                });
                return;
            }

    

            if (password !== cpassword) {
                { `${setError(<div className='text-blue-900'>Password Doesn&#10076;t Match! Please confirm your Password</div>)}` }
                return;
            }else if (password > 8) {
                {
                    `${setError(<div className='text-blue-900'>Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</div>)}`
                }
                return;
            }else {

                const res = axios.post('/api/registerUser', newObj)
                    .then(() => {
                        alert('User registered successfully')
                    })

                if (res) {
                    // setName("")
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
            }
        } catch (error) {
            console.log(error);
        }
    }

    /* ---------------- HandleSubmit Button End ------------------> */

    return (
        <div className={style.main}>
            <div className={style.signup_box}>
                {/* ---------------- Form Image ------------------> */}

                <Image src="/headerlogo.png" alt="Logo" className={style.logo} height={70} width={150} />

                {/* ---------------- Form Start ------------------> */}

                {/* <h2 className="text-center">Sign Up</h2> */}
                <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div className="form-group flex flex-col">
                            <label className={style.label} htmlFor="companyName">Company Name</label>
                            <input
                                type="text"
                                id="companyName"
                                className={style.form_input}
                                placeholder="Company Name..."
                                autoComplete='off'
                                value={companyName}
                                onChange={e => setComapanyName(e.target.value)}
                            />
                        </div>

                        {/* <div className={style.lastName_firstName_div}> */}
                        <div className="form-group flex flex-col">
                            <label className={style.label} htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className={style.form_input}
                                id="firstName"
                                placeholder="Please enter first name..."
                                autoComplete='off'
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="form-group flex flex-col">
                            <label className={style.label} htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className={style.form_input}
                                id="lastName"
                                placeholder="Please enter last name..."
                                autoComplete='off'
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </div>
                        {/* </div> */}

                        {/* <div className={style.lastName_firstName_div}> */}
                        <div className="form-group flex flex-col">
                            <label className={style.label} htmlFor="powerUnit">Power Unit</label>
                            <input
                                type="number"
                                className={style.form_input}
                                id="powerUnit"
                                placeholder="Power Unit..."
                                autoComplete='off'
                                value={powerUnit}
                                onChange={e => setPowerUnit(e.target.value)}
                            />
                        </div>
                        <div className="form-group flex flex-col">
                            <label className={style.label} htmlFor="dryVans">Dry Vans</label>
                            <input
                                type="number"
                                className={style.form_input}
                                id="dryVans"
                                placeholder="Dry Vans..."
                                autoComplete='off'
                                value={dryVans}
                                onChange={e => setDryVans(e.target.value)}
                            />
                        </div>
                        <div className="form-group flex flex-col">
                            <label className={style.label} htmlFor="reefers">Reefers</label>
                            <input
                                type="number"
                                className={style.form_input}
                                id="reefers"
                                placeholder="Reefers..."
                                autoComplete='off'
                                value={reefers}
                                onChange={e => setReefers(e.target.value)}
                            />
                        </div>
                        {/* </div> */}

                        <div className="form-group flex flex-col">
                            <label className={style.label} htmlFor="email">Email</label>
                            <input
                                type="email"
                                className={style.form_input}
                                id="email"
                                placeholder="abc@gmail.com"
                                autoComplete='off'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group flex flex-col relative">
                            <label className={style.label} htmlFor="password">Password</label>
                            <input
                                type={`${show.password ? 'text' : 'password'}`}
                                className={style.password_form_input}
                                id="password"
                                placeholder="Password"
                                // pattern= '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/'
                                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />

                            <span className={style.password_eye} onClick={() => setShow({ ...show, password: !show.password })}>
                                <BsEye />
                            </span>

                        </div>
                        <div className="form-group flex flex-col relative">
                            <label className={style.label} htmlFor="confirm_password">Confirm Password</label>
                            <input
                                type={`${show.confirm_password ? 'text' : 'password'}`}
                                className={style.password_form_input}
                                id="confirm_password"
                                placeholder="Confirm password"
                                value={cpassword}
                                onChange={e => setCPassword(e.target.value)}
                            />

                            <span className={style.password_eye} onClick={() => setShow({ ...show, confirm_password: !show.confirm_password })}><BsEye /></span>
                        </div>
                        <Select variant='flushed' placeholder='Select (Optional)' onChange={e => setRole(e.target.value)} value={role}>
                            <option value='admin'>Admin</option>
                            {/* <option value='user'>User</option> */}
                        </Select>
                        {
                            error &&
                            <div>
                                {error}
                            </div>
                        }
                        <button type="submit" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
                    </div>
                </form>
                {/* <div className="text-center mt-3">
                    Already have an account? <Link href="/signin" className="hover:underline">Sign In</Link>
                </div> */}

                {/* ---------------- Form End ------------------> */}

            </div>
        </div>
    )
}

export default RegisterForm
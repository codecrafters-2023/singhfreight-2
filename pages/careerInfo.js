"use client"
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import style from '../styles/Register.module.css'
import { useToast } from '@chakra-ui/toast';

const CarrerInfo = () => {

    const [mcnumber, setMcNumber] = useState();
    
    const toast = useToast()
    const router = useRouter();

    const newObj = {
        mcnumber,
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(newObj);
        try {

            const res = axios.post('/api/careerInfo', newObj)
                .then(() => {
                    alert('New note Added successfully')
                })

            if (res) {
                router.push('/signup')
                setMcNumber("")
            }else {
                toast({
                    title: 'Error While Career Submit',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position: 'top',
                })
            }

            toast({
                title: 'Added Successfully',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top',
            })
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className={style.main}>
            <div className={style.signup_box}>
                {/* ---------------- Form Image ------------------> */}

                <Image src="/headerlogo.png" alt="Logo" className={style.logo} height={70} width={150} />

                {/* ---------------- Form Start ------------------> */}

                <h2 className="text-center">Career Info</h2>
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

                        <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
                    </div>
                </form>
                <div className="text-center mt-3">
                    Already set the Info? <Link href="/signup" className="text-primary">Sign Up</Link>
                </div>

                {/* ---------------- Form End ------------------> */}

            </div>
        </div>
    )
}

export default CarrerInfo
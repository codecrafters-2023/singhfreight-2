import { useToast } from '@chakra-ui/toast';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import style from '../styles/Loginin.module.css'

const CheckMcNumber = () => {

    const [mcnumber, setMcNumber] = useState('');
    const [error, setError] = useState('');

    const router = useRouter()
    const toast = useToast()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!mcnumber){
            { `${setError(<div style={{ color: "red" }}>Please fill the Mc Number</div>)}` }
        }

        try {
            const resUserExists = await fetch("api/mcNumberExists", {
                method: "POST",
                headers: {
                    "Content_type": "application/json",
                },
                body: JSON.stringify({ mcnumber })
            });

            const { user } = await resUserExists.json();


            if (user) {
                router.push('/signup');
                return;
            } else {
                toast({
                    title: 'First you have to set a career information',
                    status: 'info',
                    duration: 9000,
                    isClosable: true,
                    position: 'top',
                });
                router.push('https://onboard.dat.com/singhfreight')
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center items-center">
        {/* // <div className="flex justify-center items-center"> */}
            <div style={{border:"1px solid #000", padding:"20px", width:"30%", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", marginTop:"100px"}}>
                {/* <Image src="/headerlogo.png" alt="Logo" className={style.logo} height={70} width={150} /> */}
                {/* <h2 className="text-center">Login</h2> */}
                <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div className="form-group">
                            <label style={{fontSize:"18px", marginBottom:"10px",}} htmlFor="mcnumber">Mc Number</label>
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

                        {
                            error && 
                            <div>
                                { error }
                            </div>
                        }

                        <button type="submit" class="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CheckMcNumber
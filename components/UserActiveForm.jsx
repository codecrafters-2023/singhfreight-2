import React, { useState } from 'react'
import DashboardLayout from '../pages/loads/layout'
import { useRouter } from 'next/navigation';
import { useToast } from '@chakra-ui/toast';
import axios from 'axios';

const UserActiveForm = () => {

    const [mcnumber, setMcNumber] = useState();
    const [insuranceExpiry, setInsuranceExpiry] = useState();
    const [error, setError] = useState();

    const toast = useToast()

    const newObj = {
        mcnumber,
        insuranceExpiry
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!mcnumber || !insuranceExpiry ) {
            { `${setError(<div style={{ color: "red" }}>All field are required</div>)}` }
            return;
        }

        try {

            const res = axios.post('/api/careerInfo', newObj)
                .then(() => {
                    alert('New note Added successfully')
                })

            if (res) {
                setMcNumber("")
                setInsuranceExpiry("")
            } else {
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
        <>
            <DashboardLayout>
                <div className='w-1/2 mt-10 border border-slate-600 p-3'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Mc Number</label>
                        <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Please enter your Mc Number..." value={mcnumber} onChange={(e) => setMcNumber(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Insurance Expire</label>
                        <input type='date' className="form-control mb-4" id="exampleFormControlTextarea1" placeholder="Please enter your Insurance Expiry..." value={insuranceExpiry} onChange={(e) => setInsuranceExpiry(e.target.value)}/>
                    </div>
                    {
                        error && <div>
                            {error}
                        </div>
                    }
                    <div className="d-grid gap-2">
                        <button className="btn btn-success" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}

export default UserActiveForm
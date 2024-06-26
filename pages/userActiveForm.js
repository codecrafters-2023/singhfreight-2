import React, { useState } from 'react'
import DashboardLayout from '../pages/loads/layout'
import { useToast } from '@chakra-ui/toast';
import axios from 'axios';

const UserActiveForm = () => {

    const [companyName, setCompantName] = useState();
    const [mcnumber, setMcNumber] = useState();
    const [insuranceExpiry, setInsuranceExpiry] = useState();
    const [error, setError] = useState();

    const toast = useToast()

    const newObj = {
        companyName,
        mcnumber,
        insuranceExpiry
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!mcnumber || !insuranceExpiry || !companyName ) {
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
                setCompantName("")
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
                <div className='lg:w-1/2 mt-10 border border-slate-600 p-3 md:w-full sm:w-full'>
                    <div className="mb-3">
                        <label htmlFor="companyName" className="form-label text-lg">Company Name</label>
                        <input type="text" className="form-control mb-3" id="companyName" placeholder="Please enter your Company Name..." value={companyName} onChange={(e) => setCompantName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mcNumber" className="form-label text-lg">Mc Number</label>
                        <input type="text" className="form-control mb-3" id="mcNumber" placeholder="Please enter your Mc Number..." value={mcnumber} onChange={(e) => setMcNumber(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="insuranceExpirary" className="form-label text-lg">Insurance Expiry</label>
                        <input type='date' className="form-control mb-4" id="insuranceExpirary" placeholder="Please enter your Insurance Expiry..." value={insuranceExpiry} onChange={(e) => setInsuranceExpiry(e.target.value)}/>
                    </div>
                    {
                        error && <div>
                            {error}
                        </div>
                    }
                    <div className="d-grid gap-2">
                    <button type="submit" onClick={handleSubmit} className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}

export default UserActiveForm
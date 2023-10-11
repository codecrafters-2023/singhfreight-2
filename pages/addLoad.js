"use client"
import { Input, Select, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import DashboardLayout from './loads/layout'

const Postload = () => {
    const toast = useToast()

    const [reffNo, setReffNo] = useState('');
    const [PcityName, setPCityName] = useState('');
    const [PState, setPState] = useState('');
    const [PZipCode, setPZipCode] = useState('');
    const [Pdate, setPDate] = useState('');
    const [PTimeOne, setPTimeOne] = useState('');
    const [PTimeTwo, setPTimeTwo] = useState('');
    const [DcityName, setDCityName] = useState('');
    const [DState, setDState] = useState('');
    const [DZipCode, setDZipCode] = useState('');
    const [Ddate, setDDate] = useState('');
    const [DTimeOne, setDTimeOne] = useState('');
    const [DTimeTwo, setDTimeTwo] = useState('');
    const [price, setPrice] = useState('');
    const [equipment, setEquipment] = useState('');
    const [weight, setWeight] = useState('');
    const [distance, setDistance] = useState('');
    const [commodity, setCommodity] = useState('');
    const [loadInfo, setLoadInfo] = useState('');
    const [error, setError] = useState('');

    const [checkedvalues, setValue] = useState([]);

    // ---------------- HandleChange Funtion start ------------------>

    const handleChange = (event) => {

        const { value, checked } = event.target;

        if (checked) {
            setValue(pre => [...pre, value])
        } else {
            setValue(pre => {
                return [...pre.filter(skill => skill !== value)]
            })
        }
    }
    // ---------------- HandleChange Funtion end ------------------>

    // ---------------- HandleSubmit function Start ------------------>

    const handleSubmit = async (e) => {
        e.preventDefault()

        // -----------validation start-------------
        
        if (!PcityName || !PState || !PZipCode || !Pdate || !PTimeOne || !DcityName || !DState || !DZipCode || !Ddate || !DTimeOne || !price || !equipment || !weight || !distance || !commodity) {
            { `${setError(<div style={{ color: "red" }}>All Fields are required</div>)}` }
            return;
        }

        // -----------validation end------------- 

        const newObj = {
            reffNo, PcityName, PState, PZipCode, Pdate, PTimeOne, PTimeTwo, DcityName, DState, DZipCode, Ddate, DTimeOne, DTimeTwo, price, equipment, weight, distance, commodity, loadInfo, checkedvalues
        }

        const res = axios.post('/api/newNote', newObj)
            .then(() => {
                alert('New Note')
            })

        toast({
            title: 'Added Successfully',
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'top',
        })

        setReffNo(""), setPCityName(""), setPState(""), setPZipCode(""), setPDate(""), setPTimeOne(""), setPTimeTwo(""), setDCityName(""), setDState(""), setDZipCode(""), setDDate(""), setDTimeOne(""), setDTimeTwo(""), setPrice(""), setEquipment(""), setWeight(""), setDistance(""), setCommodity(""), setLoadInfo("")

    }

    // ---------------- HandleSubmit function End ------------------>

    return (
        <>
            <DashboardLayout>
                {/* ---------------- Form Start ------------------> */}
                <h1>ADD LOAD</h1>
                <div className='min-h-screen mt-6 border border-slate-900 p-6 shadow-lg'>
                    <div className='w-full' >
                        <form onSubmit={handleSubmit}>

                            {/* --------------Pickup Area Start--------------- */}

                            <div className='w-full'>
                                <div>
                                    <label className='text-lg text-slate-600 mb-2' htmlFor="reffNo" >Reff No</label>
                                    <Input
                                        size='xs'
                                        type="number"
                                        className="form-control"
                                        id="reffNo"
                                        name="reffNo"
                                        placeholder='Reff no'
                                        value={reffNo}
                                        onChange={e => setReffNo(e.target.value)}
                                    />
                                </div>

                                <h4 className='mt-3'>Pick Up Address</h4>
                                
                                <div>
                                    <div className='flex gap-3'>
                                        <div className="mb-2 w-1/2">
                                            <label className='text-lg text-slate-600 mb-2' htmlFor="PcityName" >City</label>
                                            <Input
                                                size='md'
                                                type="text"
                                                className="form-control"
                                                id="PcityName"
                                                name="PcityName"
                                                placeholder='City Name'
                                                value={PcityName}
                                                onChange={e => setPCityName(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-2 w-1/3">
                                            <label className='text-lg text-slate-600 mb-2' htmlFor="state" >State</label>
                                            <Input
                                                size='md'
                                                type="text"
                                                className="form-control"
                                                id="state"
                                                name="state"
                                                placeholder='State Name'
                                                value={PState}
                                                onChange={e => setPState(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-2 w-1/3">
                                            <label className='text-lg text-slate-600 mb-2' htmlFor="zip_code" >Zip Code</label>
                                            <Input
                                                size='md'
                                                type="text"
                                                className="form-control"
                                                id="zip_code"
                                                name="zip_code"
                                                placeholder='Zip Code'
                                                value={PZipCode}
                                                onChange={e => setPZipCode(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className='flex gap-3 mt-2'>
                                        <div className="mb-2 w-1/2">
                                            <label className='text-lg text-slate-600 mb-2' htmlFor="Pdate" >Date</label>
                                            <Input
                                                size='md'
                                                type="date"
                                                className="form-control"
                                                id="Pdate"
                                                name="Pdate"
                                                value={Pdate}
                                                onChange={e => setPDate(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-2 w-1/3">
                                            <label className='text-lg text-slate-600 mb-2' htmlFor="time" >Time Range</label>
                                            <Input
                                                size='md'
                                                type="time"
                                                className="form-control"
                                                id="time"
                                                name="time"
                                                value={PTimeOne}
                                                onChange={e => setPTimeOne(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-2 w-1/3">
                                            <label className='text-lg text-slate-600 mb-2' htmlFor="time" >Time Range</label>
                                            <Input
                                                size='md'
                                                type="time"
                                                className="form-control"
                                                id="time"
                                                name="time"
                                                value={PTimeTwo}
                                                onChange={e => setPTimeTwo(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --------------Pickup Area End--------------- */}

                            {/* --------------Delivery Area Start--------------- */}

                            <div className='w-full '>

                                <h4>Delivery Address</h4>
                                
                                <div className='flex gap-3'>
                                    <div className="mb-2 w-1/2">
                                        <label className='text-lg text-slate-600 mb-2'>City</label>
                                        <Input
                                            size='md'
                                            type="text"
                                            className="form-control"
                                            id="DcityName"
                                            name="DcityName"
                                            placeholder="Enter your City Name"
                                            autoComplete='off'
                                            value={DcityName}
                                            onChange={e => setDCityName(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-2 w-1/3">
                                        <label className='text-lg text-slate-600 mb-2' htmlFor="state" >State</label>
                                        <Input
                                            size='md'
                                            type="text"
                                            className="form-control"
                                            id="state"
                                            name="state"
                                            placeholder='State Name'
                                            value={DState}
                                            onChange={e => setDState(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-2 w-1/3">
                                        <label className='text-lg text-slate-600 mb-2' htmlFor="zip_code" >Zip Code</label>
                                        <Input
                                            size='md'
                                            type="text"
                                            className="form-control"
                                            id="zip_code"
                                            name="zip_code"
                                            placeholder='Zip Code'
                                            value={DZipCode}
                                            onChange={e => setDZipCode(e.target.value)}
                                        />
                                    </div>
                                </div>



                                <div className='py-3'>

                                    <div className='flex gap-3'>
                                        <div className="mb-2 w-1/2">
                                            <label className='text-lg text-slate-600 mb-2' htmlFor="date" >Date</label>
                                            <Input
                                                size='md'
                                                type="date"
                                                className="form-control"
                                                id="date"
                                                name="date"
                                                value={Ddate}
                                                onChange={e => setDDate(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-2 w-1/3">
                                            <label className='text-lg text-slate-600 mb-2' htmlFor="time" >Time Range</label>
                                            <Input
                                                size='md'
                                                type="time"
                                                className="form-control"
                                                id="time"
                                                name="time"
                                                value={DTimeOne}
                                                onChange={e => setDTimeOne(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-2 w-1/3">
                                            <label className='text-lg text-slate-600 mb-2' htmlFor="time" >Time Range</label>
                                            <Input
                                                size='md'
                                                type="time"
                                                className="form-control"
                                                id="time"
                                                name="time"
                                                value={DTimeTwo}
                                                onChange={e => setDTimeTwo(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --------------Delivery Area End--------------- */}

                            {/* --------------Price, Equipment, Weight Start--------------- */}

                            <div className='w-full '>
                                <div className='py-3'>
                                    <div className='flex gap-3'>
                                        <div className="mb-2 w-1/2">
                                            <label className='text-lg text-slate-600 mb-2' htmlFor="price" >Offer Price</label>
                                            <Input
                                                size='md'
                                                type="text"
                                                className="form-control"
                                                id="price"
                                                name="price"
                                                placeholder="Enter your Price"
                                                autoComplete='off'
                                                value={price}
                                                onChange={e => setPrice(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-2 w-1/3">
                                            <label className='text-lg text-slate-600 mb-2' htmlFor="equipment" >Equ. Type</label>
                                            <Select variant='flushed' placeholder='Select' value={equipment} onChange={e => setEquipment(e.target.value)}>
                                                <option value='Reefer'>Reefer</option>
                                                <option value='Power only'>Power Only</option>
                                                <option value='Intermodal'>Intermodal</option>
                                            </Select>
                                        </div>
                                        <div className="mb-2 w-1/3">
                                            <label className='text-lg text-slate-600 mb-2' htmlFor="weight" >Weight</label>
                                            <Input
                                                size='md'
                                                type="text"
                                                className="form-control"
                                                id="weight"
                                                name="weight"
                                                placeholder="Weight"
                                                autoComplete='off'
                                                value={weight}
                                                onChange={e => setWeight(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --------------Price, Equipment, Weight End--------------- */}

                            {/* --------------miles, Commodity Start--------------- */}

                            <div className='w-full'>
                                <div className='py-3'>
                                    <div className='flex gap-3'>
                                        <div className="mb-2 w-1/2">
                                            <label className='text-lg text-slate-600 mb-2' htmlFor="distance" >Miles</label>
                                            <Input
                                                size='md'
                                                type="text"
                                                className="form-control"
                                                id="distance"
                                                name="distance"
                                                placeholder="Enter Distance"
                                                autoComplete='off'
                                                value={distance}
                                                onChange={e => setDistance(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-2 w-1/2">
                                            <label className='text-lg text-slate-600 mb-2' htmlFor="commodity" >Commodity</label>
                                            <Input
                                                size='md'
                                                type="text"
                                                className="form-control"
                                                id="commodity"
                                                name="commodity"
                                                placeholder="Enter Commodity"
                                                autoComplete='off'
                                                value={commodity}
                                                onChange={e => setCommodity(e.target.value)}
                                            />
                                        </div>
                                        <div className='flex  mb-2 w-1/2' style={{ marginTop: "40px" }}>
                                            <div className="mb-2 w-1/2 g-3">
                                                <input type='checkbox' value='multiple' onChange={handleChange} /><span className='ml-2'>Multiple Rounds</span>
                                            </div>
                                            <div className="mb-2 w-1/2">
                                                <input type='checkbox' value='round' onChange={handleChange} /><span className='ml-2'>Round Trip</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --------------Price, Equipment, Weight End--------------- */}

                            {/* --------------Load Details Start--------------- */}

                            <div className="mb-2 py-3">
                                <label htmlFor="content" className='text-lg text-slate-600 mb-2'>Load Details</label>
                                <textarea
                                    className="w-full border rounded-lg p-2 outline-blue-500"
                                    id="content"
                                    name="content"
                                    rows="5"
                                    placeholder='About Load...'
                                    autoComplete='off'
                                    value={loadInfo}
                                    onChange={e => setLoadInfo(e.target.value)}
                                />
                            </div>

                            {/* --------------Load Details End--------------- */}

                            {/* --------------Error Handling Start--------------- */}

                            {
                                error &&
                                <div style={{ marginBottom: "10px" }}>
                                    {error}
                                </div>
                            }

                            {/* --------------Error Handling End--------------- */}

                            {/* --------------Submit Button Start--------------- */}

                            <div className="d-grid gap-2">
                                <button className="btn btn-success" type="submit">SUBMIT</button>
                            </div>

                            {/* --------------Submit Button End--------------- */}

                        </form>
                    </div>
                </div>
                {/* --------------Form End--------------- */}
            </DashboardLayout>
        </>

    )
}

export default Postload
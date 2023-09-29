import React, { useState } from "react";
import clientPromise from "../lib/mongo";
import { useSession } from "next-auth/react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { Input, Tooltip, } from '@chakra-ui/react'
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loader from "./loader";


const Alldata = ({ loads }) => {

    const { data: session } = useSession();
    const router = useRouter();

    const [loadData, setLoadData] = useState(loads);
    const [allLoaddata, setAllLoadData] = useState(loads);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [firstDate, setFirstDate] = useState("")
    const [secondDate, setSecondDate] = useState("")

    if(!loadData) {
        return <Loader />
    }
    //<---------------- Admin Part Start ------------------->

    if (session?.user?.role === "admin") {
        return router.push('/admin')

        //<---------------- Admin Part End ------------------->

        // <------------------ User Part Start -------------------->

    } else if (session?.user?.role === "user") {

        // <------------------ Date Picker Part Start -------------------->

        const selectionRange = {
            startDate: startDate,
            endDate: endDate,
            key: 'selection',
        }

        const handleSelect = (date) => {

            let filtered = allLoaddata.filter((user) => {
                let userDate = new Date(user["date"]);
                return (
                    userDate >= date.selection.startDate &&
                    userDate <= date.selection.endDate
                )
            })

            setStartDate(date.selection.startDate)
            setEndDate(date.selection.endDate)
            setLoadData(filtered)
            setFirstDate(date.selection.startDate.toLocaleDateString())
            setSecondDate(date.selection.endDate.toLocaleDateString())
        }

        const clearFilter = () => {
            window.location.reload();
        }

        const firstDatevalue = startDate.toLocaleDateString();
        const secondDatevalue = endDate.toLocaleDateString();

        // <------------------ Date Picker Part End -------------------->

        return (
            <div style={{ display: "grid", gridTemplateColumns: "25% 1fr", padding: "10px 30px", height: "100vh", backgroundColor: "rgb(241 245 249)" }} >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1> Welcome <span >{session?.user?.name}</span> </h1>

                    {/* <----------------Filter Area start----------------> */}

                    <div style={{ display: "flex", justifyContent: "space-between" }} >
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div >
                                <label>From </label>
                                <Input
                                    value={firstDate}
                                    onChange={() => { setFirstDate(firstDatevalue) }}
                                    onClick={() => setShow(!show)}
                                    style={{ width: "150px", backgroundColor: "#fff", marginLeft: "5px" }}

                                />
                            </div>
                            <div>
                                <label>To</label>
                                <Input
                                    value={secondDate}
                                    onChange={() => { setSecondDate(secondDatevalue) }}
                                    onClick={() => setShow(!show)}
                                    style={{ width: "150px", backgroundColor: "#fff", marginLeft: "5px" }}

                                />
                            </div>
                        </div>
                        {
                            show ? <DateRange
                                ranges={[selectionRange]}
                                onChange={handleSelect}
                            /> : ""
                        }
                        <button className="btn btn-warning" style={{ height: "40px" }} onClick={clearFilter}>Clear filter</button>
                    </div>
                </div>

                {/* <----------------Filter Area End----------------> */}

                <div className="w-full" style={{padding:"0 100px"}} >
                    {loadData.map((note) => (
                        <>
                            <div className=' m-auto mt-5  bg-white hover:shadow-xl py-2' style={{
                                display: "grid", gridTemplateColumns: "1fr 1fr 500px"
                                , width: "1fr"
                            }}>
                                <div className='w-full flex justify-center items-center flex-col h-full'>
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-5xl font-bold text-cyan-600'>${note.price}</span>
                                        <span className='font-semibold text-sm text-slate-500'>FTL- {note.equipment} </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col w-full'>
                                        <b className='flex justify-end'>{note.PcityName}, {note.PState}</b>
                                        {/* <span className='flex justify-end text-base font-bold'>{note.PcityName}</span> */}
                                        <span className='text-sm font-medium flex justify-end'> {note.Pdate}, {note.PTimeOne}-{note.PTimeTwo} </span>
                                    </div>
                                    <br />
                                    <div className='flex flex-col w-full'>
                                        <b className='flex justify-end'>{note.DcityName}, {note.DState}</b>
                                        <span className='text-sm font-medium flex justify-end'> {note.Ddate}, {note.DTimeOne}-{note.DTimeTwo} </span>
                                    </div>
                                </div>
                                <div className=' flex items-center px-5 justify-center'>
                                    <Tooltip hasArrow label='View Details' bg='gray.300' color='black'>
                                        <Link href={`loads/${note._id}`} className="bg-cyan-600 px-3 py-1 text-white text-lg" >View Detail</Link>
                                    </Tooltip>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        );
    }
    // <------------------ User Part End -------------------->
}

export default Alldata;

// ----------------Data Import from Server Start ------------------>

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("singhfreight");

        const loads = await db
            .collection("loads")
            .find({})
            .sort({ _id: -1 })
            .toArray();

        return {
            props: { loads: JSON.parse(JSON.stringify(loads))},
        };
    } catch (e) {
        console.error(e);
    }
}

// ----------------Data Import from Server End ------------------>



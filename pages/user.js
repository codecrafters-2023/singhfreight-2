import React, { useState } from "react";
import clientPromise from "../lib/mongo";
import { useSession } from "next-auth/react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { Tooltip, } from '@chakra-ui/react'
import Link from "next/link";
import { useRouter } from "next/navigation";
import style from '../styles/allloads.module.css'

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

    //<---------------- Admin Part Start ------------------->

    if (session?.user?.role === "admin") {
        return router.push('/admin')

        //<---------------- Admin Part End ------------------->

        // <------------------ User Part Start -------------------->

    }else if(session?.user?.role === ""){
        router.push('/signin');
    } else if (session?.user?.role === "user") {

        // <------------------ Date Picker Part Start -------------------->

        const selectionRange = {
            startDate: startDate,
            endDate: endDate,
            key: 'selection',
        }

        const handleSelect = (date) => {

            let filtered = allLoaddata.filter((user) => {
                let userDate = new Date(user["Pdate"]);
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
            <div style={{ display: "grid", gridTemplateColumns: "25% 1fr", padding: "10px 30px", height: "100vh" }} >

                    {/* <----------------Filter Area start----------------> */}

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", flexDirection:"column" }} >
                        <div style={{ display: "flex", gap: "20px", marginTop:"50px" }}>
                            <div style={{display:"flex"}}>
                                <label className='text-lg text-slate-600 mb-2'>From </label>
                                <input
                                    value={firstDate}
                                    onChange={() => { setFirstDate(firstDatevalue) }}
                                    onClick={() => setShow(!show)}
                                    style={{ width: "150px",border:"1px solid #000", marginLeft: "5px", outline:"none", height:"30px" }}

                                />
                            </div>
                            <div style={{display:"flex"}}>
                                <label className='text-lg text-slate-600 mb-2'>To</label>
                                <input
                                    value={secondDate}
                                    onChange={() => { setSecondDate(secondDatevalue) }}
                                    onClick={() => setShow(!show)}
                                    style={{ width: "150px",border:"1px solid #000", marginLeft: "5px", outline:"none" , height:"30px"}}

                                />
                            </div>
                        </div>
                        {
                            show ? <DateRange
                                ranges={[selectionRange]}
                                onChange={handleSelect}
                            /> : ""
                        }
                        <button className="btn btn-warning" style={{ height: "40px", marginTop:"20px" }} onClick={clearFilter}>Clear filter</button>
                    </div>
                </div>

                {/* <----------------Filter Area End----------------> */}

                <div className="w-full" style={{padding:"0 100px"}} >
                    {loadData.map((note) => (
                        <>
                         <div className={style.main_div}>
                                                <div className={style.price_div}>
                                                    <div className={style.price_inner_div}>
                                                        <span className='text-5xl font-bold text-cyan-600'>${note.price}</span>
                                                        <span className=' text-sm text-slate-500'>FTL- {note.equipment} </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={style.Pickup_load_div}>
                                                        <b className='flex font-normal justify-end'>{note.PcityName}, {note.PState}</b>
                                                        <span className='text-sm font-light flex justify-end'> {note.Pdate}, {note.PTimeOne}-{note.PTimeTwo} </span>
                                                    </div>
                                                    <br />
                                                    <div className={style.dilivery_load_div}>
                                                        <b className='flex font-normal justify-end'>{note.DcityName}, {note.DState}</b>
                                                        <span className='text-sm font-light flex justify-end'> {note.Ddate}, {note.DTimeOne}-{note.DTimeTwo} </span>
                                                    </div>
                                                </div>
                                                <div className={style.button_div}>
                                                    <Tooltip hasArrow label='View Details' bg='gray.300' color='black'>
                                                        <Link href={`/loads/${note._id}`} className="bg-cyan-600 px-3 py-1 text-white text-lg" >View Detail</Link>
                                                    </Tooltip>

                                                    {
                                                        note.show?
                                                        <Tooltip hasArrow label='Booked' bg='gray.300' color='black'>
                                                        <div className="bg-cyan-600 px-3 py-1 text-white text-lg" >Booked</div>
                                                    </Tooltip>:
                                                    
                                                    <Tooltip hasArrow label='Book load' bg='gray.300' color='black'>
                                                        <button onClick={() => handleBookLoad(noteId)} className="bg-cyan-600 px-3 py-1 text-white text-lg" >Book load</button>
                                                    </Tooltip>
                                                    }
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



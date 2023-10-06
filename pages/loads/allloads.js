import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { AiFillLock } from 'react-icons/ai';
import Link from 'next/link';
import clientPromise from '../../lib/mongo';
import { Checkbox, Input, Select, Tooltip } from '@chakra-ui/react';
import style from '../../styles/allloads.module.css'
import DashboardLayout from './layout';


export default function Home({ notes }) {

    const [visibility, setVisibility] = useState(false);
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
    const [multiple, setMultiple] = useState('');
    const [rounds, setRounds] = useState('');
    const [commodity, setCommodity] = useState('');
    const [loadInfo, setLoadInfo] = useState('');
    const [noteId, setNoteId] = useState('');

    const [show, setShow] = useState('');

    console.log(show);
    const router = useRouter()

    const editForm = (reffNo, PcityName, PState, PZipCode, Pdate, PTimeOne, PTimeTwo, DcityName, DState, DZipCode, Ddate, DTimeOne, DTimeTwo, price, equipment, weight, distance, commodity, multiple, rounds, loadInfo, show, noteId) => {
        setVisibility(visibility => !visibility)
        setReffNo(reffNo)
        setPCityName(PcityName)
        setPState(PState)
        setPZipCode(PZipCode)
        setPDate(Pdate)
        setPTimeOne(PTimeOne)
        setPTimeTwo(PTimeTwo)
        setDCityName(DcityName)
        setDState(DState)
        setDZipCode(DZipCode)
        setDDate(Ddate)
        setDTimeOne(DTimeOne)
        setDTimeTwo(DTimeTwo)
        setPrice(price)
        setEquipment(equipment)
        setWeight(weight)
        setDistance(distance)
        setCommodity(commodity)
        setMultiple(multiple)
        setRounds(rounds)
        setLoadInfo(loadInfo)
        setShow(show)
        setNoteId(noteId)
    }

    const editValue = (show, noteId) => {
        setShow(show)
        setNoteId(noteId)
    }
    const handleBookLoad = async (noteId) => {
        const update = {
            show,
            noteId
        }

        const res = await axios.put(`/api/bookload?id=${noteId}`, { update })
            .then(() => {
                window.location.reload(false);
            })
    }

    const updateNote = async (noteId) => {
        const noteObj = {
            reffNo,
            PcityName,
            PState,
            PZipCode,
            Pdate,
            PTimeOne,
            PTimeTwo,
            DcityName,
            DState,
            DZipCode,
            Ddate,
            DTimeOne,
            DTimeTwo,
            price,
            equipment,
            weight,
            distance,
            commodity,
            multiple,
            rounds,
            loadInfo,
            show,
            noteId,
        }
        // console.log(noteObj);
        await axios.put(`/api/updateNote?id=${noteId}`, noteObj)
            .then(() => {
                window.location.reload(false);
            })
    }

    const deleteNote = async (noteId) => {
        axios.delete(`/api/deleteNote?id=${noteId}`).then(() => {
            router.refresh()
        })
    }

    return (
        <>
            <DashboardLayout >
                <div style={{ height: "100vh" }}>
                    {/* <Link href={'/loadPost'} className="bg-cyan-400 px-3 py-2 m-5">Add Load</Link> */}
                    <div className='mt-5' >
                        <div >
                            {
                                notes.map((note) => {
                                    return (
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
                                                        <Link href={`${note._id}`} className="bg-cyan-600 px-3 py-1 text-white text-lg" >View Detail</Link>
                                                    </Tooltip>

                                                    <Tooltip hasArrow label='Book load' bg='gray.300' color='black'>
                                                        <button onClick={() => handleBookLoad(noteId)} className="bg-cyan-600 px-3 py-1 text-white text-lg" >Book load</button>
                                                    </Tooltip>

                                                    {
                                                        note.show ? <div><AiFillLock /></div>
                                                            :
                                                            <div >
                                                                <Tooltip hasArrow label='Edit' bg='gray.300' color='black'>
                                                                    <button onClick={(
                                                                    ) => editForm(
                                                                        note.reffNo,
                                                                        note.PcityName,
                                                                        note.PState,
                                                                        note.PZipCode,
                                                                        note.Pdate,
                                                                        note.PTimeOne,
                                                                        note.PTimeTwo,
                                                                        note.DcityName,
                                                                        note.DState,
                                                                        note.DZipCode,
                                                                        note.Ddate,
                                                                        note.DTimeOne,
                                                                        note.DTimeTwo,
                                                                        note.price,
                                                                        note.equipment,
                                                                        note.weight,
                                                                        note.distance,
                                                                        note.commodity,
                                                                        note.multiple,
                                                                        note.rounds,
                                                                        note.loadInfo,
                                                                        note.show,
                                                                        note._id)} className='hover:text-green-600 text-2xl' ><FiEdit data-bs-toggle="modal" data-bs-target="#exampleModal" /></   button>
                                                                </Tooltip>
                                                            </div>
                                                    }

                                                    {/* <button onClick={() =>
                                                        editValue(
                                                            note.show,
                                                            note._id
                                                        )}>book</button> */}

                                                    <Tooltip hasArrow label='Delete' bg='gray.300' color='black'>
                                                        <button onClick={() => deleteNote(note._id)} className='hover:text-rose-600 text-2xl' ><MdDelete /></button>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                            {/* <input type="text" value={show} onChange={(e) => setShow(e.target.value)} /> */}

                            {/* -------------Update Form Start----------------- */}

                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{marginLeft:"-150px"}}>
                                <div className="modal-dialog">
                                    <div className="modal-content" style={{ width: "1000px" }}>
                                        <div className="modal-header" style={{ width: "1000px" }}>
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Form</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body" style={{ width: "1000px" }}>
                                            <div className='min-h-screen bg-white'>
                                                <div className="container w-2/3 shadow-lg" >
                                                    <form >

                                                        {/* --------------Pickup Area Start--------------- */}

                                                        <div className='w-full'>
                                                            {/* <div>
                                                                <label className='text-lg text-slate-600 mb-2' htmlFor="reffNo" >Reff No</label>
                                                                <Input
                                                                    size='xs'
                                                                    type="text"
                                                                    className="form-control w-40"
                                                                    id="reffNo"
                                                                    name="reffNo"
                                                                    placeholder='Reff no'
                                                                    value={show}
                                                                    onChange={e => setShow(true)}
                                                                // onChange={e => setShow(e.target.value)}
                                                                />
                                                            </div> */}
                                                            <div>
                                                                <label className='text-lg text-slate-600 mb-2' htmlFor="reffNo" >Reff No</label>
                                                                <Input
                                                                    size='xs'
                                                                    type="text"
                                                                    className="form-control w-40"
                                                                    id="reffNo"
                                                                    name="reffNo"
                                                                    placeholder='Reff no'
                                                                    value={reffNo}
                                                                    onChange={e => setReffNo(e.target.value)}
                                                                />
                                                            </div>

                                                            <h4 className='mt-3'>Pick Up Address</h4>
                                                            
                                                            <div className=' px-3 py-3'>
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
                                                            
                                                            <div className='flex gap-3 px-3'>
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



                                                            <div className=' px-3 py-3'>

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
                                                            <div className=' px-3 py-3'>
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
                                                            <div className=' px-3 py-3'>
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
                                                                        <div className="mb-2 w-1/2">
                                                                            <Checkbox name='multiple' value={multiple} onChange={(e) => setMultiple('multiple')}>Multiple</Checkbox>
                                                                        </div>
                                                                        <div className="mb-2 w-1/2">
                                                                            <Checkbox name='multiple' value={rounds} onChange={(e) => setRounds('round')}>round</Checkbox>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* --------------Price, Equipment, Weight End--------------- */}

                                                        {/* --------------Load Details Start--------------- */}

                                                        <div className="mb-2 px-3 py-3">
                                                            <label htmlFor="content" className='text-lg text-slate-600 mb-2'>Load Details</label>
                                                            <textarea
                                                                className="form-control"
                                                                id="content"
                                                                name="content"
                                                                rows="5"
                                                                placeholder='About Load...'
                                                                autoComplete='off'
                                                                value={loadInfo}
                                                                onChange={e => setLoadInfo(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className='px-3 py-3'>
                                                            <button type='submit' onClick={() => updateNote(noteId)} className='bg-green-500 p-1 px-3 rounded-lg text-white'>Update</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* -------------Update Form End----------------- */}

                        </div>
                    </div>
                </div >


                {/* <button type="button" class="btn btn-primary" >
                    Launch demo modal
                </button> */}


            </DashboardLayout >
        </>
    )
}



export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("singhfreight");

        const notes = await db
            .collection("loads")
            .find({})
            .sort({ _id: -1 })
            .toArray();

        return {
            props: { notes: JSON.parse(JSON.stringify(notes)) },
        };
    } catch (e) {
        console.error(e);
    }
}
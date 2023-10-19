import React, { useState } from "react";
import clientPromise from "../lib/mongo";
import axios from "axios";
import { useRouter } from "next/navigation";
import DashboardLayout from "./loads/layout";
import style from '../styles/AdminDashboard.module.css'
import Link from "next/link";
import {
    Tbody,
    Tr,
    Td,
    Tooltip,
    TableContainer,
    Table,
    Thead,
    Th,
} from '@chakra-ui/react'

const Admin = ({ users, loads }) => {
    return (
        <>
            <DashboardLayout>
                <div>
                    <div>
                        <h3 className="mt-3">Recently Added Loads</h3>
                        <div className={style.main_div}>
                            {
                                loads.map((load) => {
                                    return (
                                        <>
                                            <div className={style.loads_main_div}>
                                                <div className={style.price_div}>
                                                    <div className={style.price_inner_div}>
                                                        <span className='text-5xl font-bold text-cyan-600'>${load.price}</span>
                                                        <span className=' text-sm text-slate-500'>FTL- {load.equipment} </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={style.Pickup_load_div}>
                                                        <b className='flex font-normal justify-end'>{load.PcityName}</b>
                                                        <span className='text-sm font-light flex justify-end'> {load.Pdate}, {load.PTimeOne}-{load.PTimeTwo} </span>
                                                    </div>
                                                    <br />
                                                    <div className={style.dilivery_load_div}>
                                                        <b className='flex font-normal justify-end'>{load.DcityName}</b>
                                                        <span className='text-sm font-light flex justify-end'> {load.Ddate}, {load.DTimeOne}-{load.DTimeTwo} </span>
                                                    </div>
                                                </div>
                                                <div className={style.button_div}>
                                                    <Tooltip hasArrow label='View Details' bg='gray.300' color='black'>
                                                        <Link href={`/loads/${load._id}`} className="bg-cyan-600 px-3 py-1 text-white text-lg" >View Detail</Link>
                                                    </Tooltip>
                                                    {
                                                        load.show ?
                                                            <Tooltip hasArrow label='Booked' bg='gray.300' color='black'>
                                                                <div className="bg-cyan-600 px-3 py-1 text-white text-lg" >Booked</div>
                                                            </Tooltip> :

                                                            <Tooltip hasArrow label='Book load' bg='gray.300' color='black'>
                                                                <button className="bg-cyan-600 px-3 py-1 text-white text-lg" >Book load</button>
                                                            </Tooltip>
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


                <div>
                    <h3 className="mt-5">Recently Active Users</h3>
                    <div className={style.main_div}>
                        <TableContainer >
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th style={{ fontSize: "18px" }}>Name</Th>
                                        <Th style={{ fontSize: "18px" }}>Email</Th>
                                        <Th style={{ fontSize: "18px" }}>Role</Th>
                                    </Tr>
                                </Thead>
                                {users.map((user) => (
                                    <>
                                        <Tbody key={user._id}>
                                            <Tr className={style.td_div}>
                                                <Td>{user.firstName}</Td>
                                                <Td>{user.email}</Td>
                                                <Td>{user.role}</Td>
                                            </Tr>
                                        </Tbody>
                                    </>
                                ))}
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}

export default Admin


export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("singhfreight");

        const users = await db
            .collection("users")
            .find({})
            .sort({ _id: -1 })
            .limit(5)
            .toArray();

        const loads = await db
            .collection("loads")
            .find({})
            .sort({ _id: -1 })
            .limit(3)
            .toArray();

        return {
            props: { users: JSON.parse(JSON.stringify(users)), loads: JSON.parse(JSON.stringify(loads)) },
        };
    } catch (e) {
        console.error(e);
    }
}

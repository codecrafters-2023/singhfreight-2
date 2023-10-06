import React, { useState } from "react";
import clientPromise from "../lib/mongo";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Input,
    Tooltip,
} from '@chakra-ui/react'
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import axios from "axios";
import { useRouter } from "next/navigation";
import DashboardLayout from "./loads/layout";



const Admin = ({ users }) => {

    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [noteId, setNoteId] = useState('');


    // -----------------Delete User Start ------------------->

    const deleteNote = async (noteId) => {
        axios.delete(`/api/deleteUser?id=${noteId}`).then(() => {
            router.refresh()
        })
    }

    // ------------- Delete User End ----------------->


    // ------------- Edit User Start ----------------->

    const editForm = (name, email, role, noteId) => {
        setName(name)
        setEmail(email)
        setRole(role)
        setNoteId(noteId)
    }

    const updateNote = async (noteId) => {
        const noteObj = {
            name,
            email,
            role
        }
        // console.log(noteObj);
        await axios.put(`/api/updateUser?id=${noteId}`, noteObj)
            .then(() => {
                router.refresh();
            })
    }

    // ------------- Edit User End ----------------->

    return (
        <>
            <DashboardLayout>
                <div style={{ height: "100vh", }} className="w-full">
                    <h1 style={{ margin: "20px 0 100px 0" }}>All Users </h1>
                    <TableContainer >
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th style={{fontSize:"18px"}}>Name</Th>
                                    <Th style={{fontSize:"18px"}}>Email</Th>
                                    <Th style={{fontSize:"18px"}}>Role</Th>
                                    <Th style={{fontSize:"18px"}}>Verify</Th>
                                </Tr>
                            </Thead>
                            {users.map((user) => (
                                <>
                                    <Tbody key={user._id}>
                                        <Tr>
                                            <Td >{user.name}</Td>
                                            <Td>{user.email}</Td>
                                            <Td>{user.role}</Td>
                                            <Td>
                                                <div className='flex gap-4 items-start'>
                                                    <Tooltip hasArrow label='Edit' bg='gray.300' color='black'>
                                                        <button onClick={(name, email, password, noteId) => editForm(user.name, user.email, user._id)} className='hover:text-green-600 text-2xl' title='Edit' ><FiEdit data-bs-toggle="modal" data-bs-target="#exampleModal" /></   button>
                                                    </Tooltip>

                                                    <Tooltip hasArrow label='Delete' bg='gray.300' color='black'>
                                                        <button onClick={() => deleteNote(user._id)} className='hover:text-rose-600 text-2xl' title='Delete'><MdDelete /></button>
                                                    </Tooltip>
                                                </div>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </>
                            ))}
                        </Table>
                    </TableContainer>

                    {/* ----------------update form start---------------- */}

                    <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content"style={{width:"700px"}}>
                                <div class="modal-header"style={{width:"700px"}}>
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Update Form</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body" style={{width:"700px"}}>
                                    <div className='w-full m-auto  p-4 text-white rounded-lg'>
                                        <div>
                                            <label className="text-black">Name</label>
                                            <input type='text' placeholder='Title' id='name' value={name} onChange={(e) => setName(e.target.value)} className='w-full p-2 text-slate-500 border border-gray-900 mb-4' />
                                        </div>
                                        <div>
                                            <label className="text-black">Email</label>
                                            <input onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Content' id='email' value={email} className='w-full p-2 text-slate-500 border border-gray-900 mb-4'/>
                                        </div>
                                        <div>
                                            <label className="text-black">Role</label>
                                            <input onChange={(e) => setRole(e.target.value)} type='text' placeholder='Content' id='role' value={role} className='w-full p-2 text-slate-500 border border-gray-900 mb-4'/>
                                        </div>
                                        <div className='flex gap-3 '>
                                            <button type="submit" class="btn btn-success" onClick={() => updateNote(noteId)}>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ----------------update form end---------------- */}

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
            .toArray();

        return {
            props: { users: JSON.parse(JSON.stringify(users)) },
        };
    } catch (e) {
        console.error(e);
    }
}
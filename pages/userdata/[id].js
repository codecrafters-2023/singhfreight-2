import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loader from "../loader";
import { Tooltip } from "@chakra-ui/react";
import axios from "axios";

const UserProfile = () => {
    const router = useRouter();
    const { id } = router.query;
    const [UserDetail, setUserDetail] = useState(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [noteId, setNoteId] = useState("");

    useEffect(() => {
        if (id) {
            // Fetch UserDetail data from the API
            fetch(`/api/userDetail/${id}`)
                .then((response) => response.json())
                .then((data) => setUserDetail(data))
                .catch((error) => console.error("Error fetching UserDetail:", error));
        }
    }, [id]);

    if (!UserDetail) {
        return <Loader />;
    }

    // -----------------Delete User Start ------------------->

    const deleteNote = async (noteId) => {
        const res = axios.delete(`/api/deleteUser?id=${noteId}`).then(() => {
            router.reload();
        });

        if (res.ok) {
            router.push('/userdata/activeUsers')
        }
    };

    // ------------- Delete User End ----------------->

    // ------------- Edit User Start ----------------->

    const editForm = (name, email, mobileNo, companyName, noteId) => {
        setName(name);
        setEmail(email);
        setMobileNo(mobileNo);
        setCompanyName(companyName);
        setNoteId(noteId);
    };

    const updateNote = async (noteId) => {
        const noteObj = {
            name, email, mobileNo, companyName, noteId
        };
        // console.log(noteObj);
        await axios.put(`/api/updateUser?id=${noteId}`, noteObj).then(() => {
            router.reload();
        });
    };

    // ------------- Edit User End ----------------->

    return (
        <>
            <h1 className="mx-5 my-3">Client Detail</h1>

            {/* ------------------User Detail Table Start---------------------- */}

            <div className="flex justify-center mt-5 ">
                <div className="col-lg-8 col-md-10">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3 ">
                                    <p className="mb-0">Name</p>
                                </div>
                                <div className="col-sm-9 ">
                                    <p className="text-muted mb-0">{UserDetail.name}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 ">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{UserDetail.email}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 ">
                                    <p className="mb-0">Mobile No.</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{UserDetail.mobileNo}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 ">
                                    <p className="mb-0">Company Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{UserDetail.companyName}</p>
                                </div>
                            </div>
                            {/* <hr /> */}
                        </div>
                    </div>
                </div>

            </div>

            {/* ------------------User Detail Table End---------------------- */}

            <div className="flex justify-center gap-3">

                <Tooltip hasArrow label="Edit" bg="gray.300" color="black">
                    <button
                        onClick={(name, email, mobileNo, companyName, noteId) =>
                            editForm(UserDetail.name, UserDetail.email, UserDetail.mobileNo, UserDetail.companyName,UserDetail._id)
                        }
                        style={{ backgroundColor: "rgb(14, 140, 179)", padding: "4px 12px", color: "#fff", fontSize: "18px" }}
                    >
                        Update
                    </button>
                </Tooltip>

                <Tooltip hasArrow label="Delete" bg="gray.300" color="black">
                    <button
                        onClick={() => deleteNote(UserDetail._id)}
                        style={{ backgroundColor: "rgb(14, 140, 179)", padding: "4px 12px", color: "#fff", fontSize: "18px" }}
                    >
                        Delete
                    </button>
                </Tooltip>
            </div>

            {/* ----------------update form start---------------- */}

            {/* <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            > */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
                {/* <form > */}
                <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
                    <h2 className="ai-story-maker-dream-form text-black font-bold text-2xl">Add Client</h2>

                    <div className="mt-4">
                        <label className="text-black" htmlFor="title">Name</label>
                        <input className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mt-4 flex flex-row space-x-2">
                        <div className="flex-1">
                            <label className="text-black" htmlFor="emotions">Email</label>
                            <input className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="emotions" type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="flex-1">
                            <label className="text-black" htmlFor="symbols">Mobile No.</label>
                            <input className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="symbols" type="number"
                                value={mobileNo}
                                onChange={(e) => setMobileNo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="text-black" htmlFor="description">Company Name</label>
                        <textarea className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="description"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="mt-4 flex justify-end">
                        <button className="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900" id="submit-button" type="submit" onClick={() => updateNote(noteId)}>Submit</button>
                    </div>

                </div>
                {/* </form> */}


            </div>
            {/* </div> */}

            {/* ----------------update form end---------------- */}
        </>
    );
};

export default UserProfile;

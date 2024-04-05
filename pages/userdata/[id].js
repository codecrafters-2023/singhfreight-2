import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loader from "../loader";
import { Tooltip } from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const UserProfile = () => {
    const router = useRouter();
    const { id } = router.query;
    const [UserDetail, setUserDetail] = useState(null);

    const [companyName, setCompanyName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [reefers, setReefers] = useState("");
    const [dryVans, setDryVans] = useState("");
    const [powerUnit, setPowerUnit] = useState("");
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
        axios.delete(`/api/deleteUser?id=${noteId}`).then(() => {
            router.reload();
        });
    };

    // ------------- Delete User End ----------------->

    // ------------- Edit User Start ----------------->

    const editForm = (companyName, firstName, lastName, email, role, reefers, dryVans, powerUnit, noteId) => {
        setCompanyName(companyName);
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setRole(role);
        setReefers(reefers);
        setDryVans(dryVans);
        setPowerUnit(powerUnit)
        setNoteId(noteId);
    };

    const updateNote = async (noteId) => {
        const noteObj = {
            companyName,
            firstName,
            lastName,
            email,
            role,
            reefers,
            dryVans,
            powerUnit
        };
        // console.log(noteObj);
        await axios.put(`/api/updateUser?id=${noteId}`, noteObj).then(() => {
            router.reload();
        });
    };

    // ------------- Edit User End ----------------->

    return (
        <>
            <h1 className="mx-5 my-3">User Detail</h1>

            {/* ------------------User Detail Table Start---------------------- */}

            <div className="flex justify-center mt-5 ">
                <div className="col-lg-8 col-md-10">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3 ">
                                    <p className="mb-0">Company Name</p>
                                </div>
                                <div className="col-sm-9 ">
                                    <p className="text-muted mb-0">{UserDetail.companyName}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 ">
                                    <p className="mb-0">First Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{UserDetail.firstName}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 ">
                                    <p className="mb-0">Last Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{UserDetail.lastName}</p>
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
                                    <p className="mb-0">Role</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{UserDetail.role}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 ">
                                    <p className="mb-0">Reffer</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{UserDetail.reefers}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 ">
                                    <p className="mb-0">Dry Van</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{UserDetail.dryVans}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3 ">
                                    <p className="mb-0">Power Unit</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{UserDetail.powerUnit}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* ------------------User Detail Table End---------------------- */}

            <div className="flex justify-center gap-3">

                <Tooltip hasArrow label="Edit" bg="gray.300" color="black">
                    <button
                        onClick={(firstName, email, password, noteId) =>
                            editForm(UserDetail.companyName, UserDetail.firstName, UserDetail.lastName, UserDetail.email, UserDetail.role, UserDetail.reefers, UserDetail.dryVans, UserDetail.powerUnit, UserDetail._id)
                        }
                        style={{ backgroundColor: "rgb(14, 140, 179)", padding: "4px 12px", color: "#fff", fontSize: "18px" }}
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
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

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content w-full">
                        <div className="modal-header w-full">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Update Form
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body w-full">
                            <div className="w-full m-auto  p-4 text-white rounded-lg">
                                <div>
                                    <label className="text-black">Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        id="company_name"
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                        className="w-full p-2 text-slate-500 border border-gray-900 mb-4"
                                    />
                                </div>
                                <div>
                                    <label className="text-black">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        id="first_name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full p-2 text-slate-500 border border-gray-900 mb-4"
                                    />
                                </div>
                                <div>
                                    <label className="text-black">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        id="last_name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full p-2 text-slate-500 border border-gray-900 mb-4"
                                    />
                                </div>
                                <div>
                                    <label className="text-black">Email</label>
                                    <input
                                        type="text"
                                        placeholder="Content"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full p-2 text-slate-500 border border-gray-900 mb-4"
                                    />
                                </div>
                                <div>
                                    <label className="text-black">Role</label>
                                    <input
                                        type="text"
                                        placeholder="Content"
                                        id="role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="w-full p-2 text-slate-500 border border-gray-900 mb-4"
                                    />
                                </div>
                                <div>
                                    <label className="text-black">Reffers</label>
                                    <input
                                        type="text"
                                        placeholder="Content"
                                        id="reffers"
                                        value={reefers}
                                        onChange={(e) => setReefers(e.target.value)}
                                        className="w-full p-2 text-slate-500 border border-gray-900 mb-4"
                                    />
                                </div>
                                <div>
                                    <label className="text-black">Dry Vans</label>
                                    <input
                                        type="text"
                                        placeholder="Content"
                                        id="dry_vans"
                                        value={dryVans}
                                        onChange={(e) => setDryVans(e.target.value)}
                                        className="w-full p-2 text-slate-500 border border-gray-900 mb-4"
                                    />
                                </div>
                                <div>
                                    <label className="text-black">Power Unit</label>
                                    <input
                                        type="text"
                                        placeholder="Content"
                                        id="power_unit"
                                        value={powerUnit}
                                        onChange={(e) => setPowerUnit(e.target.value)}
                                        className="w-full p-2 text-slate-500 border border-gray-900 mb-4"
                                    />
                                </div>
                                <div className="flex gap-3 ">
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                        onClick={() => updateNote(noteId)}
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----------------update form end---------------- */}
        </>
    );
};

export default UserProfile;

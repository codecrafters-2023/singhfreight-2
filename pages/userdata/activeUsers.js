import React from "react";
import clientPromise from "../../lib/mongo";
// import DashboardLayout from "../loads/layout";
import Link from "next/link";

const ActiveUsers = ({ users }) => {

    return (
        <>
                <div className="w-full px-3">
                    {
                        users.map((user) => {
                            return (
                                <>
                                    <div className=" mt-5  ">
                                        <div className="col-lg-8 col-md-10 md:mx-8 ">
                                            <div className=" mb-4">
                                                <div className="card-body "></div>
                                                <div className="row">
                                                    <div className="col-sm-6 ">
                                                        <p className="mb-0">First Name:</p>
                                                    </div>
                                                    <div className="col-sm-5">
                                                        <p className="text-muted mb-0">{user.name}</p>
                                                    </div>
                                                    <div className="col-sm-5 ">
                                                        <p className="mb-0">Email:</p>
                                                    </div>
                                                    <div className="col-sm-7">
                                                        <p className="text-muted mb-0">{user.email}</p>
                                                    </div>
                                                    <Link href={`${user._id}`} style={{ backgroundColor: "rgb(14, 140, 179)", padding: "4px 12px", color: "#fff", fontSize: "18px", display: "flex", justifyContent: "center", margin: "3px 0" }} >View Profile</Link>
                                                </div>
                                                {/* <hr /> */}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
        </>
    )
}

export default ActiveUsers


export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("alldata");

        const users = await db
            .collection("clients")
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
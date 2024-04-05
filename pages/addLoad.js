import React, { useState } from 'react';

const AddClient = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [companyName, setCompanyName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("api/addclient", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, mobileNo, companyName
                })
            })

            if (res.ok) {
                setName("");
                setEmail("");
                setCompanyName("");
                setMobileNo("");

                alert("Successfully added");
                // router.push("/login")
            } else {
                console.log("Clients failed to be added");
            }

        } catch (error) {
            console.log(error.message);
        }

        console.log(name, email, mobileNo, companyName);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <form onSubmit={handleSubmit}>
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
                        <button className="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900" id="submit-button" type="submit">Submit</button>
                    </div>

                </div>
            </form>


        </div>
    )
}

export default AddClient

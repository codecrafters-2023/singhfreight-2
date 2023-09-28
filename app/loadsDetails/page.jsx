import React from 'react'

const getLoads = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/alldata`, {
            cache: 'no-cache'
        });

        if (!res.ok) {
            throw new Error("Failed to load")
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

const Detailpage = async () => {

    const { loads } = await getLoads()

    console.log("loads" + loads);
    return (
        <div>Detailpage</div>
    )
}

export default Detailpage
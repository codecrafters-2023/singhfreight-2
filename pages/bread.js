import React, { useEffect } from 'react'

const Bread = () => {

    return (
        <div className='flex justify-center items-center min-h-screen flex-col'>
            <div>
                <label>Search</label>
                <input type='text' className='border border-slate-800' />
            </div>
            <button className='btn btn-primary mt-3'>Search</button>
        
        <div className='mt-5'>
            <p>City:<span></span></p>
            <p>State:<span></span></p>
            <p>Zip Code:<span></span></p>
            <p>Country:<span></span></p>
        </div>
        
        </div>


    )
}

export default Bread
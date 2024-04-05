import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
  return (
   <>
   <h1>Why Us</h1>
    <div className='flex justify-center h-screen items-center'>
        <Image alt='' src={'/work_in_progress.png'} height={400} width={400} />
    </div>
   </>
  )
}

export default WhyUs
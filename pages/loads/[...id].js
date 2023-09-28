import React from 'react'

const DetailPage = () => {

    return (
        <div>DetailPage</div>
    )
}

export default DetailPage;

export async function getServerSideProps({ params: {id} }) {

    // const res = await getData(`Notes/${id}`)
    console.log(id);

    return {
        props: {

        }
    }
}
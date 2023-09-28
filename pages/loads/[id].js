// pages/products/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import style from '../../styles/LoadDetailPage.module.css'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import Link from 'next/link';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loadDetail, setLoadDetail] = useState(null);


  useEffect(() => {
    if (id) {
      // Fetch loadDetail data from the API
      fetch(`/api/loads/${id}`)
        .then((response) => response.json())
        .then((data) => setLoadDetail(data))
        .catch((error) => console.error('Error fetching loadDetail:', error));
    }
  }, [id]);

  // if (!loadDetail) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <div  style={{ backgroundColor: "rgb(241 245 249)"}}>
        <div className='m-4 py-3'>
          <Link href={'/loads/allloads'} className='text-xl hover:underline hover:text-slate-500'>GET BACK TO LOADS</Link>
        </div>
        <div className='min-h-screen flex justify-center items-center' style={{marginTop:"-150px"}}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 45%", width: "80%" }}>

            {/* ---------------Google Map Start--------------- */}

            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13026993.027933573!2d-106.2559713014177!3d37.14275395502446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1695936019318!5m2!1sen!2sin" style={{ width: "100%", height: "100%", border: "0" }} allowFullScreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* ---------------Google Map End--------------- */}

            {/* ---------------Details Area Start--------------- */}

            <div className='bg-white'>
              <div>
                {/* ---------------Reff No--------------- */}
                <h1 className='text-xl m-3 underline'>Reff.No: {loadDetail?.reffNo}</h1>
              </div>

              <div className='flex justify-between px-5 items-center my-12 '>
                <div className='flex flex-col'>
                  <b className='flex justify-end text-2xl'>{loadDetail?.PcityName}</b>
                  <span className='text-lgm font-medium flex justify-end'>{loadDetail?.Pdate}</span>
                  <span>{loadDetail?.PTimeOne}-{loadDetail?.PTimeTwo}</span>
                </div>
                {/* <span className='text-5xl w-full bg-slate-400'><TbTruckDelivery /></span> */}
                <span className={style.truck_div}><TbTruckDelivery className={style.truck} /></span>
                <div className='flex flex-col'>
                  <b className='flex justify-end text-2xl'>{loadDetail?.DcityName}</b>
                  <span className='text-lgm font-medium flex justify-end'>{loadDetail?.Ddate}</span>
                  <span> {loadDetail?.DTimeOne}-{loadDetail?.DTimeTwo} </span>
                </div>
              </div>

              <hr className='w-11/12 m-auto mt-3' />

              <div className='mx-5 my-4'>
                <div>
                  <span className='text-5xl font-bold text-cyan-600 '>${loadDetail?.price}</span>
                </div>

                <TableContainer style={{ width: "60%" }}>
                  <Table>
                    <Tbody>
                      <Tr>
                        <Td>Weight</Td>
                        <Td><b>{loadDetail?.weight}</b></Td>
                      </Tr>
                      <Tr>
                        <Td>Miles</Td>
                        <Td><b>{loadDetail?.distance}</b></Td>
                      </Tr>
                      <Tr>
                        <Td>Equipment</Td>
                        <Td><b>{loadDetail?.equipment}</b></Td>
                      </Tr>
                      <Tr>
                        <Td>Commodity</Td>
                        <Td>{loadDetail?.commodity}</Td>
                      </Tr>
                      <Tr>
                        <Td>Load Details</Td>
                        <Td ><b>{loadDetail?.loadInfo}</b></Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </div>
            </div>

            {/* ---------------Details Area End--------------- */}

          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
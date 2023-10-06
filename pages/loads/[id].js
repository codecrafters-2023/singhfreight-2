import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import style from '../../styles/LoadDetailPage.module.css'
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import Link from 'next/link';
import Loader from '../loader'
import { useSession } from 'next-auth/react';
import Home from '../loads/allloads'

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loadDetail, setLoadDetail] = useState(null);

  const { data: session } = useSession();

  useEffect(() => {
    if (id) {
      // Fetch loadDetail data from the API
      fetch(`/api/loads/${id}`)
        .then((response) => response.json())
        .then((data) => setLoadDetail(data))
        .catch((error) => console.error('Error fetching loadDetail:', error));
    }
  }, [id]);

  if (!loadDetail) {
    return <Loader />
  }

  return (
    <>
      <div style={{ backgroundColor: "rgb(241 245 249)" }}>
        <div className='m-4 py-3'>
          {/* <Link href= {''} className='text-xl hover:underline hover:text-slate-500'>GET BACK TO LOADS</Link> */}
        </div>
        <div className='min-h-screen flex justify-center items-center '>
          <div className={style.load_info_outer_div} >

            {/* ---------------Google Map Start--------------- */}

            <div className={style.map_div}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13026993.027933573!2d-106.2559713014177!3d37.14275395502446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1695936019318!5m2!1sen!2sin" style={{ width: "100%", height: "100%", border: "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* ---------------Google Map End--------------- */}

            {/* ---------------Details Area Start--------------- */}

            <div className={style.load_info_div}>
              <div>
                {/* ---------------Reff No--------------- */}
                <h1 className='text-xl font-light m-3 underline'>Reff.No: {loadDetail?.reffNo}</h1>
              </div>

              <div className='flex justify-between px-3 items-center my-12'>
                <div className='flex flex-col'>
                  <b className='flex font-normal justify-end text-2xl'>{loadDetail?.PcityName},{loadDetail?.PState}</b>
                  <span className='text-sm font-medium flex justify-end gap-1'><b>Date: </b> {loadDetail?.Pdate}</span>
                  <span className='flex text-sm justify-end gap-1'><b>Time:</b>{loadDetail?.PTimeOne}-{loadDetail?.PTimeTwo}</span>
                </div>
                {/* <span className='text-5xl w-full bg-slate-400'><TbTruckDelivery /></span> */}
                <span className={style.truck_div}><TbTruckDelivery className={style.truck} /></span>
                <div className='flex flex-col w-52'>
                  <b className='flex justify-end font-normal text-2xl'>{loadDetail?.DcityName},{loadDetail?.DState}</b>
                  <span className='text-sm font-medium flex justify-end gap-1'><b>Date:</b>{loadDetail?.Ddate}</span>
                  <span className='flex text-sm justify-end gap-1'> <b>Time:</b>{loadDetail?.DTimeOne}-{loadDetail?.DTimeTwo} </span>
                </div>
              </div>

              <hr className='w-11/12 m-auto mt-3' />

              <div className='mx-5 my-4'>
                <div>
                  <span className='text-5xl font-bold text-cyan-600 '>${loadDetail?.price}</span>
                </div>

                <TableContainer style={{ width: "70%" }}>
                  <Table>
                    <Tbody>
                      <Tr>
                        <Td>Weight</Td>
                        <Td><span>{loadDetail?.weight}</span></Td>
                      </Tr>
                      <Tr>
                        <Td>Miles</Td>
                        <Td><span>{loadDetail?.distance}</span></Td>
                      </Tr>
                      <Tr>
                        <Td>Equipment</Td>
                        <Td><span>{loadDetail?.equipment}</span></Td>
                      </Tr>
                      <Tr>
                        <Td>Commodity</Td>
                        <Td><span>{loadDetail?.commodity}</span></Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                <div style={{ display: "grid", gridTemplateColumns: "100px 1fr" }} className='mx-4 my-4'>
                  <span>Load Details</span>
                  <span className='text-justify ml-10'>{loadDetail?.loadInfo} </span>
                </div>
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

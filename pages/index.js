import style from '../styles/Home.module.css'
import Link from 'next/link';
import { FaTruckMoving } from 'react-icons/fa';
import { FiBookOpen } from 'react-icons/fi';
import { FaShip } from 'react-icons/fa';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <section className={style.section}>
                <div className={style.videoContainer}>
                    <video autoPlay loop muted className={style.video}>
                        <source src='/videos/video.mp4' type="video/mp4" />
                    </video>
                    <div className={style.overlay}>
                        <div className={style.company_name}>
                            <h1>WELCOME <br /> <span>SINGH FREIGHT INC</span></h1>
                            <div className={style.button_div}>

                                <Link href={'/signin'} ><button className={style.button}>
                                    <span className={style.button_lg}>
                                        <span className={style.button_sl}></span>
                                        <span className={style.button_text}>SIGN IN</span>
                                    </span>
                                </button>
                                </Link>

                                <Link href={'/checkMcNumber'} ><button className={style.button}>
                                    <span className={style.button_lg}>
                                        <span className={style.button_sl}></span>
                                        <span className={style.button_text}>CREATE ACCOUNT</span>
                                    </span>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='mb-12'>
                <div className='container mt-10'>
                    <div>
                        <h1 className={style.services_heading}>Our Services</h1>
                        <p className={style.services_description}>If you’re looking for a Trustworthy & Fastest Trucking Services Provider all over the 48 State, Then, We are here!!</p>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-12">
                        <div className="flex justify-center items-center">
                            <div className="card h-100  text-center  border-orange-500">
                                <span className={style.services_card_icon}><FaTruckMoving /></span>
                                    <div className="card-body">
                                        <h5 className={style.services_card_title}>Freight Brokerage</h5>
                                        <p className={style.services_card_text}>Singh Freight Inc. offers modern freight brokerage solutions that are adapted to seasonal demands, capacity surges, and the industry &#10076;s ever-changing needs. Our team assists in the execution of hundreds of daily loads and provides shippers with dependable transportation choices. Freight brokers can assist businesses in ensuring seamless freight movement and on-time deliveries. Our freight brokerage solutions can handle complex channels and can meet your company &#10076;s shipping demands even during difficult times.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col flex justify-center items-center">
                            <div className="card h-100  text-center  border-orange-500">
                                <span className={style.services_card_icon}><FiBookOpen /></span>
                                    <div className="card-body">
                                        <h5 className={style.services_card_title}>Dispatching</h5>
                                        <p className={style.services_card_text}>We offer customized truck dispatch services that save you money and time while increasing the productivity and efficiency of your trucking operation. Our comprehensive services include great 24x7 back end assistance, professional dispatchers, and lanes for constant revenue and driver satisfaction.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col flex justify-center items-center">
                            <div className="card h-100 text-center  border-orange-500">
                                <span className={style.services_card_icon}><FaShip /></span>
                                    <div className="card-body">
                                        <h5 className={style.services_card_title}>Accounting</h5>
                                        <p className={style.services_card_text}>We are specialists in accounting solutions, with a particular emphasis on cash flow management. We provide your company with the most robust, thorough, resourceful, and economical accounting solution possible while ensuring a consistent, dependable cash flow. Our service portfolio includes financial analysis and reporting to assist you in assessing your business performance, which enhances your capacity for profitable decision-making.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <Footer />
            </section>
        </>
    );
}

import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import style from "../../styles/LoadDetailPage.module.css";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import Loader from "../loader";
import { useSession } from "next-auth/react";
import {
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const center = { lat: 48.8584, lng: 2.2945 };

function ProductDetail() {

  const toast = useToast();

  const [direction, setDirection] = useState(null);
  const [distanceReff, setDistanceReff] = useState("");

  const [companyName, setCompanyName] = useState('')
  const [bid, setBid] = useState('')


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
        .catch((error) => console.error("Error fetching loadDetail:", error));
    }
  }, [id]);

  if (!loadDetail) {
    return <Loader />;
  }

  async function calculateRoute() {
    if (loadDetail.PcityName === "" || loadDetail.DcityName === "") {
      return;
    }

    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const result = await directionService.route({
      origin: loadDetail.PcityName,
      destination: loadDetail.DcityName,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirection(result);
    setDistanceReff(result.routes[0].legs[0].distance.text);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          companyName,
          bid
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (res) {
        toast({
          title: "Successfully Sent",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });

        setCompanyName('')
        setBid('')
      }
      return res.json();

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          libraries={["places"]}
        >
          <div className={style.back_btn}>
            {session?.user.role === "admin" ? (
              <Link
                href={"/loads/allloads"}
                className="text-xl hover:underline hover:text-slate-500"
              >
                GET BACK LOADS
              </Link>
            ) : (
              <Link
                href={"/user"}
                className="text-xl hover:underline hover:text-slate-500"
              >
                GET BACK TO LOADS
              </Link>
            )}
          </div>

          <div className={style.main_div}>
            <div className={style.map_div}>
              <GoogleMap
                center={{ lat: 0, lng: 0 }}
                zoom={5}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                options={{
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                }}
                onLoad={calculateRoute}
              >
                {/* <Marker position={center} /> */}
                {direction && <DirectionsRenderer directions={direction} />}
              </GoogleMap>
            </div>

            <div className={style.loadsDetail_div}>
              <div className={style.reff_btn_div}>
                <div>
                  <h1 className="text-xl font-light  underline">
                    Ref: {loadDetail?.reffNo}
                  </h1>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  {loadDetail.show ? (
                    <Tooltip
                      hasArrow
                      label="Booked"
                      bg="gray.300"
                      color="black"
                    >
                      <div className="bg-cyan-600 px-3 py-1 text-white text-lg">
                        Booked
                      </div>
                    </Tooltip>
                  ) : (
                    <Tooltip
                      hasArrow
                      label="Book load"
                      bg="gray.300"
                      color="black"
                    >
                      <button className="bg-cyan-600 px-3 py-1 text-white text-lg">
                        Book load
                      </button>
                    </Tooltip>
                  )}

                  <Tooltip
                    hasArrow
                    label="Book load"
                    bg="gray.300"
                    color="black"
                  >
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="bg-cyan-600 px-3 py-1 text-white text-lg"
                    >
                      Bid
                    </button>
                  </Tooltip>

                  {/* ----------------model box start----------------- */}

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Send Bid
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form onSubmit={handleSubmit}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <label className="text-lg text-slate-600 mb-2">
                                Company Name
                              </label>
                              <input
                                type="text"
                                className={style.form_input}
                                placeholder="Enter Company Name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                              />
                            </div>

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <label className="text-lg text-slate-600 mb-2">
                                Bid
                              </label>
                              <input
                                type="number"
                                className={style.form_input}
                                placeholder="Enter Price"
                                value={bid}
                                onChange={(e) => setBid(e.target.value)}
                              />
                            </div>

                            <button
                              type="submit"
                              className="btn btn-primary mt-3"
                            >
                              Send
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ----------------model box end----------------- */}
              </div>


              <div className={style.city_info_div} >
                <div className={style.Pcityname_div}>
                  <b
                    className={style.Pcityname}
                  >
                    {loadDetail?.PcityName}
                  </b>

                  <span className={style.Pdate_Ptime}>
                    <b>Date: </b> {loadDetail?.Pdate}
                  </span>
                  <span className={style.Pdate_Ptime}>
                    <b>Time:</b>
                    {loadDetail?.PTimeOne}-{loadDetail?.PTimeTwo}
                  </span>
                </div>

                <span className={style.truck_div}>
                  <TbTruckDelivery className={style.truck} />
                </span>

                <div className={style.Dcityname_div}>
                  <b
                    className={style.Dcityname}
                  >
                    {loadDetail?.DcityName}
                  </b>

                  <span className={style.Ddate_Dtime} >
                    <b>Date:</b>
                    {loadDetail?.Ddate}
                  </span>

                  <span className={style.Ddate_Dtime} >
                    <b>Time:</b>
                    {loadDetail?.DTimeOne}-{loadDetail?.DTimeTwo}{" "}
                  </span>
                </div>
              </div>

              <hr className="w-11/12 m-auto mt-3" />

              <div className={style.price_table_loadinfo_div}>
                <div>
                  <span className="text-5xl font-bold text-cyan-600 ">
                    ${loadDetail?.price}
                  </span>
                </div>

                <TableContainer className={style.table_container}>
                  <Table>
                    <Tbody>
                      <Tr>
                        <Td>Weight</Td>
                        <Td>
                          <span>{loadDetail?.weight}</span>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Miles</Td>
                        <Td>
                          <span>{distanceReff}</span>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Equipment</Td>
                        <Td>
                          <span>{loadDetail?.equipment}</span>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Commodity</Td>
                        <Td>
                          <span>{loadDetail?.commodity}</span>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>

                <div
                  style={{ display: "grid", gridTemplateColumns: "100px 1fr" }}
                  className={style.loadDetail_div}
                >
                  <span>Load Details</span>
                  <span className="text-justify ml-10">
                    {loadDetail?.loadInfo}{" "}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </LoadScript>
      </div>
    </>
  );
}

export default ProductDetail;

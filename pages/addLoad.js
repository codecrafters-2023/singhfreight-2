import React, { useRef, useState } from "react";
import {
    LoadScript,
    Autocomplete,
} from "@react-google-maps/api";
import DashboardLayout from "./loads/layout";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import style from "../styles/AddLoad.module.css";

const center = { lat: 48.8584, lng: 2.2945 };

function Postload() {
    const toast = useToast();

    // /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef();

    // /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef();

    const [map, setMap] = useState(null);
    const [direction, setDirection] = useState(null);

    const [reffNo, setReffNo] = useState("");
    const [PcityName, setPCityName] = useState("");
    const [PState, setPState] = useState("");
    const [PZipCode, setPZipCode] = useState("");
    const [Pdate, setPDate] = useState("");
    const [PTimeOne, setPTimeOne] = useState("");
    const [PTimeTwo, setPTimeTwo] = useState("");
    const [DcityName, setDCityName] = useState("");
    const [DState, setDState] = useState("");
    const [DZipCode, setDZipCode] = useState("");
    const [Ddate, setDDate] = useState("");
    const [DTimeOne, setDTimeOne] = useState("");
    const [DTimeTwo, setDTimeTwo] = useState("");
    const [price, setPrice] = useState("");
    const [equipment, setEquipment] = useState("");
    const [weight, setWeight] = useState("");
    const [distance, setDistance] = useState("");
    const [commodity, setCommodity] = useState("");
    const [loadInfo, setLoadInfo] = useState("");
    const [error, setError] = useState("");

    const [checkedvalues, setValue] = useState([]);

    // async function calculateRoute() {
    //     if (originRef.current.value === "" || destinationRef.current.value === "") {
    //         return;
    //     }

    //     // eslint-disable-next-line no-undef
    //     const directionService = new google.maps.DirectionsService();
    //     const result = await directionService.route({
    //         origin: originRef.current.value,
    //         destination: destinationRef.current.value,
    //         // eslint-disable-next-line no-undef
    //         travelMode: google.maps.TravelMode.DRIVING,
    //     });

    //     setDirection(result);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        setPCityName(originRef.current.value)
        setDCityName(destinationRef.current.value)

        console.log(PcityName);
        console.log(DcityName);

        // -----------validation start-------------

        // if (
        //     !PState ||
        //     !PZipCode ||
        //     !Pdate ||
        //     !PTimeOne ||
        //     !DState ||
        //     !DZipCode ||
        //     !Ddate ||
        //     !DTimeOne ||
        //     !price ||
        //     !equipment ||
        //     !weight ||
        //     !distance ||
        //     !commodity
        // ) {
        //     {
        //         `${setError(
        //             <div style={{ color: "red" }}>All Fields are required</div>
        //         )}`;
        //     }
        //     return;
        // }

        // -----------validation end-------------

        const newObj = {
            reffNo,
            PcityName,
            PState,
            PZipCode,
            Pdate,
            PTimeOne,
            PTimeTwo,
            DcityName,
            DState,
            DZipCode,
            Ddate,
            DTimeOne,
            DTimeTwo,
            price,
            equipment,
            weight,
            distance,
            commodity,
            loadInfo,
            checkedvalues,
        };

        const res = axios.post("/api/newNote", newObj).then(() => {
            alert("New Note");
        });

        toast({
            title: "Added Successfully",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top",
        });

        setReffNo(""),
            setPCityName(""),
            setPState(""),
            setPZipCode(""),
            setPDate(""),
            setPTimeOne(""),
            setPTimeTwo(""),
            setDCityName(""),
            setDState(""),
            setDZipCode(""),
            setDDate(""),
            setDTimeOne(""),
            setDTimeTwo(""),
            setPrice(""),
            setEquipment(""),
            setWeight(""),
            setDistance(""),
            setCommodity(""),
            setLoadInfo("");
    };

    const handleChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setValue((pre) => [...pre, value]);
        } else {
            setValue((pre) => {
                return [...pre.filter((skill) => skill !== value)];
            });
        }
    };

    return (
        <>
            <DashboardLayout>
                <LoadScript
                    googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                    libraries={["places"]}
                >
                    <h1>ADD LOAD</h1>
                    <div className={style.main_div}>
                        <div className="w-full">
                            <form onSubmit={handleSubmit}>
                                {/* --------------Pickup Area Start--------------- */}

                                <div>
                                    <div className="flex flex-col">
                                        <label
                                            className="text-lg text-slate-600 mb-2"
                                            htmlFor="reffNo"
                                        >
                                            Reff No
                                        </label>
                                        <input
                                            autoComplete="off"
                                            type="number"
                                            className={style.form_input}
                                            id="reffNo"
                                            name="reffNo"
                                            placeholder="Reff no"
                                            value={reffNo}
                                            onChange={(e) => setReffNo(e.target.value)}
                                        />
                                    </div>

                                    <h4 className="mt-3">Pick Up Address</h4>

                                    <div className={style.pickup_div}>
                                        <div className={style.cityname_zipcode_div}>
                                            <div className="flex flex-col">
                                                <label className="text-lg text-slate-600 mb-2">
                                                    City
                                                </label>
                                                <Autocomplete>
                                                    <input
                                                        type="text"
                                                        placeholder="Search for a place"
                                                        ref={originRef}
                                                        className={style.form_input}
                                                    />
                                                </Autocomplete>
                                            </div>

                                            <div className="flex flex-col">
                                                <label
                                                    className="text-lg text-slate-600 mb-2"
                                                    htmlFor="zip_code"
                                                >
                                                    Zip Code
                                                </label>
                                                <input
                                                    autoComplete="off"
                                                    type="text"
                                                    className={style.form_input}
                                                    id="zip_code"
                                                    name="zip_code"
                                                    placeholder="Zip Code"
                                                    value={PZipCode}
                                                    onChange={(e) => setPZipCode(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className={style.date_time_div}>
                                            <div className="flex flex-col">
                                                <label
                                                    className="text-lg text-slate-600 mb-2"
                                                    htmlFor="Pdate"
                                                >
                                                    Date
                                                </label>
                                                <input
                                                    size="md"
                                                    type="date"
                                                    className={style.form_input}
                                                    id="Pdate"
                                                    name="Pdate"
                                                    value={Pdate}
                                                    onChange={(e) => setPDate(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label
                                                    className="text-lg text-slate-600 mb-2"
                                                    htmlFor="timeOne"
                                                >
                                                    Time Range
                                                </label>
                                                <input
                                                    size="md"
                                                    type="time"
                                                    className={style.form_input}
                                                    id="timeOne"
                                                    name="timeOne"
                                                    value={PTimeOne}
                                                    onChange={(e) => setPTimeOne(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label
                                                    className="text-lg text-slate-600 mb-2"
                                                    htmlFor="timeTwo"
                                                >
                                                    Time Range
                                                </label>
                                                <input
                                                    size="md"
                                                    type="time"
                                                    className={style.form_input}
                                                    id="timeTwo"
                                                    name="timeTwo"
                                                    value={PTimeTwo}
                                                    onChange={(e) => setPTimeTwo(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* --------------Pickup Area End--------------- */}

                                {/* --------------Delivery Area Start--------------- */}

                                <div className="w-full ">
                                    <h4 className="mt-3">Delivery Address</h4>

                                    <div className={style.cityname_zipcode_div}>
                                        <div className="flex flex-col">
                                            <label
                                                className="text-lg text-slate-600 mb-2"
                                                htmlFor="DcityName"
                                            >
                                                City
                                            </label>
                                            <Autocomplete>
                                                <input
                                                    type="text"
                                                    placeholder="Search for a place"
                                                    ref={destinationRef}
                                                    // value={PcityName}
                                                    // onChange={(e) => setPCityName(e.target.value)}
                                                    className={style.form_input}
                                                />
                                            </Autocomplete>
                                        </div>

                                        <div className="flex flex-col">
                                            <label
                                                className="text-lg text-slate-600 mb-2"
                                                htmlFor="zip_codeTwo"
                                            >
                                                Zip Code
                                            </label>
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                className={style.form_input}
                                                id="zip_codeTwo"
                                                name="zip_codeTwo"
                                                placeholder="Zip Code"
                                                value={DZipCode}
                                                onChange={(e) => setDZipCode(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="py-3">
                                        <div className={style.date_time_div}>
                                            <div className="flex flex-col ">
                                                <label
                                                    className="text-lg text-slate-600 mb-2"
                                                    htmlFor="date"
                                                >
                                                    Date
                                                </label>
                                                <input
                                                    size="md"
                                                    type="date"
                                                    className={style.form_input}
                                                    id="date"
                                                    name="date"
                                                    value={Ddate}
                                                    onChange={(e) => setDDate(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label
                                                    className="text-lg text-slate-600 mb-2"
                                                    htmlFor="time"
                                                >
                                                    Time Range
                                                </label>
                                                <input
                                                    size="md"
                                                    type="time"
                                                    className={style.form_input}
                                                    id="time"
                                                    name="time"
                                                    value={DTimeOne}
                                                    onChange={(e) => setDTimeOne(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label
                                                    className="text-lg text-slate-600 mb-2"
                                                    htmlFor="DtimeTwo"
                                                >
                                                    Time Range
                                                </label>
                                                <input
                                                    size="md"
                                                    type="time"
                                                    className={style.form_input}
                                                    id="DtimeTwo"
                                                    name="DtimeTwo"
                                                    value={DTimeTwo}
                                                    onChange={(e) => setDTimeTwo(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* --------------Delivery Area End--------------- */}

                                {/* --------------Price, Equipment, Weight Start--------------- */}

                                <div className="w-full ">
                                    <div className="py-3">
                                        <div className={style.price_weight_div}>
                                            <div className="flex flex-col">
                                                <label
                                                    className="text-lg text-slate-600 mb-2"
                                                    htmlFor="price"
                                                >
                                                    Offer Price
                                                </label>
                                                <input
                                                    size="md"
                                                    type="text"
                                                    className={style.form_input}
                                                    id="price"
                                                    name="price"
                                                    placeholder="Enter your Price"
                                                    autoComplete="off"
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label
                                                    className="text-lg text-slate-600 mb-2"
                                                    htmlFor="equipment"
                                                >
                                                    Equ. Type
                                                </label>
                                                <select
                                                    variant="flushed"
                                                    placeholder="select"
                                                    value={equipment}
                                                    onChange={(e) => setEquipment(e.target.value)}
                                                    className={style.form_input}
                                                >
                                                    <option value="">Select</option>
                                                    <option value="Reefer">Reefer</option>
                                                    <option value="Power only">Power Only</option>
                                                    <option value="Intermodal">Intermodal</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <label
                                                    className="text-lg text-slate-600 mb-2"
                                                    htmlFor="weight"
                                                >
                                                    Weight
                                                </label>
                                                <input
                                                    size="md"
                                                    type="text"
                                                    className={style.form_input}
                                                    id="weight"
                                                    name="weight"
                                                    placeholder="Weight"
                                                    autoComplete="off"
                                                    value={weight}
                                                    onChange={(e) => setWeight(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* --------------Price, Equipment, Weight End--------------- */}

                                {/* --------------miles, Commodity Start--------------- */}

                                <div className="w-full">
                                    <div className="py-3">
                                        <div className={style.commodity_div}>
                                            <div className="flex flex-col">
                                                <label
                                                    className="text-lg text-slate-600 mb-2"
                                                    htmlFor="commodity"
                                                >
                                                    Commodity
                                                </label>
                                                <input
                                                    size="md"
                                                    type="text"
                                                    className={style.form_input}
                                                    id="commodity"
                                                    name="commodity"
                                                    placeholder="Enter Commodity"
                                                    autoComplete="off"
                                                    value={commodity}
                                                    onChange={(e) => setCommodity(e.target.value)}
                                                />
                                            </div>
                                            <div
                                                className="flex mb-2 gap-5"
                                                style={{ marginTop: "40px" }}
                                            >
                                                <div className="mb-2">
                                                    <input
                                                        type="checkbox"
                                                        value="multiple"
                                                        onChange={handleChange}
                                                    />
                                                    <span className="ml-2 ">Multiple Rounds</span>
                                                </div>
                                                <div className="mb-2 ">
                                                    <input
                                                        type="checkbox"
                                                        value="round"
                                                        onChange={handleChange}
                                                    />
                                                    <span className="ml-2">Round Trip</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* --------------Price, Equipment, Weight End--------------- */}

                                {/* --------------Load Details Start--------------- */}

                                <div className="flex flex-col">
                                    <label
                                        htmlFor="content"
                                        className="text-lg text-slate-600 mb-2"
                                    >
                                        Load Details
                                    </label>
                                    <textarea
                                        style={{
                                            width: "100%",
                                            marginBottom: "20px",
                                            borderRadius: "3px",
                                            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                                            padding: "0 12px",
                                            outline: "none",
                                        }}
                                        id="content"
                                        name="content"
                                        rows="5"
                                        placeholder="About Load..."
                                        autoComplete="off"
                                        value={loadInfo}
                                        onChange={(e) => setLoadInfo(e.target.value)}
                                    />
                                </div>

                                {/* --------------Load Details End--------------- */}

                                {/* --------------Error Handling Start--------------- */}

                                {error && <div style={{ marginBottom: "10px" }}>{error}</div>}

                                {/* --------------Error Handling End--------------- */}

                                {/* --------------Submit Button Start--------------- */}

                                <div className="d-grid gap-2">
                                    <button className="btn btn-success" type="submit">
                                        SUBMIT
                                    </button>
                                </div>

                                {/* --------------Submit Button End--------------- */}
                            </form>
                        </div>
                    </div>
                    {/* --------------Form End--------------- */}
                </LoadScript>
            </DashboardLayout>
        </>
    );
}

export default Postload;

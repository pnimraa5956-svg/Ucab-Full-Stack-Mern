import { useEffect, useState } from "react";
import axios from "axios";
import Anav from "./Anav";

function Bookings() {

    const [bookings, setBookings] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        const fetchBookings = async () => {

            try {

                const res = await axios.get(
                    "http://localhost:5000/api/bookings"
                );
                console.log(res.data.bookings);
                setBookings(res.data.bookings);

            } catch (error) {

                console.log(error);

            }

        };

        fetchBookings();

    }, []);

    const filteredBookings = bookings.filter((booking) =>

        booking.userId?.name?.toLowerCase().includes(search.toLowerCase()) ||

        booking.carname?.toLowerCase().includes(search.toLowerCase()) ||

        booking.drivername?.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <>
            <Anav />

            <div className="container py-5">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2 className="fw-bold " style={{ color: "#0f172a" }}>
                        Booking Management
                    </h2>

                    <input
                        className="form-control"
                        style={{ width: "300px" }}
                        placeholder="Search Booking..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

                <div className="row">

                    {filteredBookings.map((booking) => (

                        <div
                            className="col-lg-6 mb-4"
                            key={booking._id}
                        >

                            <div
                                className="card border-0 shadow-lg"
                                style={{ borderRadius: "20px" }}
                            >

                                <div
                                    className="card-header text-white"
                                    style={{
                                        background:
                                            "linear-gradient(90deg,#0f172a,#2563eb)"
                                    }}
                                >

                                    <h4 className="mb-0">
                                        🚖 {booking.carname}
                                    </h4>

                                </div>

                                <div className="card-body">

                                    <p>
                                        <strong>👤 User :</strong> {booking.userId?.name}
                                    </p>

                                    <p>
                                        <strong>👨‍✈️ Driver :</strong> {booking.drivername}
                                    </p>

                                    <p>
                                        <strong>📍 Pickup :</strong><br />
                                        {booking.selectedPickupCity},{" "}
                                        {booking.selectedPickupState}
                                    </p>

                                    <p>
                                        <strong>📍 Drop :</strong><br />
                                        {booking.selectedDropCity},{" "}
                                        {booking.selectedDropState}
                                    </p>

                                    <div className="row">

                                        <div className="col-6">
                                            <strong>📅 Date</strong>
                                            <br />
                                            {booking.pickupdate}
                                        </div>

                                        <div className="col-6">
                                            <strong>🕒 Time</strong>
                                            <br />
                                            {booking.pickuptime}
                                        </div>

                                    </div>

                                    <hr />

                                    <div className="d-flex justify-content-between align-items-center">

                                        <h4 className="text-success">
                                            ₹ {booking.price}
                                        </h4>

                                        <span className="badge bg-success p-2">
                                            Confirmed
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </>

    );

}

export default Bookings;
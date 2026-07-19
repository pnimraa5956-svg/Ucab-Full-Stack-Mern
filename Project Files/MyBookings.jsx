import { useEffect, useState } from "react";
import axios from "axios";
import Unav from "./Unav";

function MyBookings() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        const fetchBookings = async () => {

            try {

                const res = await axios.get(
                    "http://localhost:5000/api/bookings/my",
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );

                setBookings(res.data.bookings);

            } catch (error) {

                console.log(error);

            }

        };

        fetchBookings();

    }, []);

    return (
        <>
            <Unav />

            <div className="container py-5">

                <h1 className="text-center  fw-bold mb-5" style={{ color: "#0f172a" }}>
                    My Bookings
                </h1>

                <div className="row">

                    {bookings.map((booking) => (

                        <div className="col-lg-6 mb-4" key={booking._id}>

                            <div
                                className="card border-0 shadow-lg"
                                style={{
                                    borderRadius: "20px"
                                }}
                            >

                                <div
                                    className="card-header text-white"
                                    style={{
                                        background:
                                            "linear-gradient(90deg,#0f172a,#2563eb)"
                                    }}
                                >

                                    <h4>
                                        🚖 {booking.carname}
                                    </h4>

                                </div>

                                <div className="card-body">

                                    <h5 className="text-primary">
                                        👨‍✈️ {booking.drivername}
                                    </h5>

                                    <hr />

                                    <p>

                                        <strong>📍 Pickup</strong>

                                        <br />

                                        {booking.selectedPickupCity},

                                        {" "}

                                        {booking.selectedPickupState}

                                    </p>

                                    <p>

                                        <strong>📍 Drop</strong>

                                        <br />

                                        {booking.selectedDropCity},

                                        {" "}

                                        {booking.selectedDropState}

                                    </p>

                                    <p>

                                        📅 {booking.pickupdate}

                                    </p>

                                    <p>

                                        🕒 {booking.pickuptime}

                                    </p>

                                    <h4 className="text-success">

                                        ₹ {booking.price}

                                    </h4>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </>
    );
}

export default MyBookings;
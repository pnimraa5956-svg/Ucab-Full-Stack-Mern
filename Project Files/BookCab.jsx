import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Unav from "./Unav";

function BookCab() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [booking, setBooking] = useState({
        selectedPickupState: "",
        selectedPickupCity: "",
        selectedDropState: "",
        selectedDropCity: "",
        pickupdate: "",
        pickuptime: "",
        dropdate: "",
        droptime: ""
    });

    const handleChange = (e) => {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:5000/api/bookings",
                {
                    carId: id,
                    ...booking
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );

            alert("Ride Booked Successfully");

            navigate("/mybookings");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Booking Failed"
            );

        }

    };

    return (

            <>
        <Unav />

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div
                        className="card shadow-lg border-0"
                        style={{ borderRadius: "20px" }}
                    >

                        <div
                            className="card-header text-white text-center"
                            style={{
                                background:
                                    "linear-gradient(90deg,#0f172a,#2563eb)",
                                borderRadius: "20px 20px 0 0"
                            }}
                        >

                            <h2>🚖 Book Your Ride</h2>

                        </div>

                        <div className="card-body p-4">

                            <form onSubmit={handleSubmit}>

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">
                                            Pickup State
                                        </label>

                                        <input
                                            className="form-control"
                                            name="selectedPickupState"
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">
                                            Pickup City
                                        </label>

                                        <input
                                            className="form-control"
                                            name="selectedPickupCity"
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">
                                            Drop State
                                        </label>

                                        <input
                                            className="form-control"
                                            name="selectedDropState"
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">
                                            Drop City
                                        </label>

                                        <input
                                            className="form-control"
                                            name="selectedDropCity"
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">
                                            Pickup Date
                                        </label>

                                        <input
                                            type="date"
                                            className="form-control"
                                            name="pickupdate"
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">
                                            Pickup Time
                                        </label>

                                        <input
                                            type="time"
                                            className="form-control"
                                            name="pickuptime"
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">
                                            Drop Date
                                        </label>

                                        <input
                                            type="date"
                                            className="form-control"
                                            name="dropdate"
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6 mb-4">

                                        <label className="form-label">
                                            Drop Time
                                        </label>

                                        <input
                                            type="time"
                                            className="form-control"
                                            name="droptime"
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>

                                <button
                                    className="btn btn-primary w-100 py-2"
                                    type="submit"
                                >
                                    Confirm Booking 🚖
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </>
    );

}

export default BookCab;
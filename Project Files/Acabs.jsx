import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Anav from "./Anav";

function Acabs() {

    const [cars, setCars] = useState([]);

    

    async function fetchCars() {
        try {

            const res = await axios.get(
                "http://localhost:5000/api/cars"
            );

            setCars(res.data.cars);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
    const loadCars = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/cars");
            setCars(res.data.cars);
        } catch (err) {
            console.error(err);
        }
    };

    loadCars();
}, []);
    
    const deleteCar = async (id) => {

        if (!window.confirm("Delete this car?")) return;

        try {

            await axios.delete(
                `http://localhost:5000/api/cars/${id}`
            );

            alert("Car Deleted Successfully");

            fetchCars();

        } catch (error) {

            alert(error.response?.data?.message || "Delete Failed");

        }

    };

    return (

        <>
            <Anav />

            <div className="container text-center py-4">

                <h1 className="fw-bold " style={{ color: "#0f172a" }}>
                    Manage Cars
                </h1>

                <p className="text-secondary">
                    Add, edit and manage all available vehicles.
                </p>

                <div className="row g-4 justify-content-center">

                    {cars.map((car) => (

                        <div
                            className="col-lg-4 col-md-6 mb-4"
                            key={car._id}
                        >

                            <div
                                className="card shadow-lg border-0 h-100 mx-auto"
                                style={{
                                    width: "22rem",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                }}
                            >

                                <img
                                    src={`http://localhost:5000${car.carImage}`}
                                    alt={car.carname}
                                    onError={(e) => {
                                        e.target.src =
                                            "https://via.placeholder.com/400x250?text=No+Image";
                                    }}
                                    style={{
                                        height: "180px",
                                        
                                        objectFit: "cover",
                                    }}
                                />

                                <div className="card-body ">

                                    <h3 className="fw-bold text-primary">
                                        {car.carname}
                                    </h3>

                                    <hr />

                                    <p>
                                        👨‍✈️ <strong>Driver:</strong> {car.drivername}
                                    </p>

                                    <p>
                                        🚘 <strong>Type:</strong> {car.cartype}
                                    </p>

                                    <p>
                                        🚗 <strong>Car No:</strong> {car.carno}
                                    </p>

                                    <h4 className="text-success">
                                        ₹ {car.price}
                                    </h4>

                                    <div className="d-grid gap-2 mt-4">

                                        <Link
                                            to={`/admin/editcar/${car._id}`}
                                            className="btn btn-primary"
                                        >
                                            ✏ Edit Car
                                        </Link>

                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={() => deleteCar(car._id)}
                                        >
                                            🗑 Delete Car
                                        </button>

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

export default Acabs;
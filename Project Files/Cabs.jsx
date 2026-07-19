import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Unav from "./Unav";

function Cabs() {

    const [cars, setCars] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        const fetchCars = async () => {

            try {

                const res = await axios.get(
                    "http://localhost:5000/api/cars"
                );

                setCars(res.data.cars);

            } catch (error) {

                console.log(error);

            }

        };

        fetchCars();

    }, []);

    const filteredCars = cars.filter((car) =>

    car.carname.toLowerCase().includes(search.toLowerCase()) ||

    car.drivername.toLowerCase().includes(search.toLowerCase()) ||

    car.cartype.toLowerCase().includes(search.toLowerCase())

);

    return (
        <>
            <Unav />

            <div className="container mt-5">

                <h1 className="fw-bold  align-center mb-4 text-center" style={{ color: "#0f172a" }}>
                    Available Cabs
                </h1>

                <p className="text-secondary align-center mb-4 text-center">
                    Choose your ride and enjoy a comfortable journey.
                </p>

                <div className="row mb-4">

                    <div className="col-md-6 mx-auto">

                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="🔍 Search by Car, Driver or Type..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div>

                </div>

                <div className="row">

                    {filteredCars.length > 0 ? (

                        

                        filteredCars.map((car) => (

                            <div className="col-lg-4 col-md-6 mb-4" key={car._id}>
                                <div
                                    className="card shadow-lg border-0 h-100"
                                    style={{
                                        borderRadius: "20px",
                                        overflow: "hidden"
                                    }}
                                >

                                    <img
                                        src={`http://localhost:5000${car.carImage}`}
                                        alt={car.carname}
                                        style={{
                                            height: "220px",
                                            objectFit: "cover"
                                        }}
                                    />

                                    <div className="card-body">

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
                                            🚗 <strong>Number:</strong> {car.carno}
                                        </p>

                                        <h5 className="text-success">
                                            ₹ {car.price}
                                        </h5>

                                        <Link
                                            to={`/book/${car._id}`}
                                            className="btn btn-primary w-100 mt-3"
                                        >
                                            Book Now
                                        </Link>

                                    </div>

                                </div>
                            </div>

                        ))

                    ) : (

                        <h4 className="text-center">
                            No Cars Available
                        </h4>

                    )}

                </div>

            </div>
        </>
    );
}

export default Cabs;
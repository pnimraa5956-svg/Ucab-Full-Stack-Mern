import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Anav from "./Anav";

function Addcar() {

    const navigate = useNavigate();

    const [car, setCar] = useState({
    drivername: "",
    carImage: null,
    carname: "",
    cartype: "",
    price: "",
    carno: ""
});

const [preview, setPreview] = useState("");

    const handleChange = (e) => {

        setCar({
            ...car,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append("drivername", car.drivername);
            formData.append("carImage", car.carImage);
            formData.append("carname", car.carname);
            formData.append("cartype", car.cartype);
            formData.append("price", car.price);
            formData.append("carno", car.carno);

            await axios.post(

                "http://localhost:5000/api/cars",

                formData,

                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }

            );

            alert("Car Added Successfully");

            navigate("/admin/cabs");

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to Add Car"
            );

        }

    };

    return (

        <>
            <Anav />

            <div className="container mt-5">

                <div className="card shadow p-4">

                    <h2 className="text-center mb-4">
                        Add New Car
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            className="form-control mb-3"
                            placeholder="Driver Name"
                            name="drivername"
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="file"
                            className="form-control mb-3"
                            accept="image/*"
                            onChange={(e) => {

                                const file = e.target.files[0];

                                setCar({
                                    ...car,
                                    carImage: file
                                });

                                setPreview(URL.createObjectURL(file));

                            }}
                        />

                        {preview && (
                            <div className="text-center mb-3">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="img-fluid rounded mb-3"
                                    style={{ 
                                        height: "200px",
                                        objectFit: "cover"
                                     }}
                                />
                            </div>
                        )}

                        <input
                            className="form-control mb-3"
                            placeholder="Car Name"
                            name="carname"
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            placeholder="Car Type"
                            name="cartype"
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="number"
                            className="form-control mb-3"
                            placeholder="Price"
                            name="price"
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-4"
                            placeholder="Car Number"
                            name="carno"
                            onChange={handleChange}
                            required
                        />

                        <button
                            className="btn btn-success w-100 " style={{ backgroundColor: "#2563eb" }}
                            type="submit"
                        >
                            Add Car
                        </button>
                        

                    </form>

                </div>

            </div>

        </>

    );

}

export default Addcar;
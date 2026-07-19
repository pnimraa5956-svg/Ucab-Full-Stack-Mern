import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Anav from "./Anav";

function Acabedit() {

    const { id } = useParams();
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

    useEffect(() => {
        fetchCar();
    }, []);

    const fetchCar = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/api/cars"
            );

            const selectedCar = res.data.cars.find(
                (item) => item._id === id
            );

            if (selectedCar) {
                setCar(selectedCar);
            }
            setPreview(
                `http://localhost:5000${selectedCar.carImage}`
            );

        } catch (error) {

            console.log(error);

        }

    };

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
            formData.append("carname", car.carname);
            formData.append("cartype", car.cartype);
            formData.append("price", car.price);
            formData.append("carno", car.carno);

            if (car.carImage instanceof File) {
                formData.append("carImage", car.carImage);
            }

            await axios.put(

                `http://localhost:5000/api/cars/${id}`,

                formData,

                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }

            );

            alert("Car Updated Successfully");

            navigate("/admin/cabs");

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Update Failed"
            );

        }

    };

    return (

        <>
            <Anav />

            <div className="container mt-5">

                <div className="card shadow p-4">

                    <h2 className="text-center mb-4">
                        Edit Car
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            className="form-control mb-3"
                            name="drivername"
                            value={car.drivername}
                            onChange={handleChange}
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

                        {
                            preview && (

                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="img-fluid rounded mb-3"
                                    style={{
                                        height: "200px",
                                        objectFit: "cover"
                                    }}
                                />

                            )
                        }

                        <input
                            className="form-control mb-3"
                            name="carname"
                            value={car.carname}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="cartype"
                            value={car.cartype}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="price"
                            value={car.price}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-4"
                            name="carno"
                            value={car.carno}
                            onChange={handleChange}
                        />

                        <button
                            className="btn btn-warning w-100"
                            type="submit"
                        >
                            Update Car
                        </button>

                    </form>

                </div>

            </div>

        </>

    );

}

export default Acabedit;
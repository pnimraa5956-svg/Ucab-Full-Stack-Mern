import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:5000/api/users/register",
                formData
            );

            alert(res.data.message);

            setFormData({
                name: "",
                email: "",
                password: ""
            });

            navigate("/login");

        } catch (error) {
            alert(error.response?.data?.message || "Registration Failed");
        }
    };

    return (
       <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg,#0f172a,#2563eb)"
            }}
        >

            <div
                className="card p-5 shadow-lg"
                style={{
                    width: "420px",
                    borderRadius: "20px"
                }}
            >

                <h2 className="text-center fw-bold mb-4">
                    Create Your Account
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="name"
                        className="form-control mb-3"
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        className="form-control mb-4"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        required
                    />

                    <button
                        className="btn btn-primary w-100"
                        type="submit"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center mt-4">

                    Already have an account?

                    <Link
                        to="/login"
                        className="ms-2 fw-bold"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Register;
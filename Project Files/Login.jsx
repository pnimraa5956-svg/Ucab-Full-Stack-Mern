import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:5000/api/users/login",
                form
            );

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            navigate("/uhome");

        } catch (error) {

            alert(error.response?.data?.message || "Login Failed");

        }

    };

    return (
        <>
        <nav 
        className="navbar navbar-expand-lg shadow-sm"
            style={{
                background: "linear-gradient(90deg,#0f172a,#2563eb)",
                padding: "1px 0",
                height: "60px",
            }}
            >
            <div className="container">
                <Link className="navbar-brand fw-bold text-white" to="/">
                UCAB
                </Link>

                <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown" style={{color:"white"}}>
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ color: "#ffffff" }}
                    >
                        Login
                    </a>

                    <ul className="dropdown-menu">
                        <li>
                        <Link className="dropdown-item" to="/login">
                            User
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="/admin/login">
                            Admin
                        </Link>
                        </li>
                    </ul>
                    </li>
                </ul>
            </div>
            </nav>

        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background: "#c5d7ff"
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
                    Welcome Back
                </h2>

                <form onSubmit={handleSubmit}>

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
                        Login
                    </button>

                </form>

                <p className="text-center mt-4">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="ms-2 fw-bold"
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div>
        </>

    );

}

export default Login;
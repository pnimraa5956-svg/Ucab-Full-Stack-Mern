import { Link, useNavigate } from "react-router-dom";

function Unav() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <nav
            className="navbar navbar-expand-lg shadow-sm"
            style={{
                background: "linear-gradient(90deg,#0f172a,#2563eb)",
                padding: "1px 0",
                height: "60px"
            }}
        >
            <div className="container">

                <Link
                    className="navbar-brand text-white fw-bold fs-3"
                    to="/uhome"
                >
                    🚖 UCAB
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link text-white fw-semibold"
                                to="/uhome"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link text-white fw-semibold"
                                to="/cabs"
                            >
                                Cabs
                            </Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link text-white fw-semibold"
                                to="/mybookings"
                            >
                                My Bookings
                            </Link>
                        </li>

                    </ul>

                    <div className="d-flex align-items-center">

                        <span className="text-white me-3 fw-semibold">
                            ({user?.name})
                        </span>

                        <button
                            className="btn btn-light text-primary fw-bold"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Unav;
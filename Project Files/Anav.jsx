import { Link, useNavigate } from "react-router-dom";

function Anav() {

    const navigate = useNavigate();

    const admin = JSON.parse(localStorage.getItem("admin"));

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("admin");
        navigate("/admin/login");
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

                <Link className="navbar-brand text-white fw-bold fs-3" to="/admin/home">
                    UCAB ADMIN
                </Link>

                <div className="collapse navbar-collapse">

                    <ul className="navbar-nav me-auto">

                        <li className="nav-item">
                            <Link className="nav-link text-white"  to="/admin/home">
                                Dashboard
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/admin/addcar">
                                Add Car
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/admin/cabs">
                                Cars
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/admin/users">
                                Users
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/admin/bookings">
                                Bookings
                            </Link>
                        </li>

                    </ul>

                    <span className="text-white me-3">
                        Admin: {admin?.name}
                    </span>

                    <button
                        className="btn btn-danger"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>
    );
}

export default Anav;
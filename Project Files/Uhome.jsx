import { Link } from "react-router-dom";
import Unav from "./Unav";

function Uhome() {
    return (
        <>
            <Unav />

            {/* Hero Section */}
            <div
                className="container-fluid py-5"
                style={{
                    background: "#c5d7ff",
                    minHeight: "100vh",
                }}
            >
                <div className="container">

                    {/* Welcome */}
                    <div className="text-center mb-5">
                        <h1
                            className="fw-bold"
                            style={{ color: "#0f172a", fontSize: "50px" }}
                        >
                            Welcome Back!
                        </h1>

                        <p
                            className="lead"
                            style={{ color: "#475569" }}
                        >
                            Ready for your next ride?
                        </p>

                        <div className="mt-4">
                            <Link
                                to="/cabs"
                                className="btn btn-primary btn-lg me-3 px-4"
                            >
                                Book a Cab
                            </Link>

                            <Link
                                to="/mybookings"
                                className="btn btn-outline-dark btn-lg px-4"
                            >
                                My Bookings
                            </Link>
                        </div>
                    </div>

                    {/* Dashboard Cards */}
                    <div className="row g-4 mb-5">

                        <div className="col-md-4">
                            <div className="card shadow border-0 text-center p-4 h-100">
                                <h1>🚘</h1>
                                <h3>Available Cars</h3>
                                <h2 className="text-primary">15+</h2>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow border-0 text-center p-4 h-100">
                                <h1>📖</h1>
                                <h3>My Bookings</h3>
                                <h2 className="text-success">View</h2>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow border-0 text-center p-4 h-100">
                                <h1>⭐</h1>
                                <h3>Happy Customers</h3>
                                <h2 className="text-warning">500+</h2>
                            </div>
                        </div>

                    </div>

                    {/* Why Choose UCAB */}
                    <div className="row g-4">

                        <div className="col-md-3">
                            <div className="card shadow border-0 p-4 text-center h-100">
                                <h1>🛡️</h1>
                                <h5>Safe Rides</h5>
                                <p>Verified drivers with secure trips.</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card shadow border-0 p-4 text-center h-100">
                                <h1>💰</h1>
                                <h5>Affordable</h5>
                                <p>Lowest fares with premium service.</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card shadow border-0 p-4 text-center h-100">
                                <h1>⚡</h1>
                                <h5>Instant Booking</h5>
                                <p>Book your cab within seconds.</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card shadow border-0 p-4 text-center h-100">
                                <h1>📍</h1>
                                <h5>Live Tracking</h5>
                                <p>Track your cab in real time.</p>
                            </div>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="text-center mt-5">
                        <h4 className="fw-bold text-primary">
                            Ride Smarter. Travel Better. 🚖
                        </h4>

                        <p className="text-muted">
                            Thank you for choosing UCAB.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Uhome;
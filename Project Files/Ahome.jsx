import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Anav from "./Anav";
import DashboardChart from "./DashboardChart";

function Ahome() {



    const [stats, setStats] = useState({
        users: 0,
        cars: 0,
        bookings: 0
    });

    useEffect(() => {

        const fetchStats = async () => {

            try {

                const res = await axios.get(
                    "http://localhost:5000/api/admin/dashboard"
                );

                setStats(res.data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchStats();

    }, []);

    return (

        <>
            <Anav />

            <div className="container py-5">

                <div className="text-center mb-5">

                    <p>
                        <b>UCAB Admin Dashboard</b>
                    </p>

                </div>

                <div className="row g-4">

                    <div className="col-md-4">

                        <div className="card shadow text-center p-4">

                            <h1>👤</h1>

                            <h2>{stats.users}</h2>

                            <h5>Total Users</h5>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow text-center p-4">

                            <h1>🚖</h1>

                            <h2>{stats.cars}</h2>

                            <h5>Total Cars</h5>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow text-center p-4">

                            <h1>📖</h1>

                            <h2>{stats.bookings}</h2>

                            <h5>Total Bookings</h5>

                        </div>

                    </div>

                </div>

                <DashboardChart stats={stats} />

                <div className="row mt-5">

                    <div className="col-md-6">

                        <Link
                            className="btn btn-primary w-100"
                            to="/admin/addcar"
                        >
                            ➕ Add Car
                        </Link>

                    </div>

                    <div className="col-md-6">

                        <Link
                            className="btn btn-outline-primary w-100"
                            to="/admin/cabs"
                        >
                            🚖 Manage Cars
                        </Link>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Ahome;
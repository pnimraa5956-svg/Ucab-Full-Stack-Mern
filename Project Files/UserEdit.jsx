import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Anav from "./Anav";

function UserEdit() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: ""
    });

    const fetchUser = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/api/users"
            );

            const selectedUser = res.data.users.find(
                (u) => u._id === id
            );

            if (selectedUser) {
                setUser(selectedUser);
            }

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {
        fetchUser();
    }, []);

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.put(
                `http://localhost:5000/api/users/${id}`,
                user
            );

            alert("User Updated Successfully");

            navigate("/admin/users");

        } catch (error) {

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
                        Edit User
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            className="form-control mb-3"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-4"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />

                        <button
                            className="btn btn-primary w-100"
                            type="submit"
                        >
                            Update User
                        </button>

                    </form>

                </div>

            </div>

        </>

    );

}

export default UserEdit;
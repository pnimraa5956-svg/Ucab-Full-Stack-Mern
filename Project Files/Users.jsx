import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Anav from "./Anav";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data.users || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Anav />

      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold" style={{ color: "#0f172a" }}>
            Manage Users
          </h2>

          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
            placeholder="Search User..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="row">
          {filteredUsers.map((user) => (
            <div className="col-lg-6 mb-4" key={user._id}>
              <div
                className="card border-0 shadow-lg"
                style={{ borderRadius: "20px" }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
                      style={{
                        width: "70px",
                        height: "70px",
                        fontSize: "28px",
                      }}
                    >
                      {user.name?.charAt(0).toUpperCase()}
                    </div>

                    <div className="ms-3">
                      <h4 className="mb-1">{user.name}</h4>

                      <p className="text-secondary mb-1">{user.email}</p>

                      <span className="badge bg-success">Active</span>
                    </div>
                  </div>

                  <hr />

                  <div className="d-flex gap-2">
                    <Link
                      to={`/admin/edituser/${user._id}`}
                      className="btn btn-primary w-50"
                    >
                      ✏ Edit
                    </Link>

                    <button
                      className="btn btn-outline-danger w-50"
                      onClick={() => deleteUser(user._id)}
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredUsers.length === 0 && (
            <div className="text-center">
              <h5>No Users Found</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Users;
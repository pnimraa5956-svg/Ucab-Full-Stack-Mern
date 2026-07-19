import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark px-4"
        style={{ background: "#0f172a" }}
      >
        <div className="container">
          <Link className="navbar-brand fw-bold fs-3" to="/">
            🚖 UCAB
          </Link>

          <div className="ms-auto">
            <Link
              to="/login"
              className="btn btn-outline-light me-2"
            >
              User Login
            </Link>

            <Link
              to="/admin/login"
              className="btn btn-primary"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div
        className="container-fluid text-white"
        style={{
          background: "linear-gradient(135deg,#0f172a,#2563eb)",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1
                className="fw-bold"
                style={{ fontSize: "60px" }}
              >
                Ride Smarter,
                <br />
                Travel Better 🚖
              </h1>

              <p
                className="mt-4"
                style={{ fontSize: "20px" }}
              >
                Book safe, affordable and comfortable rides
                with trusted drivers across your city.
              </p>

              <div className="mt-4">

                <Link
                  to="/register"
                  className="btn btn-light btn-lg me-3 px-4"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Book Ride
                </Link>

              </div>

            </div>

            <div className="col-lg-6 text-center">

              <img
                src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
                alt="Cab"
                className="img-fluid"
                style={{
                  maxWidth: "450px"
                }}
              />

            </div>

          </div>
        </div>
      </div>

      {/* Features */}

      <div className="container py-5">

        <h2 className="text-center fw-bold mb-5">
          Why Choose UCAB?
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow text-center p-4 h-100">
              <div style={{ fontSize: "55px" }}>🚖</div>
              <h4 className="mt-3">Comfortable Ride</h4>
              <p>Premium cars with experienced drivers.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center p-4 h-100">
              <div style={{ fontSize: "55px" }}>⚡</div>
              <h4 className="mt-3">Quick Booking</h4>
              <p>Book your ride in just a few seconds.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center p-4 h-100">
              <div style={{ fontSize: "55px" }}>🔒</div>
              <h4 className="mt-3">Safe Journey</h4>
              <p>Verified drivers and secure travel.</p>
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}

      <footer
        className="text-center text-white p-4"
        style={{ background: "#0f172a" }}
      >
        © 2026 UCAB | Ride Smarter, Travel Better 🚖
      </footer>

    </>
  );
}

export default Landing;
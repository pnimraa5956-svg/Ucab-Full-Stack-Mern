import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Landing from "./components/Landing";



import Login from "./User/Login";
import Register from "./User/Register";
import Uhome from "./User/Uhome";
import Cabs from "./User/Cabs";
import BookCab from "./User/BookCab";
import MyBookings from "./User/MyBookings";

import Alogin from "./Admin/Alogin";
import Aregister from "./Admin/Aregister";
import Ahome from "./Admin/Ahome";
import Acabs from "./Admin/Acabs";
import Addcar from "./Admin/Addcar";
import Acabedit from "./Admin/Acabedit";
import Users from "./Admin/Users";
import UserEdit from "./Admin/UserEdit";
import Bookings from "./Admin/Bookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* User Routes */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/uhome" element={<Uhome />} />
        <Route path="/cabs" element={<Cabs />} />
        <Route path="/book/:id" element={<BookCab />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/" element={<Landing />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Alogin />} />
        <Route path="/admin/register" element={<Aregister />} />
        <Route path="/admin/home" element={<Ahome />} />
        <Route path="/admin/cabs" element={<Acabs />} />
        <Route path="/admin/addcar" element={<Addcar />} />
        <Route path="/admin/editcar/:id" element={<Acabedit />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/edituser/:id" element={<UserEdit />} />
        <Route path="/admin/bookings" element={<Bookings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
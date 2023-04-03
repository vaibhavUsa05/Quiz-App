import React from "react";
import "./admin.css";
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="admin">
      <h3 className="adminPage">Sign In As Admin</h3>
      <form className="adminForm" method="post">
      <div className="textAdminID">
          <input type="text" name="adminID" className="textAdminID" placeholder="Enter your AdminID" />
        </div>
        <div className="textAdminID">
          <input type="text" name="password" className="textAdminID" placeholder="Enter your password" />
        </div>
        <div className="router">
          <button name="user" className="submit">
            <Link to="/user" className="link">
              SignIn
            </Link>
          </button>
          <button name="admin" className="submit">
            <Link to="/login" className="link">
              SignIn As User
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPage;

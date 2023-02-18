import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";

export default function DefaultLayout() {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div id="defaultLayout">
        <aside>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/users">Users</Link>
        </aside>
        <div className="content">
          <header>
            <div>
              Header
            </div>
  
            <div>
              {user.name} &nbsp; &nbsp;
              <a onClick={onLogout} className="btn-logout" href="#">Logout</a>
            </div>
          </header>
          <main>
            <Outlet/>
          </main>
          {notification &&
            <div className="notification">
              {notification}
            </div>
          }
        </div>
      </div>
    );
}

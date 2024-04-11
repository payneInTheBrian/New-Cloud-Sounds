import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Messages from '../components/Messages';
import { API_BASE } from "../constants";
import Foot from "./Foot"


export default function Root() {
  const [user, setUser] = useState();
  const [messages, setMessages] = useState({});

  useEffect(() => {
    fetch(API_BASE + '/api/user', { credentials: "include" })
      .then(res => res.json())
      .then(res => setUser(res.user));
  }, []);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMessages({});
      }
    }
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <div className="backG">
      
        <header className=" shadow d-flex flex-wrap justify-content-center py-3 mb-4 ">
          <Link className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-non" to="/">
            <img className="bi me-2" width="50" height="40"  src= "https://res.cloudinary.com/onehundreddevs/image/upload/v1673588157/rpnnmbcfz1fmwrfbbd7q.png" alt="cloud" />
            <h1 >((( Cloud Sounds )))</h1>
            {/* <span className="">We love Muzac</span> */}
          </Link>
          <ul className="nav nav-pills">
            {/* <li className="nav-item"><Link className="btn btn-warning mx-2 my-2 fw-bold" to="/login">Login</Link></li> */}
            <li className="nav-item"><Link className="btn btn-warning mx-2 my-2 fw-bold" to="/signup">Signup</Link></li>
            <li className="nav-item"><Link className="btn btn-warning mx-2 my-2 fw-bold" to="/feed">Feed</Link></li>
            <li className="nav-item"><Link className="btn btn-warning mx-2 my-2 fw-bold" to="/profile">Profile</Link></li>
            <li className="nav-item"><Link to="/logout" className="btn btn-warning mx-2 my-2 fw-bold">Logout</Link></li>
          </ul>
          
        </header>
      
			<Messages messages={messages} />
      <Outlet context={{ user, setUser, setMessages }} />
      <Foot />
    </div>
  );
}

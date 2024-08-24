import "./navbar.css"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const Logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo logo_firt">Ocean</span>
          <span className="logo">booking.com</span>
        </Link>
        {user ? (
          <div className="navItems">
            {user.username}
            <button onClick={Logout} className="navButton">Logout</button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
import "./Header.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { AppContext } from "../App";
import { useContext } from "react";
function Header() {
  const { user } = useContext(AppContext);
=======
function Header() {
>>>>>>> f01d12072a1eaf8e1f8f6e2cc3f88c668d4f91e7
  return (
    <div className="App-Header">
      <h1>My Store</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
<<<<<<< HEAD
              <Link to="/orders">Order</Link>
            </li>
        {user?.email ? (
          <>
            
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
=======
          <Link to="/orders">Order</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
>>>>>>> f01d12072a1eaf8e1f8f6e2cc3f88c668d4f91e7
      </ul>
    </div>
  );
}
export default Header;

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const {cartTotalQuantity} = useSelector((state)=>state.cart)
  return (
    <nav className="nav-bar">
     <Link to="/">
     <h2>OnlineShopping</h2>
     </Link>
     <Link to="/cart">
     <div className="nav-bag">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-bag-heart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
        </svg>
        <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
        </span>
      </div>
     </Link>
    </nav>
  );
};

export default NavBar;

import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";


export default function Header() {
  const { count } = useContext(CartContext);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (count > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">AnimeStore</Link>
        <nav className="nav">
          <a href="#products" className="nav-link">Products</a>
          <Link to="/admin" className="nav-link">Seller</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>        
        <div className="header-actions">
          <p>Cart <span className={`cart-count ${isAnimating ? 'bump' : ''}`}>{count}</span></p>
        </div>
      </div>
    </header>
  );
}

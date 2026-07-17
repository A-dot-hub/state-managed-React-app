import { Link } from "react-router-dom";
import { ShoppingCart, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed w-full z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 flex justify-between items-center transition-colors">
      <Link to="/" className="text-xl font-bold dark:text-white">
        Shop
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative dark:text-white">
          <ShoppingCart />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </Link>
        <button onClick={toggleTheme} className="dark:text-white">
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  );
}

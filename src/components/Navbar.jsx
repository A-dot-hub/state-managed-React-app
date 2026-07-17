import { Link } from "react-router-dom";
import { ShoppingCart, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 border-b p-4 flex justify-between items-center transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white text-black border-gray-200"
      }`}
    >
      <Link to="/" className="text-xl font-bold">
        Shop
      </Link>

      <div className="flex items-center gap-5">
        <Link to="/cart" className="relative">
          <ShoppingCart size={24} />

          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </Link>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition ${
            theme === "dark"
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  );
}

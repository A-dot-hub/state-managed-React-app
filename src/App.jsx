import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { useTheme } from "./context/ThemeContext.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const { theme } = useTheme();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div
          className={`min-h-screen flex flex-col transition-all duration-300 ${
            theme === "dark"
              ? "bg-gray-950 text-white"
              : "bg-gray-50 text-black"
          }`}
        >
          <Navbar />

          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

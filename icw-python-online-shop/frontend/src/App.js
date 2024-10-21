import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import GameCategory from "./Pages/GameCategory";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import multiplayer_banner from "./Components/Assets/banner_multiplayer.png";
import action_banner from "./Components/Assets/banner_action.png";
import fps_banner from "./Components/Assets/banner_fps.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/action"
            element={<GameCategory banner={action_banner} category="action" />}
          />
          <Route
            path="/multiplayer"
            element={
              <GameCategory
                banner={multiplayer_banner}
                category="multiplayer"
              />
            }
          />
          <Route
            path="/fps"
            element={<GameCategory banner={fps_banner} category="fps" />}
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

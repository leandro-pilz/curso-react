import "./App.css";

//Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Hooks
import { useAuth } from "./hooks/useAuth";

//Pages
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Register from "./pages/Auth/Register";
import EditProfile from "./pages/EditProfile/EditProfile";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const { auth, loading } = useAuth();

  if (loading) {
    <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={auth ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={auth ? <EditProfile /> : <Navigate to="/login" />}
            />
            <Route
              path="login"
              element={!auth ? <Auth /> : <Navigate to="/" />}
            />
            <Route
              path="register"
              element={!auth ? <Register /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

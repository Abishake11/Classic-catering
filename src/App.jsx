import { useEffect } from "react";
import "./App.css";

// packages import
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components import
import Home from "./components/home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// utils import
import ProtectedRoute from "./utils/ProtectedRoute";

// store import
import { useAuthStore } from "./store/authStore";

// components import
import Loader from "./components/Loader";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const hydrate = useAuthStore((state) => state.hydrate);
  const isHydrated = useAuthStore((state) => state.isHydrated);

  // 🔄 Restore session on app load
  useEffect(() => {
    hydrate();
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // animate only once (false = animate every time)
      easing: "ease-in-out",
    });
  }, []);

  // ⏳ Prevent UI flicker before hydration
  if (!isHydrated) {
    return <Loader />; // you can replace with loader component
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

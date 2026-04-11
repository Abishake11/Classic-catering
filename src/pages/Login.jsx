import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../api/LoginApi";
import { useAuthStore } from "../store/authStore";
import logo from "../assets/logo_black.png";

import FloatingInput from "../components/ui/FloatingInput";
import FloatingPasswordInput from "../components/ui/FloatingPasswordInput";

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginApi(form);

      await login({
        token: data.token,
        user: data.user,
      });

      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCF8E3] px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white/80 rounded-2xl shadow-xl p-6 sm:p-8 border border-[#eee]">

        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="logo" className="w-20 h-20 " />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#903728]">
            Classic Catering
          </h2>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <FloatingInput
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <FloatingPasswordInput
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#903728] text-white py-3 rounded-lg font-semibold 
    hover:bg-[#7a2e21] transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
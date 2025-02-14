import React, { useState } from "react";
import { Input } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";

const LoginForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const toggleVisibility = (): void => setIsVisible((prev) => !prev);

  const handleLogin = (e: React.FormEvent): void => {
    e.preventDefault(); // Ngăn reload trang khi submit form

    console.log("Login button clicked!");

    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password.");
      console.log("Error:", "Please enter both username and password.");
      return;
    }

    setError("");
    console.log("Logging in with:", { username, password });

    // Xử lý đăng nhập ở đây (gửi request API)
  };

  return (
    <div className="flex h-screen w-full relative overflow-hidden">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10 dark:bg-black relative pl-10">
        <h2 className="text-4xl font-bold mb-8">Welcome Back!</h2>

        <form className="w-80 flex flex-col" onSubmit={handleLogin}>
          {/* Username Input */}
          <div className="mb-2">
            <Input
              isClearable
              className="max-w-xs dark:text-white"
              label="Username"
              placeholder="Enter your username"
              type="text"
              variant="bordered"
              onChange={(e) => setUsername(e.target.value)}
              onClear={() => setUsername("")}
            />
          </div>

          {/* Password Input */}
          <div className="mt-4 relative">
            <Input
              className="max-w-xs mb-2 rounded-full"
              endContent={
                <button
                  aria-label="toggle password visibility"
                  className="p-1 rounded-full focus:outline-none hover:bg-gray-200 transition"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <Eye className="w-5 h-5 text-gray-500" />
                  ) : (
                    <EyeOff className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              }
              label="Password"
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              variant="bordered"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Hiển thị lỗi nếu có */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Register link */}
          <p className="text-center mt-4 text-sm">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-bold text-[#212D2D] hover:text-[#739A96]"
            >
              Register
            </a>
          </p>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-6 w-full py-3 bg-[#294646] text-white rounded-[15px] text-lg font-medium hover:bg-[#212D2D]"
          >
            Login
          </button>
        </form>

        {/* Decorative Elements */}
        <div className="absolute bottom-11 left-1 w-72 h-24 bg-[#739A96] opacity-20 rounded-full transform rotate-[-30deg]"></div>
        <div className="absolute bottom-10 left-8 w-96 h-28 bg-[#B2D1CE] opacity-40 rounded-full transform rotate-[-30deg]"></div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-[#294646]"></div>
    </div>
  );
};

export default LoginForm;

"use client";

import { FiMail, FiLock } from "react-icons/fi";
const Login = () => {
  return (
    <div className="hero min-h-screen flex items-center justify-center px-5">
      <div className="card lg:card-side bg-base-200 shadow-xl w-full max-w-2xl">
        <figure className="flex justify-center lg:justify-start p-4 lg:p-0">
          <img
            className="h-48 lg:h-72 w-full lg:w-auto object-cover"
            src="/login/login.gif"
            alt="Login"
          />
        </figure>
        <div className="card-body p-4 lg:p-6">
          <h2 className="card-title mb-3 text-center lg:text-left">
            Login Dashboard
          </h2>
          <div>
            {/* Email Input */}
            <label className="input input-bordered flex items-center gap-2 mb-3">
              <FiMail className="text-xl" />
              <input
                placeholder="Email"
                type="text"
                className="grow p-2 rounded-md"
              />
            </label>

            {/* Password Input */}
            <label className="input input-bordered flex items-center gap-2 mb-3">
              <FiLock className="text-xl" />
              <input
                placeholder="Password"
                type="password"
                className="grow p-2 rounded-md"
              />
            </label>
          </div>
          <div className="card-actions justify-center lg:justify-end mt-3">
            <a
              href="/"
              className="font-bold text-secondary w-full lg:w-auto px-4 py-2 border border-secondary rounded-md hover:bg-secondary hover:text-white transition-all"
            >
              Back
            </a>
            <a
              href="URL_TUJUAN"
              className="font-bold text-primary w-full lg:w-auto px-4 py-2 border border-primary rounded-md hover:bg-primary hover:text-white transition-all"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

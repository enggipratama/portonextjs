"use client";

const Login = () => {
  return (
    <div className="hero min-h-screen flex  items-center justify-center">
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
          <label className="input input-bordered flex items-center gap-2 mb-3">
            <span className="text-sm lg:text-base">Email</span>
            <input type="text" className="grow p-2 rounded-md" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-3">
            <span className="text-sm lg:text-base">Password</span>
            <input type="password" className="grow p-2 rounded-md" />
          </label>
          <div className="card-actions justify-center lg:justify-end mt-3">
            <button className="btn btn-primary w-full lg:w-auto">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

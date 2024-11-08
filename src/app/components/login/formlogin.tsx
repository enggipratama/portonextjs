"use client";

const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="card card-side bg-base-200 shadow-xl">
        <figure>
          <img className="h-72"
            src="/login/login.gif"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-3">Login Dashboard</h2>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Password
            <input type="password" className="grow" />
          </label>
          <div className="card-actions justify-end mt-3">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

"use client";

const Skill = () => {
  return (
    <div className="flex flex-col w-full px-10 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 ">
        <div className="card bg-base-200 shadow-xl mt-5">
          <span className="indicator-item badge badge-success">Learning...</span>
          <figure className="px-10 pt-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
            alt="Laravel"
            className="rounded-xl h-20 w-20 object-cover"
          />
          </figure>
          <div className="card-body items-center text-center max-w-full">
            <h2 className="text-center lg:text-center">Laravel</h2>
            <progress className="progress progress-primary w-16"></progress>
            <progress className="progress progress-primary w-16" value="80" max="100"></progress>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl mt-5">
        <span className="indicator-item badge badge-success">Learning...</span>
          <figure className="px-10 pt-10">
            <img
              src="https://i.pinimg.com/originals/2d/3a/7d/2d3a7d7d1ad7adeded994de246f60c43.png"
              alt="PHP"
              className="rounded-xl h-20 w-20 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center max-w-full">
            <h2 className="text-center lg:text-center">PHP</h2>
            <progress className="progress progress-primary w-16"></progress>
            <progress className="progress progress-primary w-16" value="80" max="100"></progress>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl mt-5">
        <span className="indicator-item badge badge-success">Learning...</span>
          <figure className="px-10 pt-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="Javascript"
              className="rounded-xl h-20 w-20 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center max-w-full">
            <h2 className="text-center lg:text-center">JavaScript</h2>
            <progress className="progress progress-primary w-16"></progress>
            <progress className="progress progress-primary w-16" value="40" max="100"></progress>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl mt-5">
        <span className="indicator-item badge badge-success">Learning...</span>
          <figure className="px-10 pt-10">
            <img
              src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
              alt="Next.js"
              className="rounded-xl h-20 w-20 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center max-w-full">
            <h2 className="text-center lg:text-center">NEXT.js</h2>
            <progress className="progress progress-primary w-16"></progress>
            <progress className="progress progress-primary w-16" value="40" max="100"></progress>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl mt-5">
        <span className="indicator-item badge badge-success">Learning...</span>
          <figure className="px-10 pt-10">
            <img
              src="https://i.pinimg.com/originals/41/95/cf/4195cf989fac0128a89669f40a1e3496.png"
              alt="Bootstrap"
              className="rounded-xl h-20 w-20 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center max-w-full">
            <h2 className="text-center lg:text-center">Bootstrap</h2>
            <progress className="progress progress-primary w-16"></progress>
            <progress className="progress progress-primary w-16" value="70" max="100"></progress>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl mt-5">
        <span className="indicator-item badge badge-success">Learning...</span>
          <figure className="px-10 pt-10">
            <img
              src="https://www.svgrepo.com/show/374118/tailwind.svg"
              alt="Tailwind"
              className="rounded-xl h-20 w-20 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center max-w-full">
            <h2 className="text-center lg:text-center">Tailwindcss</h2>
            <progress className="progress progress-primary w-16"></progress>
            <progress className="progress progress-primary w-16" value="70" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;

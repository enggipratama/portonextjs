"use client";
import Image from 'next/image';
const Skill = () => {
  return (
    <div className="flex flex-col w-full px-10 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 ">
        <div className="card bg-base-200 shadow-xl mt-5">
          <span className="indicator-item badge badge-success">Learning...</span>
          <figure className="px-10 pt-10">
          <Image
            src="/iconskill/laravel.png"
            width={500}
            height={300}
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
            <Image
              src="/iconskill/PHP.png"
              width={500}
              height={300}
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
            <Image
              src="/iconskill/JavaScript.png"
              width={500}
              height={300}
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
            <Image
              src="/iconskill/Nextjs.png"
              width={500}
              height={300}
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
            <Image
              src="/iconskill/bootstrap.png"
              width={500}
              height={300}
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
            <Image
              src="/iconskill/tailwind.png"
              width={500}
              height={300}
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

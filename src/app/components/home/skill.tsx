"use client";
import Image from "next/image";
const Skill = () => {
  return (
    <div className="flex flex-col w-full items-center mb-10">
      <h2 className="text-center mt-2 lg:text-center font-bold">My Skill</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-3 gap-2 ">
        <div className="card bg-base-200 shadow-xl mt-5 w-32 h-min">
          <span className="indicator-item badge badge-success self-center mt-2">
            Learning...
          </span>
          <figure className="px-5 pt-5">
            <Image
              src="/iconskill/laravel.png"
              width={500}
              height={300}
              alt="Laravel"
              className="rounded-xl h-20 w-20 object-cover"
            />
          </figure>
          <div className="flex flex-col items-center">
            <h2 className="text-center mt-2 lg:text-center">Laravel</h2>
            <progress
              className="progress progress-primary mt-2 mb-5 w-16"
              value="80"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl mt-5 w-32 h-min">
          <span className="indicator-item badge badge-success self-center mt-2">
            Learning...
          </span>
          <figure className="px-5 pt-5">
            <Image
              src="/iconskill/PHP.png"
              width={500}
              height={300}
              alt="PHP"
              className="rounded-xl h-20 w-20 object-cover"
            />
          </figure>
          <div className="flex flex-col items-center">
            <h2 className="text-center mt-2 lg:text-center">PHP</h2>
            <progress
              className="progress progress-primary mt-2 mb-5 w-16"
              value="80"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl mt-5 w-32 h-min">
          <span className="indicator-item badge badge-success self-center mt-2">
            Learning...
          </span>
          <figure className="px-5 pt-5">
            <Image
              src="/iconskill/JavaScript.png"
              width={500}
              height={300}
              alt="Javascript"
              className="rounded-xl h-20 w-20 object-cover"
            />
          </figure>
          <div className="flex flex-col items-center">
            <h2 className="text-center mt-2 lg:text-center">JavaScript</h2>
            <progress
              className="progress progress-primary mt-2 mb-5 w-16"
              value="40"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl mt-5 w-32 h-min">
          <span className="indicator-item badge badge-success self-center mt-2">
            Learning...
          </span>
          <figure className="px-5 pt-5">
            <Image
              src="/iconskill/Nextjs.png"
              width={500}
              height={300}
              alt="Next.js"
              className="rounded-xl h-20 w-20 object-cover"
            />
          </figure>
          <div className="flex flex-col items-center">
            <h2 className="text-center mt-2 lg:text-center">NEXT.js</h2>
            <progress
              className="progress progress-primary mt-2 mb-5 w-16"
              value="40"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl mt-5 w-32 h-min">
          <span className="indicator-item badge badge-success self-center mt-2">
            Learning...
          </span>
          <figure className="px-5 pt-5">
            <Image
              src="/iconskill/bootstrap.png"
              width={500}
              height={300}
              alt="Bootstrap"
              className="rounded-xl h-20 w-20 object-cover"
            />
          </figure>
          <div className="flex flex-col items-center">
            <h2 className="text-center mt-2 lg:text-center">Bootstrap</h2>
            <progress
              className="progress progress-primary mt-2 mb-5 w-16"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl mt-5 w-32 h-min">
          <span className="indicator-item badge badge-success self-center mt-2">
            Learning...
          </span>
          <figure className="px-5 pt-5">
            <Image
              src="/iconskill/tailwind.png"
              width={500}
              height={300}
              alt="Tailwind"
              className="rounded-xl h-20 w-20 object-cover"
            />
          </figure>
          <div className="flex flex-col items-center">
            <h2 className="text-center mt-2 lg:text-center">Tailwindcss</h2>
            <progress
              className="progress progress-primary mt-2 mb-5 w-16"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;

import ViewButton from "../components/home/buttonviewnav";
import SosialMedia from "../components/home/buttonsosial";
import Skill from "../components/home/skill";
import Image from 'next/image';

export default function Home () {
  return (
    <>
      <ViewButton />
        <div className="flex flex-col w-full mt-5 px-10 grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
          <div className="hero h-min bg-base-200 rounded-box px-5 ">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-1 items-center">
              <div className="flex justify-center items-center">
              <figure className="mt-5 mb-5">
              <Image
                src="/profile/profile.jpg"
                width={500}
                height={300}
                className="rounded-lg shadow-2xl h-40 w-40 object-cover"
                alt="Enggi Pratama"
              />
              </figure>
              </div>
              <div className="lg:flex-col lg:items-center">
              <h2 className="text-1xl lg:text-1xl text-center lg:text-center font-bold mb-5">
                Hi Welcome, I&apos;m <span className="text-blue-400">Enggi Pratama</span> 🙌
              </h2>
                <p className="text-center lg:text-center">I am a full stack developer, from Indonesia.</p>
                <div className="flex justify-center">
                  <div className="badge badge-primary flex mt-2 font-bold gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 448 512"><path fill="#000" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                  Still Learning
                  </div>  
                </div>
                <SosialMedia />
              </div>
            </div>
          </div>
        <div className="hero h-min bg-base-200 rounded-box px-5">
            <div className="flex flex-col w-full items-center mt-10 mb-10">
              <div className="rounded-box grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 mb-5">
              <figure>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 640 512"><path fill="#ffffff" d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
              </figure>
              <figure>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 self-center" viewBox="0 0 384 512"><path fill="#ffffff" d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z"/></svg>
              </figure>
              <figure>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 576 512"><path fill="#ffffff" d="M64 112c-8.8 0-16 7.2-16 16V384c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H64zM0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM176 320H400c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm-72-72c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16z"/></svg>
              </figure>
              </div>
              <div className="lg:flex-col lg:items-center">
                <h2 className="text-1xl lg:text-1xl text-center lg:text-center font-bold mb-5">I Learn Through <span className="text-blue-400">Experiences</span> 😎❤️</h2>
                <p className="text-justify lg:text-justify">I&apos;m Enggi Pratama, from Indonesia. I&apos;ve spent my time to take any opportunity as well as developing my experience and skills to things like Graphic Designing, Programming, and many others. <br /> <br />
                But one thing I always stick with everything is, I always do every works as my passion, and that&apos;s what makes me happy also giving myself a chance to deliver best works that i can do.</p>
              </div>
            </div>
          </div>
        <Skill />
        </div>
    </>
  );
};
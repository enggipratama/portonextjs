import ViewButton from "../components/home/buttonviewnav";
import SosialMedia from "../components/home/buttonsosial";
import Skill from "../components/home/skill";
import Footer from "../components/home/footer";
import Image from 'next/image';
const Home = () => {
  return (
    <>
      <ViewButton />
        <div className="flex flex-col w-full mt-20 px-10">
          <div className="hero h-min bg-base-200 rounded-box px-5">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="flex justify-center items-center">
              <figure className="mt-5 mb-5">
              <Image
                src="/profile/profile.jpg"
                width={500}
                height={300}
                className="rounded-lg shadow-2xl h-60 w-40 object-cover"
                alt="Enggi Pratama"
              />
              </figure>
              </div>
              <div className="lg:flex-col lg:items-center">
                <h1 className="text-1xl lg:text-3xl text-center lg:text-left font-bold">Hi Welcome, I&apos;m Enggi Pratama 🙌</h1>
                <p className="text-center lg:text-left py-6">Gak tau mau ngisi apa. 😒  </p>
                <SosialMedia />
              </div>
            </div>
          </div>
        </div>
        <Skill />
        <Footer />
    </>
  );
};

export default Home
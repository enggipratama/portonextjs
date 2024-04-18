
const Home = () => {
  return (
    <>
      <div className="text-center mt-10 ">
        <div className="join">
          <button className="btn join-item">Home</button>
          <button className="btn join-item">Project</button>
          <button className="btn join-item">About</button>
        </div>
      </div>
      <div className="flex flex-col w-full mt-10 px-10">
        <div className="grid h-20 card bg-base-200 rounded-box place-items-center">Hi, I'm Enggi Pratama 🙌</div>
      </div>
      <div className="flex flex-col w-full lg:flex-row mt-10 mb-10 px-10">
        <div className="grid flex-grow h-32 card bg-base-200 rounded-box place-items-center">
          
        </div> 
        <div className="divider lg:divider-horizontal"></div> 
          <div className="grid flex-grow h-32 card bg-base-200 rounded-box place-items-center">

          </div>
      </div>
    </>
  );
};

export default Home
import ViewButton from "../components/home/buttonviewnav";
import Footer from "../components/home/footer";
import ProjectList from "../components/project/projectlist";

export default function Project() {
    return (
        <>
            <ViewButton />
            <div className="flex flex-col w-full mt-20 px-10">
            <div className="mockup-browser border bg-base-300 ">
                <div className="mockup-browser-toolbar">
                    <div className="input">https://enggipratama.me/project</div>
                </div>
                <div className="flex justify-center bg-base-100">
                    <ProjectList />
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}
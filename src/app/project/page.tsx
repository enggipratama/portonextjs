import ViewButton from "../components/home/buttonviewnav";
import Footer from "../components/home/footer";
import ProjectList from "../components/project/projectlist";

export const metadata = {
    title: "Project | Enggi Pratama",
};
export default function Project() {
    return (
        <>
        <ViewButton />
        <ProjectList />
        </>
    );
}
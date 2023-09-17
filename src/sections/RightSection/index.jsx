import ContentContainer from "../../components/ContenContainer";
import About from "../About";
import { data as experiencesData } from "../../contents/experience.js";
import { data as projectsData} from "../../contents/projects.js";
import Footer from "../Footer";

const RightSection = ({ onInitial }) => {

    console.count('')
    return (
        <div className="grid gap-y-14 lg:gap-y-40 px-3">
            <About
                title = "About"
                onInitial = {onInitial}
            />
            <ContentContainer
                onInitial = {onInitial}
                title = "Experience"
                data = {experiencesData}
            />
            <ContentContainer
                onInitial = {onInitial}
                title = "Project"
                data = {projectsData}
            />
            <ContentContainer
                onInitial = {onInitial}
                title = "Article"
                data = {projectsData}
            />
            <Footer/>
        </div>
    )
}

export default RightSection;
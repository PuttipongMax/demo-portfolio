import Header from "../Header";
import Navbar from "../Navbar";
import Contact from "../Contact";

const LeftSection = ({ navBarItems, currentSection }) => {
    return (
        <div className="px-3 mb-14 lg:mb-0">
            <div className="sticky top-14 grid gap-y-4 lg:grid-rows-[1fr_2fr_20%] 
            lg:h-[86vh] px-2">
                <Header />
                <Navbar 
                    navBarItems={navBarItems} 
                    currentSection={currentSection}/>
                <Contact />
            </div> 
        </div>
    )
}

export default LeftSection;
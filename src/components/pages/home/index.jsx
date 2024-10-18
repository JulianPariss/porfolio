import VideoPlayer from "../../atoms/videoPlayer"
import Banner from "../../molecules/banner";
import RocksMask_01 from "../../molecules/rocksMask/rocksMask_01";
import AboutThis from "../../molecules/aboutThis";
import Profile from "../../organisms/profile";
import {SectionDivider_00} from '../../atoms/sectionDivider'
import RocksMask_02 from "../../molecules/rocksMask/rocksMask_02";
import Section from "../../organisms/section";
import CardsList from "../../organisms/cardsList";
import ParallaxBackground from "../../atoms/parallaxBackground";

const Home = () => {
    return(
        <>
            <ParallaxBackground/>
            <Banner/>
            <VideoPlayer/>
            <RocksMask_01/>
            <AboutThis/>
            <SectionDivider_00/>
            <Profile/>
            <RocksMask_02/>
            <Section/>
            <CardsList/>
            <div style={{width: "100%", height: "50vh", backgroundColor: "black"}}/>
        </>
    )
}


export default Home;
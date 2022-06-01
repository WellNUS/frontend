import calendar from "../../../resource/icon/homeIcons/calendar.png";
import group from "../../../resource/icon/homeIcons/group.png"
import counsellor from "../../../resource/icon/homeIcons/online-counselling.png";
import volunteer from "../../../resource/icon/homeIcons/volunteer.png";
import HomeNav from "./HomeNav";
import { Carousel, Col, Row } from "react-bootstrap";

import {
    Container,
    Header,
    Title,
    Section,
    CarouselCaption
} from "./styled/styled";

import "./home.css";
import nuhImage from "../../../resource/icon/homeIcons/nuh-building.png";
import Footer from "./Footer";

function Home(): React.ReactElement {
    return <div>
        <Container>
            <div>
                <HomeNav />
            </div>
            <div className="home-top-row">
                <div className="home-top-row-left-col">
                    <p>Managing mental wellness for a happier NUS.</p>
                    <p className="home-top-row-left-col-subheading">Founded by the community for the community.</p>
                </div>
                <div className="home-top-row-right-col">
                    <Section>
                        <Carousel className="carousel-wrapper">
                            <Carousel.Item>
                                <img
                                className="carousel-img"
                                src={calendar}
                                alt="First slide"
                                />
                                <CarouselCaption>
                                    <h3>Book a Session</h3>
                                    <p>Make an appointment with a particular counsellor easily.</p>
                                </CarouselCaption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="carousel-img"
                                src={group}
                                alt="Second slide"
                                />
                                <CarouselCaption>
                                <h3>Group Matching</h3>
                                <p>Find a group of like-minded peers to go through thick and thin together.</p>
                                </CarouselCaption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="carousel-img"
                                src={counsellor}
                                alt="Third slide"
                                />
                                <CarouselCaption>
                                <h3>On-Demand Counselling</h3>
                                <p>Get matched with an available counsellor immediately.</p>
                                </CarouselCaption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="carousel-img"
                                src={volunteer}
                                alt="Fourth slide"
                                />
                                <CarouselCaption>
                                <h3>Volunteer to help others</h3>
                                <p>Choose to lend a helping hand by training to be a student volunteer counsellor.</p>
                                </CarouselCaption>
                            </Carousel.Item>
                        </Carousel>
                    </Section>
                </div>
            </div>
            <div className="home-second-row">
                <div className="section-wrapper">
                    <div>
                        <div className="section-header">About WellNUS</div>
                        <div>
                            In 2022, researchers at NUHS Mind Science Centre found that 3 in 4 NUS students are at risk of depression due to the pandemic and restrictions imposed to curb the spread of Covid-19. These restrictions hampered opportunities for students to meet new people of common interests that can share their hardships they might face. One can argue that NUS has many CCAs and holds many events that offer great opportunities to make new friends. However, many of these events are shared through word of mouth and students who do participate in these events do so with their friends. The result is that it is easier to make friends when you have friends to begin with.
                            WellNUS jump starts the friend making process and provide on-demand mental health support provided by student volunteers and mental health professionals.
                        </div>
                    </div>
                    <img src={nuhImage} className="section-image"/>
                </div>
            </div>
            <div className="home-third-row">
                <div className="core-features-wrapper">
                    <div className="section-header">Core Features</div>
                    <div className="card-wrapper">
                        <div className="core-features-card">
                            <img src={calendar} className="core-features-img" />
                            <h4>Book a Session</h4>
                            <p className="core-features-desc">Make an appointment with a particular counsellor easily.</p>
                        </div>
                        <div className="core-features-card">
                            <img src={group} className="core-features-img"/>
                            <h4>Group Matching</h4>
                            <p className="core-features-desc">Find a group of like-minded peers to go through thick and thin together.</p>
                        </div>
                        <div className="core-features-card">
                            <img src={counsellor} className="core-features-img"/>
                            <h4>On-Demand Counselling</h4>
                            <p className="core-features-desc">Get matched with an available counsellor immediately.</p>
                        </div>
                        <div className="core-features-card">
                            <img src={volunteer} className="core-features-img"/>
                            <h4>Volunteer to help others</h4>
                            <p className="core-features-desc">Choose to lend a helping hand by training to be a student volunteer counsellor.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-fourth-row">
                <Footer />
            </div>
        </Container>
   </div>
}

export default Home;
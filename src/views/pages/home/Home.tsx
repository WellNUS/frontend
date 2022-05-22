import { Fragment } from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

import background from "../../../resource/background/counselling.jpg";
import calendar from "../../../resource/icon/calendar.png";
import group from "../../../resource/icon/group.png"
import counsellor from "../../../resource/icon/online-counselling.png";
import volunteer from "../../../resource/icon/volunteer.png";
import HomeNav from "./HomeNav";

const Container = styled.div`
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 1000px;
    background-image: url(${background});
    background-size: 100vw;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: block;
`

const Header = styled.h1`
    background-color: lightpink;
    display: block;
    text-align: center;
    padding: 10vh 0;
    margin: 0;
    font-weight: bold;
`

const Title = styled.div`
    font-size: 3em;
`

const Section = styled.div`
    padding: 3vh 3vw;
    margin: 3vh 3vw;
    background-color: lightpink;
    text-align: center;
`

const CarouselCaption = styled(Carousel.Caption)`
    position: static;
    color: black;
`

function Home(): React.ReactElement {
    return  <Container>
                 <Header>
                    <Title>WellNUS</Title> 
                    <p>Creating a happier NUS</p>
                </Header>
                <Section>
                    <Title>
                        About WellNUS
                    </Title>
                    <p>
                        In 2022, researchers at NUHS’s Mind Science Centre found that 3 in 4 NUS students are at risk of depression due to the pandemic and restrictions imposed to curb the spread of Covid-19. These restrictions hampered opportunities for students to meet new people of common interests that can share their hardships they might face. One can argue that NUS has many CCAs and holds many events that offer great opportunities to make new friends. However, many of these events are shared through word of mouth and students who do participate in these events do so with their friends. The result is that it is easier to make friends when you have friends to begin with.
                    </p>
                    <p>
                    WellNUS jump starts the friend making process and provide on-demand mental health support provided by student volunteers and mental health professionals.
                    </p>

                </Section>
                <Section>
                    <Title>
                        What WellNUS provides you?
                    </Title>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-25 m-auto"
                            src={calendar}
                            alt="First slide"
                            />
                            <CarouselCaption>
                                <h3>Book a Session</h3>
                                <p>Make an appointment with a particular counsellor easily</p>
                            </CarouselCaption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-25 m-auto"
                            src={group}
                            alt="Second slide"
                            />
                            <CarouselCaption>
                            <h3>Group-Matching</h3>
                            <p>Find a group of like-minded peers to go through thick and thin together</p>
                            </CarouselCaption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-25 m-auto"
                            src={counsellor}
                            alt="Third slide"
                            />
                            <CarouselCaption>
                            <h3>On-Demand Counselling</h3>
                            <p>Get matched with an available counsellor immediately</p>
                            </CarouselCaption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-25 m-auto"
                            src={volunteer}
                            alt="Fourth slide"
                            />
                            <CarouselCaption>
                            <h3>Volunteer to help others</h3>
                            <p>Choose to lend a helping hand by training to be a student volunteer counsellor</p>
                            </CarouselCaption>
                        </Carousel.Item>
                    </Carousel>
                </Section>
                <Section>
                    <HomeNav />
                </Section>
            </Container>
   
}

export default Home;
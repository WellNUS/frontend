import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import background from "../../../../resource/background/counselling.jpg";

export const Container = styled.div`
    padding: 0;
    margin: 0;
    width: 100vw;
    // background-color: #ffb6c1;
    // height: 1000px;
    // background-image: url(${background});
    // background-size: 100vw;
    // background-position: bottom center;
    // background-repeat: no-repeat;
    // background-attachment: fixed;
    display: block;
`

export const Header = styled.h1`
    // background-color: lightpink;
    height: 100vh;
    display: block;
    text-align: center;
    padding: 10vh 0;
    margin: 0;
    font-weight: bold;
`

export const Title = styled.div`
    font-size: 3em;
`

export const Section = styled.div`
    padding: 3vh 3vw;
    margin: 3vh 3vw;
    text-align: center;
    color: white;
`

export const CarouselCaption = styled(Carousel.Caption)`
    position: static;
`
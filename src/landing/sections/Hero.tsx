/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, styled } from "@mui/material";

import { HeroBubblesImage, HeroAcademicHatImage, HeroBooksImage } from "../../assets";

export const Hero = (): JSX.Element => {
  return (
    <StyledSection id="hero">
      <div
        className="background _bubbles"
        style={{ backgroundImage: `url(${HeroBubblesImage})` }}
      />
      <Content>
        <article>
          <h1>
            Prove your English proficiency today with <b>BILINGUAL</b>
          </h1>
          <p>
            For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and
            confidence they need to speak new languages.
          </p>
          <Button>TO BEGIN</Button>
        </article>
        <ImagesContainer>
          <img
            className="hero-image hat"
            src={HeroAcademicHatImage}
            alt="Academic Hat"
            width={"236.09px"}
            height={"243px"}
          />
          <img
            className="hero-image books"
            src={HeroBooksImage}
            alt="Books"
            width={"594.78px"}
            height={"499px"}
          />
        </ImagesContainer>
      </Content>
    </StyledSection>
  );
};

const StyledSection = styled("section")(() => ({
  height: "100%",
  backgroundColor: "#FCD200",
  position: "relative",
  "& > .background": {
    position: "absolute",
    backgroundRepeat: "no-repeat"
  },
  "& > .background._bubbles": {
    backgroundSize: "contain",
    backgroundPosition: "bottom",
    opacity: 0.45,
    top: 0,
    left: 0,
    height: "100%",
    width: "100%"
  }
}));

const Content = styled("div")(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  position: "relative",
  zIndex: 1,
  "& > article": {
    flex: 1
  }
}));

const ImagesContainer = styled("div")(() => ({
  flex: 1,
  position: "relative",
  height: "100%",
  "& > .hero-image": {
    objectFit: "contain",
    position: "absolute"
  },
  "& > .hero-image.hat": {
    top: "35%",
    transform: "translate(10%,-50%)"
  },
  "& > .hero-image.books": {
    bottom: 0,
    right: 0
  }
}));

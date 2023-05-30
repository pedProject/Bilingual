import { styled } from "@mui/material";

import { HeroBubblesImage, HeroAcademicHatImage, HeroBooksImage } from "../../assets";
import Container from "../../layout/Container";
import Button from "../components/Button";
import { SpacedSection } from "../components/SpacedSection";

export const Hero = (): JSX.Element => {
  return (
    <StyledSection id="hero">
      <div
        className="background _bubbles"
        style={{ backgroundImage: `url(${HeroBubblesImage})` }}
      />
      <Container>
        <Content>
          <article>
            <h1 className="hero-heading">
              Prove your English proficiency today with{" "}
              <b className="hero-heading__bold">BILINGUAL</b>
            </h1>
            <p className="hero-description">
              For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and
              confidence they need to speak new languages.
            </p>
            <Button>TO BEGIN</Button>
          </article>
          <ImagesContainer>
            <img className="hero-image hat" src={HeroAcademicHatImage} alt="Academic Hat" />
            <img className="hero-image books" src={HeroBooksImage} alt="Books" />
          </ImagesContainer>
        </Content>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled(SpacedSection)(() => ({
  height: "100dvh",
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
  flexWrap: "wrap",
  "& > article": {
    flex: 2
  },
  "& .hero-heading": {
    fontSize: "3.75rem",
    fontFamily: "Gilroy",
    fontWeight: 700,
    color: "#43404E",
    lineHeight: "4.5625rem",
    "& > .hero-heading__bold": {
      color: "#C93D7D",
      fontWeight: 900
    }
  },
  "& .hero-description": {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "1.25rem",
    lineHeight: "1.875rem",
    color: "#23212A",
    margin: "1.635rem 0 1.875rem"
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
    top: "50%",
    transform: "translate(-20%,-80%)",
    maxWidth: "236.09px",
    maxHeight: "243px",
    width: "100%",
    height: "fit-content"
  },
  "& > .hero-image.books": {
    bottom: "50%",
    right: 0,
    transform: "translate(0%, 100%) scale(1.2)",
    maxWidth: "594.78px",
    maxHeight: "499px",
    width: "100%",
    height: "fit-content"
  }
}));

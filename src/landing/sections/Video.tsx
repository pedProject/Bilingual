import { styled } from "@mui/material";

import Container from "../../layout/Container";
import { SectionHeading } from "../components/SectionHeading";
import { SpacedSection } from "../components/SpacedSection";

const DUMMY_VIDEO_DATA = [
  {
    link: "GNrdg3PzpJQ",
    description: "Test Overview",
    duration: "Duration 1:00",
    id: "w1"
  },
  {
    link: "GNrdg3PzpJQ",
    description: "Test Walkthrough",
    duration: "Duration 5:00",
    id: "w2"
  },
  {
    link: "GNrdg3PzpJQ",
    description: "Integrated Subscores",
    duration: "Duration 2:55",
    id: "w3"
  }
];

export const Video = () => {
  return (
    <SpacedSection id="useful-videos">
      <Container>
        <Title>Useful videos</Title>
        <VideoWrapper>
          {DUMMY_VIDEO_DATA.map((video) => {
            return (
              <Wrapper key={video.id}>
                <VideoContainer>
                  <CustomIframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.link}?autoplay=0&mute=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                  <DescriptionContainer className="descContainer">
                    <Description>{video.description}</Description>
                    <Duration>{video.duration}</Duration>
                  </DescriptionContainer>
                </VideoContainer>
              </Wrapper>
            );
          })}
        </VideoWrapper>
      </Container>
    </SpacedSection>
  );
};

const Title = styled(SectionHeading)(() => ({
  marginBottom: "48px",
  textAlign: "center"
}));

const VideoWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap"
}));
const Wrapper = styled("div")(() => ({
  margin: "15px",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
    transition: "transform 0.5s ease-in-out"
  }
}));

const VideoContainer = styled("div")`
  height: "400px";
`;

const CustomIframe = styled("iframe")(() => ({
  borderTopLeftRadius: "16px",
  borderTopRightRadius: "16px",
  height: "261px"
}));
const DescriptionContainer = styled("div")(() => ({
  height: "87px",
  border: "1px solid #DDDDDD",
  marginTop: "-5px",
  width: "24rem",
  background: "#fff"
}));

const Description = styled("div")(() => ({
  width: "14rem",
  height: "1.8rem",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "1.8rem",
  color: "#3A10E5",
  marginLeft: "20px",
  marginTop: "16px",
  marginRight: "188px",
  marginBottom: "10px"
}));
const Duration = styled("div")(() => ({
  width: "7rem",
  height: "21px",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "1.5remc",
  color: "#212629",
  marginLeft: "20px",
  marginTop: "10px",
  marginRight: "238px",
  marginBottom: "16px"
}));

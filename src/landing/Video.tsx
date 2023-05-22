import { styled } from "@mui/material";
// import ReactPlayer from "react-player";

const videoDatas = [
  {
    link: "pjoEReGhqHQ",
    description: "Test Overview",
    duration: "Duration 1:00"
  },
  {
    link: "pjoEReGhqHQ",
    description: "Test Walkthrough",
    duration: "Duration 5:00"
  },
  {
    link: "pjoEReGhqHQ",
    description: "Integrated Subscores",
    duration: "Duration 2:55"
  }
];

export const Video = () => {
  return (
    <>
      <Title>Useful videos</Title>
      <VideoWrapper>
        {videoDatas.map((video) => {
          return (
            <VideoContainer key={video.link}>
              <CustomIframe
                width="370px"
                height="261px"
                src={`https://www.youtube.com/embed/${video.link}?autoplay=1&mute=1`}
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
          );
        })}
      </VideoWrapper>
    </>
  );
};

const Title = styled("h1")(() => ({
  fontWeight: "700",
  fontSize: "40px",
  lineHeight: "48px",
  color: "#3752B4",
  textAlign: "center",
  marginBottom: "48px"
}));

const VideoWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "95px",
  marginRight: "95px"
}));
const VideoContainer = styled("div")(() => ({
  "&:hover": {
    transform: "scale(1.2)"
  }
}));

const CustomIframe = styled("iframe")(() => ({
  borderTopLeftRadius: "16px",
  borderTopRightRadius: "16px"
}));
const DescriptionContainer = styled("div")(() => ({
  height: "87px",
  border: "1px solid #DDDDDD",
  marginTop: "-5px",
  width: "370px"
}));

const Description = styled("div")(() => ({
  width: "198px",
  height: "24px",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "24px",
  color: "#3A10E5",
  marginLeft: "20px",
  marginTop: "16px",
  marginRight: "188px",
  marginBottom: "10px"
}));
const Duration = styled("div")(() => ({
  width: "109px",
  height: "21px",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "21px",
  color: "#212629",
  marginLeft: "20px",
  marginTop: "10px",
  marginRight: "238px",
  marginBottom: "16px"
}));

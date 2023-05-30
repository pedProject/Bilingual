import { Box, styled } from "@mui/material";

import {
  UserExperienceAdvisorIcon,
  UserExperienceBookImage,
  UserExperienceDocumentIcon,
  UserExperiencePhoneIcon,
  UserExperienceSpeechIcon
} from "../../assets";
import Container from "../../layout/Container";
import { SectionHeading } from "../components/SectionHeading";
import { SpacedSection } from "../components/SpacedSection";

const USER_EXPERIENCE_BENEFITS = [
  {
    text: "Accessible anytime, anywhere",
    Icon: UserExperiencePhoneIcon,
    id: "e1"
  },
  {
    text: "Extensive business content",
    Icon: UserExperienceDocumentIcon,
    id: "e2"
  },
  {
    text: "Leading speech recognition",
    Icon: UserExperienceSpeechIcon,
    id: "e3"
  },
  {
    text: "Unlimited live tutoring",
    Icon: UserExperienceAdvisorIcon,
    id: "e4"
  }
];

export const UserExperience = (): JSX.Element => {
  return (
    <SpacedSection id="user-experience">
      <Container>
        <InnerContainer>
          <Content>
            <SectionHeading>
              Unparalleled user <br /> experience
            </SectionHeading>
            <p>
              The most effective way to perfect a language is by immersing yourself in it. Rosetta
              Stone for Enterprise delivers an effective end-to-end experience, founded on a wealth
              of carefully structured content. Each learner has the opportunity to balance
              independent study with optional online tutoring in a way that fits their schedule and
              language learning goals.
            </p>
            <BenefitsContainer>
              {USER_EXPERIENCE_BENEFITS.map(({ Icon, id, text }) => (
                <div key={id}>
                  <Icon /> <span>{text}</span>
                </div>
              ))}
            </BenefitsContainer>
          </Content>
          <ImageWrapper>
            <img src={UserExperienceBookImage} alt="Learn by Billingual" />
          </ImageWrapper>
        </InnerContainer>
      </Container>
    </SpacedSection>
  );
};

const InnerContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "11.6%",
  flexWrap: "wrap",
  "& > div": {
    flex: "1"
  }
}));

const Content = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "2.125rem",
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  color: "#23212A"
}));

const ImageWrapper = styled("div")(() => ({
  maxHeight: "420px",
  maxWidth: "460.81px",
  "& > img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center"
  }
}));

const BenefitsContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  gridTemplateColumns: "1fr 1fr",
  gap: "3.125rem",
  marginTop: "7px",
  "& > div": {
    display: "flex",
    alignItems: "center",
    columnGap: "1.625rem",
    "& > span": {
      display: "inline-block",
      width: "70%"
    }
  }
}));

import { Container, styled, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import { AddIcon, FacebookIcon, InstaIcon, LogoIcon, YoutubeIcon } from "../../assets/index";

const Footerdata = [
  {
    question: "What is Bilingual? ",
    panel: 1,
    answer:
      "Please take the test in a separate, quiet room. Close all other windows and close all other programs before starting the test.An external USB keyboard or mouse can be used during the test. However, when answering test questions, you should only type on one keyboard and use one mouse. Don't switch between multiple keyboards or mice."
  },
  {
    question: "How can I show what I am typing during the test? ",
    panel: 2,
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    question: "Why should I take the Bilingual English Test? ",
    panel: 3,
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    question: "How can I make sure my microphone picks up my voice clearly?",
    panel: 4,
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    question: "How can I allow a test to record my computer's screen? ",
    panel: 5,
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
];

export const Footer = () => {
  const goToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <StyledFooter>
      <StyledContainer>
        <Header>FAQ:</Header>
        {Footerdata.map((el) => {
          return (
            <StyledAccordion key={el.panel}>
              <StyledAccordionSummary aria-controls="panel1bh-content" expandIcon={<AddIcon />}>
                <Typography>{el.question}</Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <StyledTypographyAccordion>{el.answer}</StyledTypographyAccordion>
              </StyledAccordionDetails>
            </StyledAccordion>
          );
        })}
      </StyledContainer>
      <StyledFooterInline>
        <LogoIcon
          style={{
            cursor: "pointer"
          }}
          onClick={goToTopHandler}
        />
        <IconContainer>
          <FacebookIcon />
          <YoutubeIcon />
          <InstaIcon />
        </IconContainer>
      </StyledFooterInline>
      <Text>© Copyright PeakSoft. All Rights Reserved</Text>
    </StyledFooter>
  );
};
const StyledFooter = styled("div")`
  background-color: #262626;
`;
const StyledFooterInline = styled("div")`
  height: 140px;
  display: grid;
  grid-template-columns: 37% 8%;
  gap: 30%;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

const Text = styled("h3")`
  font-family: Poppins;
  font-size: 0.875rem;
  color: #98a2b3;
  text-align: center;
`;

const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  background: "#262626",
  borderTop: "1px solid #4A4A4A",

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(45deg)"
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: "-16px",
    marginTop: "20px",
    color: "#ffffff",
    height: "40px",
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "1rem",
    lineHeight: "40px"
  }
}));
const StyledAccordion = styled(Accordion)(() => ({
  backgroundColor: "#262626",
  borderBottom: "1px solid #4A4A4A",

  "&:not(:last-child)": {
    borderBottom: 0
  }
}));

const StyledAccordionDetails = styled(AccordionDetails)(() => ({
  "&.MuiAccordionDetails-root": {
    paddingLeft: "29px"
  }
}));

const Header = styled("h1")`
  color: #ffffff;
  font-family: "Gilroy";
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const StyledContainer = styled(Container)`
  padding: 120px 0;
  background-color: #262626;
`;

const StyledTypographyAccordion = styled(Typography)`
  width: 100%;
  font-family: "Poppins";
  font-weight: 300;
  font-size: 1rem;
  line-height: 150%;
  color: #ffffff;
  border-radius: none;
  margin-left: -16px;
`;

const IconContainer = styled("div")`
  display: flex;
  gap: 16px;
`;

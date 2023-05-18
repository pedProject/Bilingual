import * as React from "react";

import { Container, styled, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import { Logo, AddIcon, FacebookIcon, InstaIcon, YoutubeIcon } from "../../assets/index";

import type { StyledComponent } from "@emotion/styled";
import type { AccordionProps } from "@mui/material/Accordion";

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
export const Accordions = () => {
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
        <Logo />
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
const StyledAccordion: StyledComponent<AccordionProps & { children?: React.ReactNode }> = styled(
  (props: AccordionProps & { children?: React.ReactNode }) => <Accordion {...props} />
)(() => ({
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

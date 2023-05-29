import { Typography, styled } from "@mui/material";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export const SectionHeading = ({
  children = "Название секции"
}: SectionHeadingProps): JSX.Element => {
  return <StyledTypograghy variant="h2">{children}</StyledTypograghy>;
};

const StyledTypograghy = styled(Typography)(() => ({
  fontFamily: "Gilroy",
  fontWeight: 700,
  fontSize: "2.5rem",
  lineHeight: "3rem",
  color: "#3752B4"
}));

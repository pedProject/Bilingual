import { styled } from "@mui/material";

type SpacedSectionProps = {
  id: string;
  children: React.ReactNode;
};

export const SpacedSection = ({ id, children, ...rest }: SpacedSectionProps): JSX.Element => {
  return (
    <StyledSection id={id} {...rest}>
      {children}
    </StyledSection>
  );
};

const StyledSection = styled("section")(() => ({
  marginBottom: "120px"
}));

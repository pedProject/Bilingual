import { styled } from "@mui/material";

import { FirstTeamMember } from "../../assets";
import Container from "../../layout/Container";
import { SectionHeading } from "../components/SectionHeading";
import { SpacedSection } from "../components/SpacedSection";

const TEAM_MEMBERS = [
  {
    id: "r1",
    fullName: "Alice Archie",
    position: "Founder Bilingual",
    borderRadius: ["left-bottom"],
    image: FirstTeamMember
  },
  {
    id: "r2",
    fullName: "Mia George",
    position: "Marketer",
    borderRadius: ["left-top", "right-bottom"],
    image: FirstTeamMember
  },
  {
    id: "r3",
    fullName: "Oscar Ryan",
    position: "Developer",
    borderRadius: ["right-bottom"],
    image: FirstTeamMember
  },
  {
    id: "r4",
    fullName: "Jack William",
    position: "UX/UI Designer",
    borderRadius: ["left-top"],
    image: FirstTeamMember
  },
  {
    id: "r5",
    fullName: "Rose Thomas",
    position: "Chief Editor",
    borderRadius: ["left-top", "right-bottom"],
    image: FirstTeamMember
  },
  {
    id: "r6",
    fullName: "Albert Stanley",
    position: "Chief Editor",
    borderRadius: ["right-top"],
    image: FirstTeamMember
  }
];

const createBorderRadiusClassName = (array: string[] = []): string => {
  return array.join(" ");
};

export const Team = (): JSX.Element => {
  return (
    <SpacedSection id="team">
      <Container>
        <StyledHeading>Our Team</StyledHeading>
        <MembersContainer>
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className={`member-card ${createBorderRadiusClassName(member.borderRadius)}`}
            >
              <img src={member.image} alt={member.fullName} />
              <h3>{member.fullName}</h3>
              <span>{member.position}</span>
            </div>
          ))}
        </MembersContainer>
      </Container>
    </SpacedSection>
  );
};

const StyledHeading = styled(SectionHeading)(() => ({
  textAlign: "center",
  marginBottom: "2.875rem"
}));

const MembersContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignContent: "flex-start",
  gap: "1rem",
  "& > .member-card": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Poppins",
    color: "#020202"
  },
  "& > .member-card > h3": {
    fontWeight: 600,
    fontSize: "1rem",
    color: "#3A10E5",
    marginTop: "0.875rem",
    marginBottom: "2px"
  },
  "& > .member-card > span": {
    fontWeight: 400,
    fontSize: "0.875rem"
  },
  "& > .member-card > img": {
    width: "180px",
    height: "180px",
    objectFit: "cover",
    objectPosition: "50% 10%"
  },
  "& > .member-card.left-bottom > img": {
    borderBottomLeftRadius: "40px"
  },
  "& > .member-card.left-top > img": {
    borderTopLeftRadius: "40px"
  },
  "& > .member-card.right-top > img": {
    borderTopRightRadius: "40px"
  },
  "& > .member-card.right-bottom > img": {
    borderBottomRightRadius: "40px"
  }
}));

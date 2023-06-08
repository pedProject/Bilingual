import { styled } from "@mui/material";

import { LoaderItem } from "../../../../components/UI/loader/Loader";
export const LoaderTest = () => {
  return (
    <Container>
      <MainDescription>Checking your device...</MainDescription>
      <Description>
        this process is automatic, and may take a few second. please wait...
      </Description>
      <LoaderWrapper>
        <LoaderItem />
      </LoaderWrapper>
    </Container>
  );
};

const Container = styled("div")`
  width: 56.2rem;
  height: 549px;
  background: #fff;
  border-radius: 10px;
  padding-top: 40px;
`;
const MainDescription = styled("h2")`
  width: 19rem;
  height: 30.55px;
  font-weight: 400;
  font-size: 28px;
  line-height: 112%;
  color: #4c4859;
  margin: 0 auto;
  margin-bottom: 32px;
`;

const Description = styled("h3")`
  width: 38rem;
  height: 23px;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-transform: capitalize;
  color: #4c4859;
  margin: 0 auto;
`;

const LoaderWrapper = styled(LoaderItem)`
  margin: 150px 402px 211px 420px;
`;

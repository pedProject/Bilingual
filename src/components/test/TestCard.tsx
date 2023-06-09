import { styled } from "@mui/material";

import { TestCardIcon } from "../../assets";
import { Button } from "../UI/Button/Button";

type Id = string | number;
type Props = {
  time: string | number;
  title: string;
  description: string;
  id: Id;
  onTry: (id: Id) => void;
};
export const TestCard = ({ time, title, description, onTry, id }: Props) => {
  return (
    <TestContainer>
      <CustomTestCartIcon />
      <TestCardInfo>
        <Duration>{time} minutes</Duration>
        <Title>{title} </Title>
        <Description>{description}</Description>
      </TestCardInfo>
      <ButtonContainer>
        <Button variant="outlined" color="inherit" onClick={() => onTry(id)}>
          TRY TEST
        </Button>
      </ButtonContainer>
    </TestContainer>
  );
};

const CustomTestCartIcon = styled(TestCardIcon)`
  margin-left: 46px;
`;

const TestContainer = styled("div")`
  width: 53.8rem;
  height: 250px;
  background: #ffffff;
  box-shadow: 0px 4px 39px -5px rgba(196, 196, 196, 0.6);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TestCardInfo = styled("div")`
  margin-left: -170px;
`;
const Duration = styled("h6")`
  width: 5.1rem;
  height: 18px;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  color: #3a10e5;
  margin-bottom: 15px;
`;
const Title = styled("h5")`
  font-weight: 400;
  font-size: 26px;
  line-height: 29px;
  text-transform: capitalize;
  color: #4c4859;
  margin-bottom: 21px;
`;
const Description = styled("p")`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #4c4859;
`;

const ButtonContainer = styled("div")`
  margin-right: 70px;
  margin-top: 130px;
  margin-bottom: 70px;
`;

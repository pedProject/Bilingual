import { styled } from "@mui/material";

import { VoiceIcon } from "../../../assets";

export default function SelectWordItem() {
  return (
    <Main key={1}>
      <Content>
        <span>{1}</span>
        <VoiceIcon />
        <span>WORD {1}</span>
      </Content>
      <Actions>
        {/* <Checkbox
          value={false}
          onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.checked)}
        /> */}
        icon
      </Actions>
    </Main>
  );
}

const Main = styled("div")`
  width: 261px;
  height: 46px;
  display: flex;
  align-items: center;
  border: 1.53px solid #d4d0d0;
  border-radius: 8px;
`;

const Content = styled("div")`
  display: flex;
  align-items: center;
  span {
    :nth-child(1) {
      margin-left: 16px;
    }
    :nth-child(2) {
      margin: 0 12px 0 15px;
    }
  }
`;
const Actions = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 14px 0 auto;
`;

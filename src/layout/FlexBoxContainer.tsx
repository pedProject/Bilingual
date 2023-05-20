import React from "react";

import { styled } from "@mui/material";

import type { ReactNode, CSSProperties, MouseEvent } from "react";

type FlexBoxContainerProps = {
  children: ReactNode;
  width?: string;
  height?: string;
  JK?: CSSProperties["justifyContent"];
  AI?: CSSProperties["alignItems"];
  FD?: CSSProperties["flexDirection"];
  FW?: CSSProperties["flexWrap"];
  gap?: string;
  border?: CSSProperties["border"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
};

const FlexBoxContainer: React.FC<FlexBoxContainerProps> = ({
  children,
  width,
  height,
  JK,
  AI,
  FD,
  FW,
  gap,
  border,
  margin,
  padding,
  onClick
}) => {
  return (
    <StyledFlexBoxContainer
      onClick={onClick}
      AI={AI}
      JK={JK}
      FD={FD}
      FW={FW}
      height={height}
      width={width}
      gap={gap}
      border={border}
      margin={margin}
      padding={padding}
    >
      {children}
    </StyledFlexBoxContainer>
  );
};

export default React.memo(FlexBoxContainer);

type StyledFlexBoxContainerProps = {
  height?: string;
  width?: string;
  JK?: CSSProperties["justifyContent"];
  AI?: CSSProperties["alignItems"];
  FD?: CSSProperties["flexDirection"];
  FW?: CSSProperties["flexWrap"];
  gap?: CSSProperties["gap"];
  border?: CSSProperties["border"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
};

const StyledFlexBoxContainer = styled("div")<StyledFlexBoxContainerProps>`
  display: flex;
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.JK};
  flex-direction: ${(props) => props.FD};
  flex-wrap: ${(props) => props.FW};
  align-items: ${(props) => props.AI};
  gap: ${(props) => props.gap};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

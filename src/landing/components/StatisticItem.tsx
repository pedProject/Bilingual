import { useCallback } from "react";

import { Box, styled } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { StatisticsCardBorderImage } from "../../assets";

import type { StatisticItem as StatisticItemProps } from "../../types/statistics";

export const StatisticItem = ({
  backgroundImage,
  renderedCount,
  initialCount,
  description,
  prefix,
  prefixPosition
}: StatisticItemProps): JSX.Element => {
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  const renderCountWithAnimation = useCallback(() => {
    const renderedList = [
      <CountUp key={"e1"} start={inView ? initialCount : 0} end={renderedCount} duration={2} />
    ];
    if (prefixPosition === "left") {
      renderedList.unshift(
        <span key={"prefix-left"} className="prefix left">
          {prefix}
        </span>
      );
      return renderedList;
    }
    renderedList.push(
      <span key={"prefix-right"} className="prefix">
        {prefix}
      </span>
    );
    return renderedList;
  }, [inView, initialCount, renderedCount, prefix, prefixPosition]);

  return (
    <Container ref={ref}>
      <InnerContainer>
        <CardWrapper>
          <img className="statistic_item-background" src={backgroundImage} alt={description} />
          <Card>
            <div className="statistic_item-count">{renderCountWithAnimation()}</div>
            <img className="statistic_item-background_border" src={StatisticsCardBorderImage} />
          </Card>
        </CardWrapper>
        <div className="statistic_item-description">{description}</div>
      </InnerContainer>
    </Container>
  );
};

const Container = styled(Box)(() => ({
  flex: "1 0  335px",
  display: "flex",
  "&:nth-of-type(2)": {
    justifyContent: "center"
  },
  "&:last-of-type": {
    justifyContent: "end"
  },
  "& .statistic_item-background": {
    maxWidth: "300.96px",
    maxHeight: "176px"
  }
}));

const InnerContainer = styled("div")(() => ({
  position: "relative",
  maxWidth: "300.96px",
  "& .statistic_item-description": {
    textAlign: "center",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    color: "#23212A",
    marginTop: "1.5rem"
  }
}));

const CardWrapper = styled("div")(() => ({
  position: "relative"
}));

const Card = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "195.36px",
  maxHeight: "88px",
  border: "1.5px solid #3785D7",
  background: "rgba(255, 255, 255, 0.94)",
  borderRadius: "8px",
  display: "grid",
  placeItems: "center",
  width: "100%",
  height: "100%",
  "& .statistic_item-background_border": {
    position: "absolute",
    top: "-6.4px",
    left: "-6.4px",
    objectFit: "contain"
  },
  "& .statistic_item-count": {
    fontFamily: "'M PLUS Rounded 1c', sans-serif",
    fontSize: "2.5rem",
    color: "#4C4C4C",
    display: "flex",
    alignItems: "center",
    "& > .prefix": {
      position: "relative",
      top: "-3px",
      "&:not(.left)": {
        left: "3px"
      }
    },
    "& > .prefix.left": {
      right: "3px"
    }
  }
}));

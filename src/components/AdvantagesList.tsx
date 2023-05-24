import type { FC } from "react";

import { styled } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

import { RoadMapIcon } from "../assets";
import { ADVANTAGES_DATA } from "../utils/constants";

interface IAdvantageListProps {
  imageSize?: string;
  marginBottom?: string;
  elementGap?: string;
}

const blockAnimate = {
  offscreen: { x: -100 },
  onscreen: {
    x: 0,
    transition: { type: "spring", duration: 2 }
  }
};

const imageAnimate = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
};

export const AdvantagesList: FC<IAdvantageListProps> = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -95]);

  return (
    <FeaturesBlock>
      <RoadMapImage src={RoadMapIcon} alt="road map icon" />

      {ADVANTAGES_DATA.map((element) => (
        <FeatureItem
          style={{ y }}
          imageSize={element.imageSize}
          marginBottom={element.marginBottom}
          elementGap={element.gap}
          key={element.id}
          className={element.id % 2 === 0 ? "right" : ""}
        >
          <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false }}
            variants={blockAnimate}
          >
            <p>{element.title}</p>
            <span>{element.description}</span>
          </motion.section>
          <motion.img
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={imageAnimate}
            src={element.image}
          />
        </FeatureItem>
      ))}
      {/* тут будет изогнутая кнопка, как Бекболсун закончит поставлю */}
    </FeaturesBlock>
  );
};

const FeaturesBlock = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const RoadMapImage = styled(motion.img)`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
  height: 105%;
`;

const FeatureItem = styled(motion.div)<IAdvantageListProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${(props) => props.marginBottom};
  gap: ${(props) => props.elementGap};

  position: relative;
  z-index: 2;

  p {
    font-weight: 600;
    font-size: 24px;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  img {
    width: ${(props) => props.imageSize};
  }

  section {
    width: 494px;
  }
  &.right {
    flex-direction: row-reverse;
  }
`;

import type { FC } from "react";

import { styled } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

import { RoadMapIcon } from "../../assets";

interface AdvantageStyleProps {
  imagesize: string;
  marginbottom: string;
  elementgap: string;
}

interface Advantage {
  id: number;
  title: string;
  description: string;
  image: string;
  imageSize: string;
  marginBottom: string;
  gap: string;
}

interface AdvantagesProps {
  advantages: Advantage[];
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

export const AdvantagesList: FC<AdvantagesProps> = ({ advantages }): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -95]);

  return (
    <FeaturesBlock>
      <RoadMapImage src={RoadMapIcon} alt="road map icon" />

      {advantages.map((element) => (
        <FeatureItem
          style={{ y }}
          imagesize={element.imageSize}
          marginbottom={element.marginBottom}
          elementgap={element.gap}
          key={element.id}
          className={element.id % 2 === 0 ? "right" : ""}
        >
          <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
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
  max-width: 100%;
  max-height: 100%;
`;

const FeatureItem = styled(motion.div)<AdvantageStyleProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${(props) => props.marginbottom};
  gap: ${(props) => props.elementgap};

  position: relative;
  z-index: 2;

  p {
    font-weight: 600;
    font-size: 1.5rem;
  }
  span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  img {
    width: ${(props) => props.imagesize};
  }

  section {
    width: 40%;
  }
  &.right {
    flex-direction: row-reverse;
  }
`;

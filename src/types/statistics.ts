type PrefixPositionType = "right" | "left";

export type StatisticItem = {
  id: string;
  backgroundImage: string;
  renderedCount: number;
  initialCount: number;
  description: string;
  prefix: string;
  prefixPosition: PrefixPositionType;
};

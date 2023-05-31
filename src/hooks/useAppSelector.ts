import { useSelector } from "react-redux";

import type { RootState } from "../redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

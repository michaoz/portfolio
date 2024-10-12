import { MutableRefObject } from "react";

export type PropTypeHeaderMenu = {
    visibleHeaderMenu: boolean;
    headerMenuRefs: MutableRefObject<HTMLDivElement | null>[];
}
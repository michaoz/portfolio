import { MutableRefObject } from "react";

export type PropTypeMobileHeaderMenu = {
    visibleMobileHeaderMenu: boolean;
    headerMenuRefs: MutableRefObject<HTMLDivElement | null>[];
}
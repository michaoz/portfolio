import { MutableRefObject } from "react";

export type PropTypeContentMain = {
    setVisibleMobileHeaderMenu: (visibleMobileHeaderMenu: boolean) => void;
    setHeaderMenuRefs: (headerMenuRefs: MutableRefObject<HTMLDivElement | null>[]) => void;
}
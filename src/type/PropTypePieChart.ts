import { Color } from "chart.js/dist/types/color";
import { TypeSkillsData } from "./TypeSkillData";

export type PropTypePieChart = {
    data: {
        id: number;
        skill: string;
        level: number;
    }[];
    backgroundColor: string[];
    borderColor: string;
    borderWidth: number;
}
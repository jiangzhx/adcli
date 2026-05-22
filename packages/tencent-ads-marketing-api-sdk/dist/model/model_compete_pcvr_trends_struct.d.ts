import type { PointStruct } from "../model/index";
export interface CompetePcvrTrendsStruct {
    score?: number;
    self_avg?: PointStruct[];
    self_chose_avg?: PointStruct[];
    winner_chose_avg?: PointStruct[];
    conclusion?: string;
}

import type { PointStruct } from "../models";
export interface CtrLevelStruct {
    value?: string;
    score?: string;
    rank_overall?: string;
    rank_first_category?: string;
    rank_second_category?: string;
    self_trends?: PointStruct[];
    benchmark_trends?: PointStruct[];
}

import type { PointStruct } from "../model/index";
export interface EffectivePlayRateStruct {
    value?: string;
    score?: string;
    rank_overall?: string;
    rank_first_category?: string;
    rank_second_category?: string;
    self_trends?: PointStruct[];
    benchmark_trends?: PointStruct[];
}

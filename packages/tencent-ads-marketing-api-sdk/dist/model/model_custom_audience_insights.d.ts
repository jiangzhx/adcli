import type { DimensionType, RangeDistribution } from "../model/index";
export interface CustomAudienceInsights {
    dimension_type?: DimensionType;
    match_rate?: number;
    distribution?: RangeDistribution[];
}

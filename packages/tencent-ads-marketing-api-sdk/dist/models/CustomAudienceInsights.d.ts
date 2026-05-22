import type { DimensionType, RangeDistribution } from "../models";
export interface CustomAudienceInsights {
    dimension_type?: DimensionType;
    match_rate?: number;
    distribution?: RangeDistribution[];
}

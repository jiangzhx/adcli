// Generated from tencentad/marketing-api-go-sdk pkg/model/model_custom_audience_insights.go
// Do not edit manually.

import type { DimensionType, RangeDistribution } from "../model/index";

export interface CustomAudienceInsights {
  dimension_type?: DimensionType;
  match_rate?: number;
  distribution?: RangeDistribution[];
}


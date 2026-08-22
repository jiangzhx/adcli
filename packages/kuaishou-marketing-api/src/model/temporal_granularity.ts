// Generated from github.com/bububa/kwai-marketing-api/model/temporal_granularity.go
// Do not edit manually.

export const TemporalGranularityType = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
} as const;

export type TemporalGranularityType = (typeof TemporalGranularityType)[keyof typeof TemporalGranularityType];

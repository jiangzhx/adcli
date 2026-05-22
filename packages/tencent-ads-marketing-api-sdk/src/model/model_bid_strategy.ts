// Generated from tencentad/marketing-api-go-sdk pkg/model/model_bid_strategy.go
// Do not edit manually.

export const BidStrategy = {
  UNSUPPORTED: "BID_STRATEGY_UNSUPPORTED",
  AVERAGE_COST: "BID_STRATEGY_AVERAGE_COST",
  TARGET_COST: "BID_STRATEGY_TARGET_COST",
  PRIORITY_LOW_COST: "BID_STRATEGY_PRIORITY_LOW_COST",
  PRIORITY_CAP_COST: "BID_STRATEGY_PRIORITY_CAP_COST",
} as const;

export type BidStrategy = typeof BidStrategy[keyof typeof BidStrategy];


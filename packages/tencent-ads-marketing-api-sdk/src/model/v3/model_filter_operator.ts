// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_filter_operator.go
// Do not edit manually.

export const FilterOperator = {
  EQUALS: "EQUALS",
  CONTAINS: "CONTAINS",
  LESS_EQUALS: "LESS_EQUALS",
  LESS: "LESS",
  GREATER_EQUALS: "GREATER_EQUALS",
  GREATER: "GREATER",
  IN: "IN",
  NOT_EQUALS: "NOT_EQUALS",
  NOT_IN: "NOT_IN",
} as const;

export type FilterOperator = typeof FilterOperator[keyof typeof FilterOperator];


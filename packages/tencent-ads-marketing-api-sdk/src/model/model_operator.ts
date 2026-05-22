// Generated from tencentad/marketing-api-go-sdk pkg/model/model_operator.go
// Do not edit manually.

export const Operator = {
  LT: "LT",
  GT: "GT",
  EQ: "EQ",
  NE: "NE",
  CONTAIN: "CONTAIN",
  NOT_CONTAIN: "NOT_CONTAIN",
} as const;

export type Operator = typeof Operator[keyof typeof Operator];


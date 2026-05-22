// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_product_set_spec_field_value_operator.go
// Do not edit manually.

export const ProductSetSpecFieldValueOperator = {
  EQUALS: "EQUALS",
  IN: "IN",
  LESS_EQUALS: "LESS_EQUALS",
  LESS: "LESS",
  GREATER_EQUALS: "GREATER_EQUALS",
  GREATER: "GREATER",
  RANGE: "RANGE",
} as const;

export type ProductSetSpecFieldValueOperator = typeof ProductSetSpecFieldValueOperator[keyof typeof ProductSetSpecFieldValueOperator];


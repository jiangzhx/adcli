// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wildcard_type.go
// Do not edit manually.

export const WildcardType = {
  UNKNOWN: "UNKNOWN",
  LANDING_PAGE: "LANDING_PAGE",
  PRODUCT_INDEX: "PRODUCT_INDEX",
  PRODUCT_RECOMMEND: "PRODUCT_RECOMMEND",
  USER_IDENTIFIER: "USER_IDENTIFIER",
  DEEP_LINK: "DEEP_LINK",
  UNIVERSAL_LINK: "UNIVERSAL_LINK",
  QUERY_WORD: "QUERY_WORD",
} as const;

export type WildcardType = typeof WildcardType[keyof typeof WildcardType];


// Generated from tencentad/marketing-api-go-sdk pkg/model/model_dynamic_ad_template_ownership_type.go
// Do not edit manually.

export const DynamicAdTemplateOwnershipType = {
  PRIVATE_TEMPLATE: "PRIVATE_TEMPLATE",
  PUBLIC_TEMPLATE: "PUBLIC_TEMPLATE",
  SELF_OWNED_TEMPLATE: "SELF_OWNED_TEMPLATE",
  GRANTED_TEMPLATE: "GRANTED_TEMPLATE",
  ALL: "ALL",
  SELF_OWNED: "SELF_OWNED",
  GRANTED: "GRANTED",
  COMMON: "COMMON",
  PRODUCT_CATALOG_OWNED: "PRODUCT_CATALOG_OWNED",
} as const;

export type DynamicAdTemplateOwnershipType = typeof DynamicAdTemplateOwnershipType[keyof typeof DynamicAdTemplateOwnershipType];


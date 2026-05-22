// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_catalog_status.go
// Do not edit manually.

export const CatalogStatus = {
  PREPARE: "PRODUCT_CATALOG_STATUS_PREPARE",
  NORMAL: "PRODUCT_CATALOG_STATUS_NORMAL",
  SUSPEND: "PRODUCT_CATALOG_STATUS_SUSPEND",
  DELETED: "PRODUCT_CATALOG_STATUS_DELETED",
} as const;

export type CatalogStatus = typeof CatalogStatus[keyof typeof CatalogStatus];


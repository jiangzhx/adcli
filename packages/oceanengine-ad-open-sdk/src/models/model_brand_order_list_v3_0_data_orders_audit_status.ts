// 由 oceanengine/ad_open_sdk_go models/model_brand_order_list_v3_0_data_orders_audit_status.go 生成
// 不要手动编辑。

export const BrandOrderListV30DataOrdersAuditStatus = {
  AUDITING: "AUDITING",
  NO_CREATIVE: "NO_CREATIVE",
  PARTIALLY_PASSED: "PARTIALLY_PASSED",
  PASSED: "PASSED",
  REJECTED: "REJECTED",
  UNKNOWN: "UNKNOWN",
  WAIT_AUDIT: "WAIT_AUDIT",
} as const;

export type BrandOrderListV30DataOrdersAuditStatus = typeof BrandOrderListV30DataOrdersAuditStatus[keyof typeof BrandOrderListV30DataOrdersAuditStatus];


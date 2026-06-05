// 由 oceanengine/ad_open_sdk_go models/model_brand_order_list_v3_0_filter_audit_status.go 生成
// 不要手动编辑。

export const BrandOrderListV30FilterAuditStatus = {
  AUDITING: "AUDITING",
  NO_CREATIVE: "NO_CREATIVE",
  PARTIALLY_PASSED: "PARTIALLY_PASSED",
  PASSED: "PASSED",
  REJECTED: "REJECTED",
  UNKNOWN: "UNKNOWN",
  WAIT_AUDIT: "WAIT_AUDIT",
} as const;

export type BrandOrderListV30FilterAuditStatus = typeof BrandOrderListV30FilterAuditStatus[keyof typeof BrandOrderListV30FilterAuditStatus];


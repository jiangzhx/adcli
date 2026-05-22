// Generated from oceanengine/ad_open_sdk_go models/model_clue_coupon_update_v2_status.go
// Do not edit manually.

export const ClueCouponUpdateV2Status = {
  OFFLINE: "OFFLINE",
  AUDIT_DOING: "AUDIT_DOING",
  NORMAL: "NORMAL",
  PAUSE: "PAUSE",
  DELETED: "DELETED",
  UNAUDITED: "UNAUDITED",
  AUDIT_FAIL: "AUDIT_FAIL",
} as const;

export type ClueCouponUpdateV2Status = typeof ClueCouponUpdateV2Status[keyof typeof ClueCouponUpdateV2Status];


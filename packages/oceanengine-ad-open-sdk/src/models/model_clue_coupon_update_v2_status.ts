// 由 oceanengine/ad_open_sdk_go models/model_clue_coupon_update_v2_status.go 生成
// 不要手动编辑。

export const ClueCouponUpdateV2Status = {
  AUDIT_DOING: "AUDIT_DOING",
  AUDIT_FAIL: "AUDIT_FAIL",
  OFFLINE: "OFFLINE",
  UNAUDITED: "UNAUDITED",
  NORMAL: "NORMAL",
  PAUSE: "PAUSE",
  DELETED: "DELETED",
} as const;

export type ClueCouponUpdateV2Status = typeof ClueCouponUpdateV2Status[keyof typeof ClueCouponUpdateV2Status];


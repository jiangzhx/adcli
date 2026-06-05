// 由 oceanengine/ad_open_sdk_go models/model_clue_coupon_code_get_v2_status.go 生成
// 不要手动编辑。

export const ClueCouponCodeGetV2Status = {
  ABANDONED: "ABANDONED",
  USED: "USED",
  EXPIRED: "EXPIRED",
  VALID: "VALID",
  INVALID: "INVALID",
} as const;

export type ClueCouponCodeGetV2Status = typeof ClueCouponCodeGetV2Status[keyof typeof ClueCouponCodeGetV2Status];


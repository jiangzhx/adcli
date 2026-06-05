// 由 oceanengine/ad_open_sdk_go models/model_clue_coupon_get_v2_data_list_coupon_status.go 生成
// 不要手动编辑。

export const ClueCouponGetV2DataListCouponStatus = {
  AUDIT_DOING: "AUDIT_DOING",
  AUDIT_FAIL: "AUDIT_FAIL",
  OFFLINE: "OFFLINE",
  UNAUDITED: "UNAUDITED",
  NORMAL: "NORMAL",
  PAUSE: "PAUSE",
  DELETED: "DELETED",
} as const;

export type ClueCouponGetV2DataListCouponStatus = typeof ClueCouponGetV2DataListCouponStatus[keyof typeof ClueCouponGetV2DataListCouponStatus];


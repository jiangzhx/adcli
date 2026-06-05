// 由 oceanengine/ad_open_sdk_go models/model_clue_coupon_detail_v2_data_coupon_status.go 生成
// 不要手动编辑。

export const ClueCouponDetailV2DataCouponStatus = {
  AUDIT_DOING: "AUDIT_DOING",
  AUDIT_FAIL: "AUDIT_FAIL",
  OFFLINE: "OFFLINE",
  UNAUDITED: "UNAUDITED",
  NORMAL: "NORMAL",
  PAUSE: "PAUSE",
  DELETED: "DELETED",
} as const;

export type ClueCouponDetailV2DataCouponStatus = typeof ClueCouponDetailV2DataCouponStatus[keyof typeof ClueCouponDetailV2DataCouponStatus];


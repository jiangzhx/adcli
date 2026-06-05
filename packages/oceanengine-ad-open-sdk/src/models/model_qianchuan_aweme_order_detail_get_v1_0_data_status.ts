// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_aweme_order_detail_get_v1_0_data_status.go 生成
// 不要手动编辑。

export const QianchuanAwemeOrderDetailGetV10DataStatus = {
  AUDIT: "AUDIT",
  BOOK: "BOOK",
  CREATING: "CREATING",
  DELIVERY_OK: "DELIVERY_OK",
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  FROZEN: "FROZEN",
  OFFLINE_AUDIT: "OFFLINE_AUDIT",
  OVER: "OVER",
  TIMEOUT: "TIMEOUT",
  UNPAID: "UNPAID",
  UNPAIDCANCEL: "UNPAIDCANCEL",
} as const;

export type QianchuanAwemeOrderDetailGetV10DataStatus = typeof QianchuanAwemeOrderDetailGetV10DataStatus[keyof typeof QianchuanAwemeOrderDetailGetV10DataStatus];


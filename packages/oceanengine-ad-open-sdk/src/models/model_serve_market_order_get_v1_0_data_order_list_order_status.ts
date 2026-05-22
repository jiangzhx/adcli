// Generated from oceanengine/ad_open_sdk_go models/model_serve_market_order_get_v1_0_data_order_list_order_status.go
// Do not edit manually.

export const ServeMarketOrderGetV10DataOrderListOrderStatus = {
  UNPAID: "UNPAID",
  CANCELED: "CANCELED",
  OVERTIME_CANCELED: "OVERTIME_CANCELED",
  SERVING: "SERVING",
  REFUND_APPLY: "REFUND_APPLY",
  REFUND_REJECT: "REFUND_REJECT",
  REFUND_APPROVED: "REFUND_APPROVED",
  REFUND_SUCCESS: "REFUND_SUCCESS",
  DELIVERED: "DELIVERED",
  FINISHED: "FINISHED",
  OVERTIME_FINISHED: "OVERTIME_FINISHED",
  DELIVERY_REJECT: "DELIVERY_REJECT",
} as const;

export type ServeMarketOrderGetV10DataOrderListOrderStatus = typeof ServeMarketOrderGetV10DataOrderListOrderStatus[keyof typeof ServeMarketOrderGetV10DataOrderListOrderStatus];


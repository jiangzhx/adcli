// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

export const BrandOrderListV30FilterOrderStatus = {
  COMPLETE: "COMPLETE",
  DELIVERING: "DELIVERING",
  EDITING: "EDITING",
  IS_DEL: "IS_DEL",
  NEW_ORDER: "NEW_ORDER",
  NOT_DELIVER: "NOT_DELIVER",
  PAUSE: "PAUSE",
  PRODUCT_NOT_AVAILABLE: "PRODUCT_NOT_AVAILABLE",
  RESUBMITTING: "RESUBMITTING",
  RESUBMIT_FAILED: "RESUBMIT_FAILED",
  SUBMITTING: "SUBMITTING",
  SUBMIT_FAILED: "SUBMIT_FAILED",
  SUBMIT_SUCCESS: "SUBMIT_SUCCESS",
  UNKNOWN: "UNKNOWN",
  WAIT_DELETING: "WAIT_DELETING",
} as const;

export type BrandOrderListV30FilterOrderStatus = typeof BrandOrderListV30FilterOrderStatus[keyof typeof BrandOrderListV30FilterOrderStatus];


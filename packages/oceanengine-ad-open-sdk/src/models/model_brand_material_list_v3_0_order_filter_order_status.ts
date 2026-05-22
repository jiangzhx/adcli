// Generated from oceanengine/ad_open_sdk_go models/model_brand_material_list_v3_0_order_filter_order_status.go
// Do not edit manually.

export const BrandMaterialListV30OrderFilterOrderStatus = {
  COMPLETE: "COMPLETE",
  DELIVERING: "DELIVERING",
  EDITING: "EDITING",
  IS_DEL: "IS_DEL",
  NEW_ORDER: "NEW_ORDER",
  NOT_DELIVER: "NOT_DELIVER",
  PAUSE: "PAUSE",
  RESUBMITTING: "RESUBMITTING",
  RESUBMIT_FAILED: "RESUBMIT_FAILED",
  SUBMITTING: "SUBMITTING",
  SUBMIT_FAILED: "SUBMIT_FAILED",
  WAIT_DELETING: "WAIT_DELETING",
} as const;

export type BrandMaterialListV30OrderFilterOrderStatus = typeof BrandMaterialListV30OrderFilterOrderStatus[keyof typeof BrandMaterialListV30OrderFilterOrderStatus];


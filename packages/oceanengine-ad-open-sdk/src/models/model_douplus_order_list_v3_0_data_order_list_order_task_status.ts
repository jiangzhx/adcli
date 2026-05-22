// Generated from oceanengine/ad_open_sdk_go models/model_douplus_order_list_v3_0_data_order_list_order_task_status.go
// Do not edit manually.

export const DouplusOrderListV30DataOrderListOrderTaskStatus = {
  AUDITING: "AUDITING",
  AUDIT_PAUSE: "AUDIT_PAUSE",
  DELIVERIED: "DELIVERIED",
  DELIVERING: "DELIVERING",
  OFFLINE_AUDIT: "OFFLINE_AUDIT",
  TIME_NO_REACH: "TIME_NO_REACH",
  UNDELIVERIED: "UNDELIVERIED",
  UNPAID: "UNPAID",
  WAIT_TO_START: "WAIT_TO_START",
} as const;

export type DouplusOrderListV30DataOrderListOrderTaskStatus = typeof DouplusOrderListV30DataOrderListOrderTaskStatus[keyof typeof DouplusOrderListV30DataOrderListOrderTaskStatus];


// Generated from oceanengine/ad_open_sdk_go models/model_star_vas_get_boost_group_list_v2_status.go
// Do not edit manually.

export const StarVasGetBoostGroupListV2Status = {
  AUDITING: "AUDITING",
  CANCEL: "CANCEL",
  CLOSE: "CLOSE",
  DOING: "DOING",
  FAIL_CREATE: "FAIL_CREATE",
  FINISH: "FINISH",
  PREPARE: "PREPARE",
  REJECT_AUDIT: "REJECT_AUDIT",
  SETTLE: "SETTLE",
  WAIT_CANCEL: "WAIT_CANCEL",
} as const;

export type StarVasGetBoostGroupListV2Status = typeof StarVasGetBoostGroupListV2Status[keyof typeof StarVasGetBoostGroupListV2Status];


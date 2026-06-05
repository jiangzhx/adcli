// 由 oceanengine/ad_open_sdk_go models/model_star_vas_get_boost_group_list_v2_data_boost_group_infos_status.go 生成
// 不要手动编辑。

export const StarVasGetBoostGroupListV2DataBoostGroupInfosStatus = {
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

export type StarVasGetBoostGroupListV2DataBoostGroupInfosStatus = typeof StarVasGetBoostGroupListV2DataBoostGroupInfosStatus[keyof typeof StarVasGetBoostGroupListV2DataBoostGroupInfosStatus];


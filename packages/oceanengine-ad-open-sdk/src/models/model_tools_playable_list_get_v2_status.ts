// 由 oceanengine/ad_open_sdk_go models/model_tools_playable_list_get_v2_status.go 生成
// 不要手动编辑。

export const ToolsPlayableListGetV2Status = {
  AUDIT_SUCCESS: "AUDIT_SUCCESS",
  VALIDATING: "VALIDATING",
  AUDIT_FAIL: "AUDIT_FAIL",
  VALIDATE_FAIL: "VALIDATE_FAIL",
  VALIDATE_SUCCESS: "VALIDATE_SUCCESS",
} as const;

export type ToolsPlayableListGetV2Status = typeof ToolsPlayableListGetV2Status[keyof typeof ToolsPlayableListGetV2Status];


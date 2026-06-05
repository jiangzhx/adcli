// 由 oceanengine/ad_open_sdk_go models/model_tools_bid_suggest_v2_flow_control_mode.go 生成
// 不要手动编辑。

export const ToolsBidSuggestV2FlowControlMode = {
  FLOW_CONTROL_MODE_BALANCE: "FLOW_CONTROL_MODE_BALANCE",
  FLOW_CONTROL_MODE_SMOOTH: "FLOW_CONTROL_MODE_SMOOTH",
  FLOW_CONTROL_MODE_FAST: "FLOW_CONTROL_MODE_FAST",
  FLOW_CONTROL_MODE_TWO_PHASES: "FLOW_CONTROL_MODE_TWO_PHASES",
  FLOW_CONTROL_MODE_HOURLY: "FLOW_CONTROL_MODE_HOURLY",
} as const;

export type ToolsBidSuggestV2FlowControlMode = typeof ToolsBidSuggestV2FlowControlMode[keyof typeof ToolsBidSuggestV2FlowControlMode];


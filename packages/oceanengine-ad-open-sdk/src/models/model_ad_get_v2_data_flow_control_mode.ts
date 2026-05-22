// Generated from oceanengine/ad_open_sdk_go models/model_ad_get_v2_data_flow_control_mode.go
// Do not edit manually.

export const AdGetV2DataFlowControlMode = {
  FLOW_CONTROL_MODE_FAST: "FLOW_CONTROL_MODE_FAST",
  FLOW_CONTROL_MODE_TWO_PHASES: "FLOW_CONTROL_MODE_TWO_PHASES",
  FLOW_CONTROL_MODE_HOURLY: "FLOW_CONTROL_MODE_HOURLY",
  FLOW_CONTROL_MODE_SMOOTH: "FLOW_CONTROL_MODE_SMOOTH",
  FLOW_CONTROL_MODE_BALANCE: "FLOW_CONTROL_MODE_BALANCE",
} as const;

export type AdGetV2DataFlowControlMode = typeof AdGetV2DataFlowControlMode[keyof typeof AdGetV2DataFlowControlMode];


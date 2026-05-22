// Generated from oceanengine/ad_open_sdk_go models/model_spi_task_get_v2_status.go
// Do not edit manually.

export const SpiTaskGetV2Status = {
  ALL: "ALL",
  WAITING: "WAITING",
  FAIL: "FAIL",
  SUCCESS: "SUCCESS",
} as const;

export type SpiTaskGetV2Status = typeof SpiTaskGetV2Status[keyof typeof SpiTaskGetV2Status];


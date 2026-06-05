// 由 oceanengine/ad_open_sdk_go models/model_spi_task_get_v2_status.go 生成
// 不要手动编辑。

export const SpiTaskGetV2Status = {
  ALL: "ALL",
  WAITING: "WAITING",
  FAIL: "FAIL",
  SUCCESS: "SUCCESS",
} as const;

export type SpiTaskGetV2Status = typeof SpiTaskGetV2Status[keyof typeof SpiTaskGetV2Status];


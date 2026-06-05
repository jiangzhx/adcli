// 由 oceanengine/ad_open_sdk_go models/model_charge_list_v3_0_charge_status_list.go 生成
// 不要手动编辑。

export const ChargeListV30ChargeStatusList = {
  CANCELED: "CANCELED",
  CHARGING: "CHARGING",
  CREATED: "CREATED",
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
} as const;

export type ChargeListV30ChargeStatusList = typeof ChargeListV30ChargeStatusList[keyof typeof ChargeListV30ChargeStatusList];


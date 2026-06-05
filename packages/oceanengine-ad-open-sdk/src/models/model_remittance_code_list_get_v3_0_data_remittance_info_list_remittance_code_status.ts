// 由 oceanengine/ad_open_sdk_go models/model_remittance_code_list_get_v3_0_data_remittance_info_list_remittance_code_status.go 生成
// 不要手动编辑。

export const RemittanceCodeListGetV30DataRemittanceInfoListRemittanceCodeStatus = {
  ABANDON: "ABANDON",
  CHARGE_FAILED: "CHARGE_FAILED",
  CHARGE_SUCCESS: "CHARGE_SUCCESS",
  FUNDS_BINDING: "FUNDS_BINDING",
  NOT_USED: "NOT_USED",
} as const;

export type RemittanceCodeListGetV30DataRemittanceInfoListRemittanceCodeStatus = typeof RemittanceCodeListGetV30DataRemittanceInfoListRemittanceCodeStatus[keyof typeof RemittanceCodeListGetV30DataRemittanceInfoListRemittanceCodeStatus];


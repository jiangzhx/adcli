// 由 oceanengine/ad_open_sdk_go models/model_clue_smartphone_create_v2_validate_type.go 生成
// 不要手动编辑。

export const ClueSmartphoneCreateV2ValidateType = {
  VALIDITY_PRIORITY: "VALIDITY_PRIORITY",
  CLUE_PRIORITY: "CLUE_PRIORITY",
  ALL_VERIFICATION: "ALL_VERIFICATION",
  NONE_VERIFICATION: "NONE_VERIFICATION",
  AUTO_VERIFICATION: "AUTO_VERIFICATION",
} as const;

export type ClueSmartphoneCreateV2ValidateType = typeof ClueSmartphoneCreateV2ValidateType[keyof typeof ClueSmartphoneCreateV2ValidateType];


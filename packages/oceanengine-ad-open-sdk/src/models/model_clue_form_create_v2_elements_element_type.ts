// 由 oceanengine/ad_open_sdk_go models/model_clue_form_create_v2_elements_element_type.go 生成
// 不要手动编辑。

export const ClueFormCreateV2ElementsElementType = {
  CHECKBOX: "CHECKBOX",
  NAME: "NAME",
  CITY: "CITY",
  NUMBER: "NUMBER",
  SELECT: "SELECT",
  RADIO: "RADIO",
  TEXT: "TEXT",
  CALCULATOR: "CALCULATOR",
  SEX: "SEX",
  EMAIL: "EMAIL",
  TEXTAREA: "TEXTAREA",
  TELEPHONE: "TELEPHONE",
  DATE: "DATE",
} as const;

export type ClueFormCreateV2ElementsElementType = typeof ClueFormCreateV2ElementsElementType[keyof typeof ClueFormCreateV2ElementsElementType];


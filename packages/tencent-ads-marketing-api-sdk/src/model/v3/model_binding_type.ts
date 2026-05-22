// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_binding_type.go
// Do not edit manually.

export const BindingType = {
  OVERWRITE: "LABEL_BINDING_TYPE_OVERWRITE",
  ADD: "LABEL_BINDING_TYPE_ADD",
  DELETE: "LABEL_BINDING_TYPE_DELETE",
} as const;

export type BindingType = typeof BindingType[keyof typeof BindingType];


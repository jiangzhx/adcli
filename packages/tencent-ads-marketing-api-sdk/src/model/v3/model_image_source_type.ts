// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_image_source_type.go
// Do not edit manually.

export const ImageSourceType = {
  UNSUPPORTED: "SOURCE_TYPE_UNSUPPORTED",
  LOCAL: "SOURCE_TYPE_LOCAL",
  MUSE: "SOURCE_TYPE_MUSE",
  API: "SOURCE_TYPE_API",
  QUICK_DRAW: "SOURCE_TYPE_QUICK_DRAW",
  VIDEO_SNAPSHOTS: "SOURCE_TYPE_VIDEO_SNAPSHOTS",
  TCC: "SOURCE_TYPE_TCC",
} as const;

export type ImageSourceType = typeof ImageSourceType[keyof typeof ImageSourceType];


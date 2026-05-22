// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

export const MediaSourceType = {
  UNSUPPORTED: "SOURCE_TYPE_UNSUPPORTED",
  LOCAL: "SOURCE_TYPE_LOCAL",
  API: "SOURCE_TYPE_API",
  VIDEO_MAKER_XSJ: "SOURCE_TYPE_VIDEO_MAKER_XSJ",
  TCC: "SOURCE_TYPE_TCC",
  DERIVE: "SOURCE_TYPE_DERIVE",
  DERIVATION: "SOURCE_TYPE_DERIVATION",
  AIGC: "SOURCE_TYPE_AIGC",
  HUXUAN: "SOURCE_TYPE_HUXUAN",
  HUXUAN_DERIVE: "SOURCE_TYPE_HUXUAN_DERIVE",
} as const;

export type MediaSourceType = typeof MediaSourceType[keyof typeof MediaSourceType];


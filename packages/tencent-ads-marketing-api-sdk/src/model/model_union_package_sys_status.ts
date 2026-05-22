// Generated from tencentad/marketing-api-go-sdk pkg/model/model_union_package_sys_status.go
// Do not edit manually.

export const UnionPackageSysStatus = {
  PASSED: "CHANNEL_PACKAGE_STATUS_PASSED",
  REVIEWING: "CHANNEL_PACKAGE_STATUS_REVIEWING",
  DENIED: "CHANNEL_PACKAGE_STATUS_DENIED",
  DENIED_AGAIN: "CHANNEL_PACKAGE_STATUS_DENIED_AGAIN",
  REVIEWING_AGAIN: "CHANNEL_PACKAGE_STATUS_REVIEWING_AGAIN",
  ON_OFFLINE: "CHANNEL_PACKAGE_STATUS_ON_OFFLINE",
  OFFLINE: "CHANNEL_PACKAGE_STATUS_OFFLINE",
  DRAFT: "CHANNEL_PACKAGE_STATUS_DRAFT",
} as const;

export type UnionPackageSysStatus = typeof UnionPackageSysStatus[keyof typeof UnionPackageSysStatus];


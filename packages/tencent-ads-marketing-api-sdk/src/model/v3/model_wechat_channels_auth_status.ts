// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wechat_channels_auth_status.go
// Do not edit manually.

export const WechatChannelsAuthStatus = {
  PENDING: "PENDING",
  AUTHORIZED: "AUTHORIZED",
  CANCELLED: "CANCELLED",
  REFUSED: "REFUSED",
  EXPIRED: "EXPIRED",
  AUDIT_PENDING: "AUDIT_PENDING",
  AUDIT_REFUSED: "AUDIT_REFUSED",
  PENDING_CONFIRM: "PENDING_CONFIRM",
} as const;

export type WechatChannelsAuthStatus = typeof WechatChannelsAuthStatus[keyof typeof WechatChannelsAuthStatus];


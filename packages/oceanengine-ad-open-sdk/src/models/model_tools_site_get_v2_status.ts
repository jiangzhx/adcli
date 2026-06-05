// 由 oceanengine/ad_open_sdk_go models/model_tools_site_get_v2_status.go 生成
// 不要手动编辑。

export const ToolsSiteGetV2Status = {
  SITE_ALL: "SITE_ALL",
  SITE_ONLINE: "SITE_ONLINE",
  SITE_OFFLINE: "SITE_OFFLINE",
  SITE_REJECTED: "SITE_REJECTED",
  SITE_TRASH: "SITE_TRASH",
} as const;

export type ToolsSiteGetV2Status = typeof ToolsSiteGetV2Status[keyof typeof ToolsSiteGetV2Status];


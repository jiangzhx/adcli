// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { WechatScene } from "../models";

export interface SceneTargetingForWrite {
  mobile_union?: string[];
  exclude_mobile_union?: string[];
  union_position_package?: number[];
  exclude_union_position_package?: number[];
  tencent_news?: string[];
  display_scene?: string[];
  wechat_scene?: WechatScene;
  wechat_position?: number[];
  mobile_union_category?: number[];
  qbsearch_scene?: string[];
  wechat_channels_scene?: number[];
  pc_scene?: string[];
  wechat_search_scene?: string[];
}


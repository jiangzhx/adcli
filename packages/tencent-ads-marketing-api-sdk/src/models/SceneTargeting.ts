// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { WechatScene } from "../models";

export interface SceneTargeting {
  mobile_union?: string[];
  exclude_mobile_union?: string[];
  mobile_union_industry?: string[];
  union_position_package?: number[];
  exclude_union_position_package?: number[];
  display_scene?: string[];
  mobile_union_category?: number[];
  tencent_news?: string[];
  wechat_scene?: WechatScene;
  wechat_position?: number[];
  qbsearch_scene?: string[];
  wechat_channels_scene?: number[];
  wechat_search_scene?: string[];
}


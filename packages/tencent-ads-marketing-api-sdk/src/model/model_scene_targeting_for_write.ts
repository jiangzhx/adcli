// Generated from tencentad/marketing-api-go-sdk pkg/model/model_scene_targeting_for_write.go
// Do not edit manually.

import type { WechatScene } from "../model/index";

export interface SceneTargetingForWrite {
  union_position_package?: number[];
  exclude_union_position_package?: number[];
  display_scene?: string[];
  tencent_news?: string[];
  wechat_scene?: WechatScene;
  wechat_position?: number[];
  qbsearch_scene?: string[];
  wechat_channels_scene?: number[];
  wechat_search_scene?: string[];
  pc_scene?: string[];
}


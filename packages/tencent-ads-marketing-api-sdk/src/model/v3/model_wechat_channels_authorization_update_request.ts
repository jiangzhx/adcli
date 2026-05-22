// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wechat_channels_authorization_update_request.go
// Do not edit manually.

import type { Certification, WechatChannelsAuthScope, WechatChannelsCertificationRelationship } from "../v3/index";

export interface WechatChannelsAuthorizationUpdateRequest {
  account_id?: number | string;
  authorization_id?: string;
  authorization_begin_time?: number;
  authorization_ttl?: number;
  authorization_relationship?: WechatChannelsCertificationRelationship;
  authorization_scope?: WechatChannelsAuthScope;
  authorization_certification_list?: Certification[];
}


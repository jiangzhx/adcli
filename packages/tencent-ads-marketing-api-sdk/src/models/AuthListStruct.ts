// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { WechatChannelsAuthScope, WechatChannelsAuthStatus, WechatChannelsAuthType } from "../models";

export interface AuthListStruct {
  wechat_channels_account_name?: string;
  finder_username?: string;
  authorization_id?: string;
  authorization_begin_time?: number;
  authorization_ttl?: number;
  authorization_status?: WechatChannelsAuthStatus;
  audit_msg?: string;
  authorization_type?: WechatChannelsAuthType;
  authorization_scope?: WechatChannelsAuthScope;
  is_ad_acct?: boolean;
  wechat_channels_account_icon?: string;
  wechat_channels_account_id?: string;
  is_blocked?: boolean;
  is_private?: boolean;
  logout_time_second?: number;
  created_source_list?: string[];
  authorization_qr_code_url?: string;
  authorization_expired_time?: number;
  authorization_agreement?: string;
}


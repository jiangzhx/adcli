// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wechat_channels_ad_account_get_list_struct.go
// Do not edit manually.

import type { AdAccountCertification, WechatChannelsAdAccountBindWechatStatus, WechatChannelsAdAccountStatus } from "../v3/index";

export interface WechatChannelsAdAccountGetListStruct {
  wechat_channels_ad_account_id?: number | string;
  export_username?: string;
  wechat_bind_auth_token?: string;
  wechat_bind_status?: WechatChannelsAdAccountBindWechatStatus;
  nickname?: string;
  head_image_id?: string;
  head_image_url?: string;
  audit_msg?: string;
  status?: WechatChannelsAdAccountStatus;
  certification_list?: AdAccountCertification[];
  created_time?: number;
  last_modified_time?: number;
  finder_fail_msg?: string;
  finder_fail_ret?: number;
  wechat_channels_account_id?: string;
  logout_time_second?: number;
}


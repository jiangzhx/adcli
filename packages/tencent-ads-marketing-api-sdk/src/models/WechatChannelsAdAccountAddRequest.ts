// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { AdAccountCertification } from "../models";

export interface WechatChannelsAdAccountAddRequest {
  account_id?: number | string;
  wechat_bind_auth_token?: string;
  nickname?: string;
  head_image_id?: string;
  certification_list?: AdAccountCertification[];
  client_ip?: string;
}


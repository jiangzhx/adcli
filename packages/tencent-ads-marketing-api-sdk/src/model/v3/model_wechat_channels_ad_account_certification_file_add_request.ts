// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wechat_channels_ad_account_certification_file_add_request.go
// Do not edit manually.

import type { FileType } from "../v3/index";

export interface WechatChannelsAdAccountCertificationFileAddRequest {
  account_id?: number | string;
  signature?: string;
  file_bytes?: string;
  file_name?: string;
  file_type?: FileType;
}


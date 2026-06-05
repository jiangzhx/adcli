// 由 oceanengine/ad_open_sdk_go models/model_brand_aweme_list_v3_0_response_data_aweme_user_info_list_inner.go 生成
// 不要手动编辑。

import type { BrandAwemeListV30DataAwemeUserInfoListAppName, BrandAwemeListV30DataAwemeUserInfoListAuthStatus, BrandAwemeListV30DataAwemeUserInfoListAuthType, BrandAwemeListV30DataAwemeUserInfoListOperatePlatform } from "../models/index";

export interface BrandAwemeListV30ResponseDataAwemeUserInfoListInner {
  advertiser_id?: number | string;
  advertiser_name?: string;
  app_name?: BrandAwemeListV30DataAwemeUserInfoListAppName;
  auth_status?: BrandAwemeListV30DataAwemeUserInfoListAuthStatus;
  auth_type?: BrandAwemeListV30DataAwemeUserInfoListAuthType;
  aweme_id?: string;
  aweme_name?: string;
  bind_time?: string;
  left_valid_days?: number;
  operate_platform?: BrandAwemeListV30DataAwemeUserInfoListOperatePlatform;
}


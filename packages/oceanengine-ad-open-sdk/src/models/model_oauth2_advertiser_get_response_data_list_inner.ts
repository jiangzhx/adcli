// Generated from oceanengine/ad_open_sdk_go models/model_oauth2_advertiser_get_response_data_list_inner.go
// Do not edit manually.

import type { Oauth2AdvertiserGetDataListAccountType, Oauth2AdvertiserGetResponseDataListInnerCompanyListInner } from "../models/index";

export interface Oauth2AdvertiserGetResponseDataListInner {
  account_id?: number | string;
  account_name?: string;
  account_role?: string;
  account_string_id?: string;
  account_type?: Oauth2AdvertiserGetDataListAccountType;
  advertiser_id?: number | string;
  advertiser_name?: string;
  advertiser_role?: number;
  company_list?: Oauth2AdvertiserGetResponseDataListInnerCompanyListInner[];
  is_valid?: boolean;
}


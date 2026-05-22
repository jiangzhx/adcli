// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { Oauth2AdvertiserGetDataListAccountType, Oauth2AdvertiserGetResponseDataListInnerCompanyListInner } from "../models";

export interface Oauth2AdvertiserGetResponseDataListInner {
  account_id?: number;
  account_name?: string;
  account_role?: string;
  account_string_id?: string;
  account_type?: Oauth2AdvertiserGetDataListAccountType;
  advertiser_id?: number;
  advertiser_name?: string;
  advertiser_role?: number;
  company_list?: Oauth2AdvertiserGetResponseDataListInnerCompanyListInner[];
  is_valid?: boolean;
}


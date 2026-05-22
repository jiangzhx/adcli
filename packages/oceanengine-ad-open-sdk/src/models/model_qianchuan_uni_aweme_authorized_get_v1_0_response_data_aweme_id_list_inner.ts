// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_aweme_authorized_get_v1_0_response_data_aweme_id_list_inner.go
// Do not edit manually.

import type { QianchuanUniAwemeAuthorizedGetV10DataAwemeIdListAuthType, QianchuanUniAwemeAuthorizedGetV10DataAwemeIdListLiveDisableReasons, QianchuanUniAwemeAuthorizedGetV10DataAwemeIdListLiveUniPromApplyType, QianchuanUniAwemeAuthorizedGetV10DataAwemeIdListProductDisableReasons, QianchuanUniAwemeAuthorizedGetV10DataAwemeIdListProductUniPromApplyType } from "../models/index";

export interface QianchuanUniAwemeAuthorizedGetV10ResponseDataAwemeIdListInner {
  anchor_forbidden?: boolean;
  auth_type?: QianchuanUniAwemeAuthorizedGetV10DataAwemeIdListAuthType[];
  aweme_avatar?: string;
  aweme_id?: number | string;
  aweme_name?: string;
  aweme_show_id?: string;
  can_apply_uniprom?: boolean;
  can_control_uniprom?: boolean;
  has_authorized?: boolean;
  has_live_permission?: boolean;
  has_roi2_delivery_limit?: boolean;
  has_roi2_group_created?: boolean;
  has_shop_permission?: boolean;
  is_allow_mall?: boolean;
  is_aweme_c?: boolean;
  is_live_uni_prom_disabled?: boolean;
  is_product_uni_prom_disabled?: boolean;
  live_disable_reasons?: QianchuanUniAwemeAuthorizedGetV10DataAwemeIdListLiveDisableReasons[];
  live_uni_prom_apply_type?: QianchuanUniAwemeAuthorizedGetV10DataAwemeIdListLiveUniPromApplyType;
  product_disable_reasons?: QianchuanUniAwemeAuthorizedGetV10DataAwemeIdListProductDisableReasons[];
  product_uni_prom_apply_type?: QianchuanUniAwemeAuthorizedGetV10DataAwemeIdListProductUniPromApplyType;
}


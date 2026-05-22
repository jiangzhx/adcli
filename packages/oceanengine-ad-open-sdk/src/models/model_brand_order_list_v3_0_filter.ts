// Generated from oceanengine/ad_open_sdk_go models/model_brand_order_list_v3_0_filter.go
// Do not edit manually.

import type { BrandOrderListV30FilterAdForm, BrandOrderListV30FilterAppOrigin, BrandOrderListV30FilterAuditStatus, BrandOrderListV30FilterClassify, BrandOrderListV30FilterGdSendType, BrandOrderListV30FilterOrderStatus, BrandOrderListV30FilterProType } from "../models/index";

export interface BrandOrderListV30Filter {
  ad_form?: BrandOrderListV30FilterAdForm[];
  app_origin?: BrandOrderListV30FilterAppOrigin;
  audit_status?: BrandOrderListV30FilterAuditStatus[];
  classify?: BrandOrderListV30FilterClassify;
  create_end_time?: string;
  create_start_time?: string;
  end_time?: string;
  gd_send_type?: BrandOrderListV30FilterGdSendType;
  order_ids?: number | string[];
  order_name?: string;
  order_status?: BrandOrderListV30FilterOrderStatus[];
  pro_type?: BrandOrderListV30FilterProType;
  start_time?: string;
}


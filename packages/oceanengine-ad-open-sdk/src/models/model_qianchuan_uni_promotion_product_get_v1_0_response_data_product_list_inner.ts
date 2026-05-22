// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_promotion_product_get_v1_0_response_data_product_list_inner.go
// Do not edit manually.

import type { QianchuanUniPromotionProductGetV10DataProductListChannelType, QianchuanUniPromotionProductGetV10ResponseDataProductListInnerSquareImageListInner } from "../models/index";

export interface QianchuanUniPromotionProductGetV10ResponseDataProductListInner {
  audit_time?: string;
  category_name?: string;
  channel_id?: number | string;
  channel_type?: QianchuanUniPromotionProductGetV10DataProductListChannelType;
  gray_reason?: string[];
  id?: number | string;
  img?: string;
  name?: string;
  sell_num?: number;
  square_image_list?: QianchuanUniPromotionProductGetV10ResponseDataProductListInnerSquareImageListInner[];
  stock_num?: number;
  tag?: string[];
}


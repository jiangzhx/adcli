// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_promotion_product_aweme_get_v1_0_response_data_product_list_inner.go
// Do not edit manually.

import type { QianchuanUniPromotionProductAwemeGetV10DataProductListChannelType, QianchuanUniPromotionProductAwemeGetV10ResponseDataProductListInnerSquareImageListInner } from "../models/index";

export interface QianchuanUniPromotionProductAwemeGetV10ResponseDataProductListInner {
  category_name?: string;
  channel_id?: number | string;
  channel_type?: QianchuanUniPromotionProductAwemeGetV10DataProductListChannelType;
  gray_reason?: string[];
  id?: number | string;
  img?: string;
  name?: string;
  sell_num?: number;
  square_image_list?: QianchuanUniPromotionProductAwemeGetV10ResponseDataProductListInnerSquareImageListInner[];
  tag?: string[];
}


// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanUniPromotionProductAwemeGetV10DataProductListChannelType, QianchuanUniPromotionProductAwemeGetV10ResponseDataProductListInnerSquareImageListInner } from "../models";

export interface QianchuanUniPromotionProductAwemeGetV10ResponseDataProductListInner {
  category_name?: string;
  channel_id?: number;
  channel_type?: QianchuanUniPromotionProductAwemeGetV10DataProductListChannelType;
  gray_reason?: string[];
  id?: number;
  img?: string;
  name?: string;
  sell_num?: number;
  square_image_list?: QianchuanUniPromotionProductAwemeGetV10ResponseDataProductListInnerSquareImageListInner[];
  tag?: string[];
}


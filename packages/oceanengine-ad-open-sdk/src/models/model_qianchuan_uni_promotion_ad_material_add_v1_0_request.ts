// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_promotion_ad_material_add_v1_0_request.go
// Do not edit manually.

import type { QianchuanUniPromotionAdMaterialAddV10RequestMultiProductCreativeListInner, QianchuanUniPromotionAdMaterialAddV10RequestProgrammaticCreativeMediaList } from "../models/index";

export interface QianchuanUniPromotionAdMaterialAddV10Request {
  ad_id: number | string;
  advertiser_id: number | string;
  multi_product_creative_list?: QianchuanUniPromotionAdMaterialAddV10RequestMultiProductCreativeListInner[];
  programmatic_creative_media_list?: QianchuanUniPromotionAdMaterialAddV10RequestProgrammaticCreativeMediaList;
}


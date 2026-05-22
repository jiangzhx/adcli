// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanUniPromotionAdDetailV10DataMarketingGoal, QianchuanUniPromotionAdDetailV10DataOptStatus, QianchuanUniPromotionAdDetailV10DataStatus, QianchuanUniPromotionAdDetailV10ResponseDataCreativeSetting, QianchuanUniPromotionAdDetailV10ResponseDataDeliverySetting, QianchuanUniPromotionAdDetailV10ResponseDataMultiProductCreativeListInner, QianchuanUniPromotionAdDetailV10ResponseDataProductInfosInner, QianchuanUniPromotionAdDetailV10ResponseDataProgrammaticCreativeMediaList, QianchuanUniPromotionAdDetailV10ResponseDataRoomInfoInner } from "../models";

export interface QianchuanUniPromotionAdDetailV10ResponseData {
  ad_id?: number | string;
  aweme_id?: number | string;
  create_time?: string;
  creative_setting?: QianchuanUniPromotionAdDetailV10ResponseDataCreativeSetting;
  delivery_setting?: QianchuanUniPromotionAdDetailV10ResponseDataDeliverySetting;
  marketing_goal?: QianchuanUniPromotionAdDetailV10DataMarketingGoal;
  modify_time?: string;
  multi_product_creative_list?: QianchuanUniPromotionAdDetailV10ResponseDataMultiProductCreativeListInner[];
  name?: string;
  opt_status?: QianchuanUniPromotionAdDetailV10DataOptStatus;
  product_infos?: QianchuanUniPromotionAdDetailV10ResponseDataProductInfosInner[];
  programmatic_creative_media_list?: QianchuanUniPromotionAdDetailV10ResponseDataProgrammaticCreativeMediaList;
  room_info?: QianchuanUniPromotionAdDetailV10ResponseDataRoomInfoInner[];
  status?: QianchuanUniPromotionAdDetailV10DataStatus;
}


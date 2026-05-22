// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_aweme_ad_create_v1_0_request.go
// Do not edit manually.

import type { QianchuanUniAwemeAdCreateV10MarketingGoal, QianchuanUniAwemeAdCreateV10RequestCreativeSetting, QianchuanUniAwemeAdCreateV10RequestDeliverySetting, QianchuanUniAwemeAdCreateV10RequestMultiProductCreativeListInner, QianchuanUniAwemeAdCreateV10RequestProductChannelInfoInner, QianchuanUniAwemeAdCreateV10RequestProgrammaticCreativeMediaList } from "../models/index";

export interface QianchuanUniAwemeAdCreateV10Request {
  advertiser_id: number | string;
  aweme_id?: number | string;
  creative_setting?: QianchuanUniAwemeAdCreateV10RequestCreativeSetting;
  delivery_setting: QianchuanUniAwemeAdCreateV10RequestDeliverySetting;
  marketing_goal: QianchuanUniAwemeAdCreateV10MarketingGoal;
  multi_product_creative_list?: QianchuanUniAwemeAdCreateV10RequestMultiProductCreativeListInner[];
  name?: string;
  product_channel_info?: QianchuanUniAwemeAdCreateV10RequestProductChannelInfoInner[];
  product_ids?: number | string[];
  programmatic_creative_media_list?: QianchuanUniAwemeAdCreateV10RequestProgrammaticCreativeMediaList;
}


// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_aweme_ad_update_v1_0_request.go
// Do not edit manually.

import type { QianchuanUniAwemeAdUpdateV10RequestCreativeSetting, QianchuanUniAwemeAdUpdateV10RequestDeliverySetting, QianchuanUniAwemeAdUpdateV10RequestMultiProductCreativeListInner, QianchuanUniAwemeAdUpdateV10RequestProductChannelInfoInner, QianchuanUniAwemeAdUpdateV10RequestProgrammaticCreativeMediaList } from "../models/index";

export interface QianchuanUniAwemeAdUpdateV10Request {
  ad_id: number | string;
  advertiser_id: number | string;
  creative_setting?: QianchuanUniAwemeAdUpdateV10RequestCreativeSetting;
  delivery_setting?: QianchuanUniAwemeAdUpdateV10RequestDeliverySetting;
  multi_product_creative_list?: QianchuanUniAwemeAdUpdateV10RequestMultiProductCreativeListInner[];
  name?: string;
  product_channel_info?: QianchuanUniAwemeAdUpdateV10RequestProductChannelInfoInner[];
  programmatic_creative_media_list?: QianchuanUniAwemeAdUpdateV10RequestProgrammaticCreativeMediaList;
}


// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdUpdateV10CreativeAutoGenerate, QianchuanAdUpdateV10DynamicCreative, QianchuanAdUpdateV10IsHomepageHide, QianchuanAdUpdateV10IsIntelligent, QianchuanAdUpdateV10RequestAudience, QianchuanAdUpdateV10RequestCreativeListInner, QianchuanAdUpdateV10RequestDeliverySetting, QianchuanAdUpdateV10RequestKeywordsInner, QianchuanAdUpdateV10RequestMultiProductCreativeListInner, QianchuanAdUpdateV10RequestProgrammaticCreativeCard, QianchuanAdUpdateV10RequestProgrammaticCreativeMediaListInner, QianchuanAdUpdateV10RequestProgrammaticCreativeTitleListInner, QianchuanAdUpdateV10RequestTrackUrl } from "../models";

export interface QianchuanAdUpdateV10Request {
  ad_id: number | string;
  ad_keywords?: string[];
  advertiser_id: number | string;
  audience?: QianchuanAdUpdateV10RequestAudience;
  creative_auto_generate?: QianchuanAdUpdateV10CreativeAutoGenerate;
  creative_list?: QianchuanAdUpdateV10RequestCreativeListInner[];
  delivery_setting: QianchuanAdUpdateV10RequestDeliverySetting;
  dynamic_creative?: QianchuanAdUpdateV10DynamicCreative;
  first_industry_id?: number | string;
  is_homepage_hide?: QianchuanAdUpdateV10IsHomepageHide;
  is_intelligent?: QianchuanAdUpdateV10IsIntelligent;
  keywords?: QianchuanAdUpdateV10RequestKeywordsInner[];
  multi_product_creative_list?: QianchuanAdUpdateV10RequestMultiProductCreativeListInner[];
  name?: string;
  programmatic_creative_card?: QianchuanAdUpdateV10RequestProgrammaticCreativeCard;
  programmatic_creative_media_list?: QianchuanAdUpdateV10RequestProgrammaticCreativeMediaListInner[];
  programmatic_creative_title_list?: QianchuanAdUpdateV10RequestProgrammaticCreativeTitleListInner[];
  second_industry_id?: number | string;
  third_industry_id?: number | string;
  track_url?: QianchuanAdUpdateV10RequestTrackUrl;
}


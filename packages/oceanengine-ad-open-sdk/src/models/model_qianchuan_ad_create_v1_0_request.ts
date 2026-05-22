// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_ad_create_v1_0_request.go
// Do not edit manually.

import type { QianchuanAdCreateV10CampaignScene, QianchuanAdCreateV10CreativeAutoGenerate, QianchuanAdCreateV10CreativeMaterialMode, QianchuanAdCreateV10DynamicCreative, QianchuanAdCreateV10IsHomepageHide, QianchuanAdCreateV10IsIntelligent, QianchuanAdCreateV10LabAdType, QianchuanAdCreateV10MarketingGoal, QianchuanAdCreateV10MarketingScene, QianchuanAdCreateV10RequestAudience, QianchuanAdCreateV10RequestChannelProductInfosInner, QianchuanAdCreateV10RequestCreativeListInner, QianchuanAdCreateV10RequestDeliverySetting, QianchuanAdCreateV10RequestKeywordsInner, QianchuanAdCreateV10RequestMultiProductCreativeListInner, QianchuanAdCreateV10RequestProgrammaticCreativeCard, QianchuanAdCreateV10RequestProgrammaticCreativeMediaListInner, QianchuanAdCreateV10RequestProgrammaticCreativeTitleListInner, QianchuanAdCreateV10RequestTrackUrl } from "../models/index";

export interface QianchuanAdCreateV10Request {
  ad_keywords?: string[];
  advertiser_id: number | string;
  audience?: QianchuanAdCreateV10RequestAudience;
  aweme_id?: number | string;
  brand_id?: number | string;
  campaign_id?: number | string;
  campaign_scene?: QianchuanAdCreateV10CampaignScene;
  channel_product_infos?: QianchuanAdCreateV10RequestChannelProductInfosInner[];
  creative_auto_generate?: QianchuanAdCreateV10CreativeAutoGenerate;
  creative_list?: QianchuanAdCreateV10RequestCreativeListInner[];
  creative_material_mode?: QianchuanAdCreateV10CreativeMaterialMode;
  delivery_setting: QianchuanAdCreateV10RequestDeliverySetting;
  dynamic_creative?: QianchuanAdCreateV10DynamicCreative;
  first_industry_id?: number | string;
  is_homepage_hide?: QianchuanAdCreateV10IsHomepageHide;
  is_intelligent?: QianchuanAdCreateV10IsIntelligent;
  keywords?: QianchuanAdCreateV10RequestKeywordsInner[];
  lab_ad_type?: QianchuanAdCreateV10LabAdType;
  marketing_goal: QianchuanAdCreateV10MarketingGoal;
  marketing_scene?: QianchuanAdCreateV10MarketingScene;
  multi_product_creative_list?: QianchuanAdCreateV10RequestMultiProductCreativeListInner[];
  name: string;
  product_ids?: number | string[];
  programmatic_creative_card?: QianchuanAdCreateV10RequestProgrammaticCreativeCard;
  programmatic_creative_media_list?: QianchuanAdCreateV10RequestProgrammaticCreativeMediaListInner[];
  programmatic_creative_title_list?: QianchuanAdCreateV10RequestProgrammaticCreativeTitleListInner[];
  second_industry_id?: number | string;
  shop_id?: number | string;
  third_industry_id?: number | string;
  track_url?: QianchuanAdCreateV10RequestTrackUrl;
}


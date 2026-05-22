// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdDetailGetV10DataCampaignScene, QianchuanAdDetailGetV10DataCreativeAutoGenerate, QianchuanAdDetailGetV10DataCreativeMaterialMode, QianchuanAdDetailGetV10DataDynamicCreative, QianchuanAdDetailGetV10DataIsHomepageHide, QianchuanAdDetailGetV10DataIsIntelligent, QianchuanAdDetailGetV10DataLabAdType, QianchuanAdDetailGetV10DataMarketingGoal, QianchuanAdDetailGetV10DataMarketingScene, QianchuanAdDetailGetV10DataOptStatus, QianchuanAdDetailGetV10DataStatus, QianchuanAdDetailGetV10ResponseDataAudience, QianchuanAdDetailGetV10ResponseDataAwemeInfoInner, QianchuanAdDetailGetV10ResponseDataBrandInfo, QianchuanAdDetailGetV10ResponseDataCreativeListInner, QianchuanAdDetailGetV10ResponseDataDeliverySetting, QianchuanAdDetailGetV10ResponseDataKeywordsInner, QianchuanAdDetailGetV10ResponseDataMultiProductCreativeListInner, QianchuanAdDetailGetV10ResponseDataPivativeWords, QianchuanAdDetailGetV10ResponseDataProductInfoInner, QianchuanAdDetailGetV10ResponseDataProgrammaticCreativeCard, QianchuanAdDetailGetV10ResponseDataProgrammaticCreativeMediaListInner, QianchuanAdDetailGetV10ResponseDataProgrammaticCreativeTitleListInner, QianchuanAdDetailGetV10ResponseDataRoomInfoInner, QianchuanAdDetailGetV10ResponseDataShopInfo, QianchuanAdDetailGetV10ResponseDataTrackUrl } from "../models";

export interface QianchuanAdDetailGetV10ResponseData {
  ad_create_time?: string;
  ad_id?: number;
  ad_keywords?: string[];
  ad_modify_time?: string;
  audience?: QianchuanAdDetailGetV10ResponseDataAudience;
  aweme_info?: QianchuanAdDetailGetV10ResponseDataAwemeInfoInner[];
  brand_info?: QianchuanAdDetailGetV10ResponseDataBrandInfo;
  campaign_id?: number;
  campaign_scene?: QianchuanAdDetailGetV10DataCampaignScene;
  creative_auto_generate?: QianchuanAdDetailGetV10DataCreativeAutoGenerate;
  creative_list?: QianchuanAdDetailGetV10ResponseDataCreativeListInner[];
  creative_material_mode?: QianchuanAdDetailGetV10DataCreativeMaterialMode;
  delivery_setting?: QianchuanAdDetailGetV10ResponseDataDeliverySetting;
  dynamic_creative?: QianchuanAdDetailGetV10DataDynamicCreative;
  first_industry_id?: number;
  is_homepage_hide?: QianchuanAdDetailGetV10DataIsHomepageHide;
  is_intelligent?: QianchuanAdDetailGetV10DataIsIntelligent;
  keywords?: QianchuanAdDetailGetV10ResponseDataKeywordsInner[];
  lab_ad_type?: QianchuanAdDetailGetV10DataLabAdType;
  marketing_goal?: QianchuanAdDetailGetV10DataMarketingGoal;
  marketing_scene?: QianchuanAdDetailGetV10DataMarketingScene;
  multi_product_creative_list?: QianchuanAdDetailGetV10ResponseDataMultiProductCreativeListInner[];
  name?: string;
  opt_status?: QianchuanAdDetailGetV10DataOptStatus;
  pivative_words?: QianchuanAdDetailGetV10ResponseDataPivativeWords;
  product_info?: QianchuanAdDetailGetV10ResponseDataProductInfoInner[];
  programmatic_creative_card?: QianchuanAdDetailGetV10ResponseDataProgrammaticCreativeCard;
  programmatic_creative_media_list?: QianchuanAdDetailGetV10ResponseDataProgrammaticCreativeMediaListInner[];
  programmatic_creative_title_list?: QianchuanAdDetailGetV10ResponseDataProgrammaticCreativeTitleListInner[];
  room_info?: QianchuanAdDetailGetV10ResponseDataRoomInfoInner[];
  second_industry_id?: number;
  shop_info?: QianchuanAdDetailGetV10ResponseDataShopInfo;
  status?: QianchuanAdDetailGetV10DataStatus;
  third_industry_id?: number;
  track_url?: QianchuanAdDetailGetV10ResponseDataTrackUrl;
}


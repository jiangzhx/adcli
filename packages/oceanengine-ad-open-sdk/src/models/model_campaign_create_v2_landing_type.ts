// 由 oceanengine/ad_open_sdk_go models/model_campaign_create_v2_landing_type.go 生成
// 不要手动编辑。

export const CampaignCreateV2LandingType = {
  APP: "APP",
  BRAND_EXTERNAL: "BRAND_EXTERNAL",
  DPA: "DPA",
  SHOP: "SHOP",
  AWEME: "AWEME",
  STORE: "STORE",
  LIVE: "LIVE",
  QUICK_APP: "QUICK_APP",
  LINK: "LINK",
  GOODS: "GOODS",
  ARTICLE: "ARTICLE",
} as const;

export type CampaignCreateV2LandingType = typeof CampaignCreateV2LandingType[keyof typeof CampaignCreateV2LandingType];


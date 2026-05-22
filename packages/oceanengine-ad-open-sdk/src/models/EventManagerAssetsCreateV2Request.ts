// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { EventManagerAssetsCreateV2AssetType, EventManagerAssetsCreateV2RequestAppAsset, EventManagerAssetsCreateV2RequestMiniProgramAsset, EventManagerAssetsCreateV2RequestQuickAppAsset, EventManagerAssetsCreateV2RequestSiteAsset, EventManagerAssetsCreateV2RequestThirdPartAsset } from "../models";

export interface EventManagerAssetsCreateV2Request {
  advertiser_id: number | string;
  app_asset?: EventManagerAssetsCreateV2RequestAppAsset;
  asset_type: EventManagerAssetsCreateV2AssetType;
  mini_program_asset?: EventManagerAssetsCreateV2RequestMiniProgramAsset;
  quick_app_asset?: EventManagerAssetsCreateV2RequestQuickAppAsset;
  site_asset?: EventManagerAssetsCreateV2RequestSiteAsset;
  third_part_asset?: EventManagerAssetsCreateV2RequestThirdPartAsset;
}


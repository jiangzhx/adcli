// Generated from oceanengine/ad_open_sdk_go models/model_event_manager_assets_create_v2_request_app_asset.go
// Do not edit manually.

import type { EventManagerAssetsCreateV2AppAssetAppCreateType, EventManagerAssetsCreateV2AppAssetAppType } from "../models/index";

export interface EventManagerAssetsCreateV2RequestAppAsset {
  app_create_type?: EventManagerAssetsCreateV2AppAssetAppCreateType;
  app_id?: number | string;
  app_type: EventManagerAssetsCreateV2AppAssetAppType;
  download_url: string;
  name: string;
  package_id?: string;
  package_name: string;
}


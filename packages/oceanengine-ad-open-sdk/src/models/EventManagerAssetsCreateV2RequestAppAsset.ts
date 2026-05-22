// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { EventManagerAssetsCreateV2AppAssetAppCreateType, EventManagerAssetsCreateV2AppAssetAppType } from "../models";

export interface EventManagerAssetsCreateV2RequestAppAsset {
  app_create_type?: EventManagerAssetsCreateV2AppAssetAppCreateType;
  app_id?: number | string;
  app_type: EventManagerAssetsCreateV2AppAssetAppType;
  download_url: string;
  name: string;
  package_id?: string;
  package_name: string;
}


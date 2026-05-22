// Generated from oceanengine/ad_open_sdk_go models/model_assets_creative_component_get_v2_filtering.go
// Do not edit manually.

import type { AssetsCreativeComponentGetV2FilteringComponentTypes, AssetsCreativeComponentGetV2FilteringStatus } from "../models/index";

export interface AssetsCreativeComponentGetV2Filtering {
  component_id?: number | string;
  component_name?: string;
  component_types?: AssetsCreativeComponentGetV2FilteringComponentTypes[];
  skin_types?: string[];
  status?: AssetsCreativeComponentGetV2FilteringStatus[];
}


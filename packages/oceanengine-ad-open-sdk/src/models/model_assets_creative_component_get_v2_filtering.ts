// 由 oceanengine/ad_open_sdk_go models/model_assets_creative_component_get_v2_filtering.go 生成
// 不要手动编辑。

import type { AssetsCreativeComponentGetV2FilteringComponentTypes, AssetsCreativeComponentGetV2FilteringStatus } from "../models/index";

export interface AssetsCreativeComponentGetV2Filtering {
  component_id?: number | string;
  component_name?: string;
  component_types?: AssetsCreativeComponentGetV2FilteringComponentTypes[];
  skin_types?: string[];
  status?: AssetsCreativeComponentGetV2FilteringStatus[];
}


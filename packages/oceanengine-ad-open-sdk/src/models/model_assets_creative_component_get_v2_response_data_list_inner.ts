// Generated from oceanengine/ad_open_sdk_go models/model_assets_creative_component_get_v2_response_data_list_inner.go
// Do not edit manually.

import type { AssetsCreativeComponentGetV2DataListComponentType, AssetsCreativeComponentGetV2DataListStatus } from "../models/index";

export interface AssetsCreativeComponentGetV2ResponseDataListInner {
  component_data?: Record<string, unknown>;
  component_id?: number | string;
  component_name?: string;
  component_type?: AssetsCreativeComponentGetV2DataListComponentType;
  create_time?: string;
  status?: AssetsCreativeComponentGetV2DataListStatus;
}


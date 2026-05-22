// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AssetsCreativeComponentGetV2DataListComponentType, AssetsCreativeComponentGetV2DataListStatus } from "../models";

export interface AssetsCreativeComponentGetV2ResponseDataListInner {
  component_data?: Record<string, unknown>;
  component_id?: number | string;
  component_name?: string;
  component_type?: AssetsCreativeComponentGetV2DataListComponentType;
  create_time?: string;
  status?: AssetsCreativeComponentGetV2DataListStatus;
}


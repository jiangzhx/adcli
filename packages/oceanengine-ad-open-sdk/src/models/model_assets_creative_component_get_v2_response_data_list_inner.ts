// 由 oceanengine/ad_open_sdk_go models/model_assets_creative_component_get_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { AssetsCreativeComponentGetV2DataListComponentType, AssetsCreativeComponentGetV2DataListStatus } from "../models/index";

export interface AssetsCreativeComponentGetV2ResponseDataListInner {
  component_data?: Record<string, unknown>;
  component_id?: number | string;
  component_name?: string;
  component_type?: AssetsCreativeComponentGetV2DataListComponentType;
  create_time?: string;
  status?: AssetsCreativeComponentGetV2DataListStatus;
}


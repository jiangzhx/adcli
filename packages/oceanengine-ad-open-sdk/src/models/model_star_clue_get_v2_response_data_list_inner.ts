// Generated from oceanengine/ad_open_sdk_go models/model_star_clue_get_v2_response_data_list_inner.go
// Do not edit manually.

import type { StarClueGetV2DataListComponentType } from "../models/index";

export interface StarClueGetV2ResponseDataListInner {
  address?: string;
  anchor_name: string;
  author_name?: string;
  author_uid?: number;
  car_series?: string;
  car_type?: string;
  city?: string;
  component_type: StarClueGetV2DataListComponentType;
  create_time: string;
  demand_id: number | string;
  item_id: number | string;
  name?: string;
  order_id: number | string;
  phone?: string;
  province?: string;
  star_id: number | string;
}


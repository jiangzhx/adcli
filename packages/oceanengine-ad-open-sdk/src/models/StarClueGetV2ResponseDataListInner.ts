// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarClueGetV2DataListComponentType } from "../models";

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


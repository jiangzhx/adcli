// Generated from oceanengine/ad_open_sdk_go models/model_star_demand_create_assign_v2_request_demand_info.go
// Do not edit manually.

import type { StarDemandCreateAssignV2RequestDemandInfoAdSyncConf, StarDemandCreateAssignV2RequestDemandInfoCarBrandListInner, StarDemandCreateAssignV2RequestDemandInfoComponentInfo, StarDemandCreateAssignV2RequestDemandInfoDemandRequirement } from "../models/index";

export interface StarDemandCreateAssignV2RequestDemandInfo {
  accept_expiration_day?: number;
  ad_sync_conf?: StarDemandCreateAssignV2RequestDemandInfoAdSyncConf;
  attachment_text?: string;
  attachments?: string[];
  brand_name: string;
  car_brand_list?: StarDemandCreateAssignV2RequestDemandInfoCarBrandListInner[];
  car_marketing_scene_type?: number;
  component_click_monitor_url?: string;
  component_info?: StarDemandCreateAssignV2RequestDemandInfoComponentInfo;
  contact_name: string;
  contact_phone: string;
  demand_name: string;
  demand_requirement: StarDemandCreateAssignV2RequestDemandInfoDemandRequirement;
  expect_remain_time: number;
  expiration_time: number;
  expiration_time_end: number;
  ignore_script?: number;
  ip_act_id?: number | string;
  item_show_monitor_url?: string;
  livestream_deadline?: number;
  product_category?: string[];
  product_industry: string[];
  product_information: string;
  product_link?: string;
  product_name: string;
  project_id?: number | string;
  xingzhitou_pre_audit?: number;
  yuntu_industry_ids?: number | string[];
  yuntu_main_brand?: number;
}


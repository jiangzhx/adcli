// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarOrderGetInfoV2ResponseDataOrderListInnerDemandInfoAdSyncConf, StarOrderGetInfoV2ResponseDataOrderListInnerDemandInfoComponentInfo, StarOrderGetInfoV2ResponseDataOrderListInnerDemandInfoDemandRequirement } from "../models";

export interface StarOrderGetInfoV2ResponseDataOrderListInnerDemandInfo {
  accept_expiration_day?: number;
  ad_sync_conf?: StarOrderGetInfoV2ResponseDataOrderListInnerDemandInfoAdSyncConf;
  attachment_text?: string;
  attachments?: string[];
  brand_name?: string;
  component_info?: StarOrderGetInfoV2ResponseDataOrderListInnerDemandInfoComponentInfo;
  contact_name?: string;
  contact_phone?: string;
  demand_name?: string;
  demand_requirement?: StarOrderGetInfoV2ResponseDataOrderListInnerDemandInfoDemandRequirement;
  expect_remain_time?: number;
  expiration_time?: number;
  expiration_time_end?: number;
  ignore_script?: number;
  ip_act_id?: number | string;
  product_industry?: string[];
  product_information?: string;
  product_link?: string;
  product_name?: string;
  project_id?: number | string;
  xingzhitou_pre_audit?: number;
  yuntu_industry_ids?: number | string[];
  yuntu_main_brand?: number;
}


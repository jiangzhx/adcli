// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { Ad, Adgroup } from "../models";

export interface AdcreativeTemplatePreviewsGetRequest {
  adgroup_id?: number | string;
  ad_id_list?: number[];
  dynamic_creative_id?: number | string;
  adgroup?: Adgroup;
  ad_list?: Ad[];
  account_id?: number | string;
}


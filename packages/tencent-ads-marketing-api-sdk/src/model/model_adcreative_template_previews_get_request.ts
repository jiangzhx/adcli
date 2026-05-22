// Generated from tencentad/marketing-api-go-sdk pkg/model/model_adcreative_template_previews_get_request.go
// Do not edit manually.

import type { Ad, Adgroup } from "../model/index";

export interface AdcreativeTemplatePreviewsGetRequest {
  adgroup_id?: number | string;
  ad_id_list?: number[];
  dynamic_creative_id?: number | string;
  adgroup?: Adgroup;
  ad_list?: Ad[];
  account_id?: number | string;
}


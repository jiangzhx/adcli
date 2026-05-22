// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ad_param_get_request.go
// Do not edit manually.

import type { CampaignType, IntSiteSetDefinition, PromotedObjectType } from "../model/index";

export interface AdParamGetRequest {
  account_id?: number | string;
  campaign_type?: CampaignType;
  promoted_object_type?: PromotedObjectType;
  adcreative_template_id?: number | string;
  site_set?: IntSiteSetDefinition;
  product_catalog_id?: number | string;
}


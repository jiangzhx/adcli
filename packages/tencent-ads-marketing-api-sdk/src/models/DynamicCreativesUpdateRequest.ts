// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ConfiguredStatus, CreativeComponents, SiteSetValidateModel } from "../models";

export interface DynamicCreativesUpdateRequest {
  account_id?: number | string;
  dynamic_creative_id?: number | string;
  dynamic_creative_name?: string;
  creative_components?: CreativeComponents;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  auto_derived_program_creative_switch?: boolean;
  configured_status?: ConfiguredStatus;
  is_retry_batch_update?: boolean;
  site_set_validate_model?: SiteSetValidateModel;
}


// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { AdvertiserPicMaterialSwitch, AdvertiserSublinkSwitch, ConfiguredStatus, CreativeComponents, ModelSwitch } from "../models";

export interface SearchDynamicCreativesUpdateRequest {
  account_id?: number | string;
  dynamic_creative_id?: number | string;
  dynamic_creative_name?: string;
  creative_components?: CreativeComponents;
  configured_status?: ConfiguredStatus;
  search_intelligent_extension?: ModelSwitch;
  sublink_switch?: AdvertiserSublinkSwitch;
  pic_material_switch?: AdvertiserPicMaterialSwitch;
}


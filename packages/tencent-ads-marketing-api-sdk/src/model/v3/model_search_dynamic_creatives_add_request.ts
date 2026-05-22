// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_search_dynamic_creatives_add_request.go
// Do not edit manually.

import type { AdvertiserPicMaterialSwitch, AdvertiserSublinkSwitch, CreativeComponents, DeliveryMode, ModelSwitch } from "../v3/index";

export interface SearchDynamicCreativesAddRequest {
  account_id?: number | string;
  adgroup_id?: number | string;
  dynamic_creative_name?: string;
  creative_template_id?: number | string;
  delivery_mode?: DeliveryMode;
  creative_components?: CreativeComponents;
  search_intelligent_extension?: ModelSwitch;
  sublink_switch?: AdvertiserSublinkSwitch;
  pic_material_switch?: AdvertiserPicMaterialSwitch;
}


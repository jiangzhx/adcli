// Generated from oceanengine/ad_open_sdk_go models/model_brand_material_create_v3_0_request_material_list_inner.go
// Do not edit manually.

import type { BrandMaterialCreateV30MaterialListCreativeTemplate, BrandMaterialCreateV30RequestMaterialListInnerMaterialComponent } from "../models/index";

export interface BrandMaterialCreateV30RequestMaterialListInner {
  creative_is_aigc?: boolean;
  creative_template: BrandMaterialCreateV30MaterialListCreativeTemplate;
  material_component: BrandMaterialCreateV30RequestMaterialListInnerMaterialComponent;
  material_name: string;
}


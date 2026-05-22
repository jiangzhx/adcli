// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { BrandMaterialCreateV30MaterialListCreativeTemplate, BrandMaterialCreateV30RequestMaterialListInnerMaterialComponent } from "../models";

export interface BrandMaterialCreateV30RequestMaterialListInner {
  creative_is_aigc?: boolean;
  creative_template: BrandMaterialCreateV30MaterialListCreativeTemplate;
  material_component: BrandMaterialCreateV30RequestMaterialListInnerMaterialComponent;
  material_name: string;
}


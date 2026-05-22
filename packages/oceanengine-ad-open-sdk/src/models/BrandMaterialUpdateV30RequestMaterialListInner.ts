// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { BrandMaterialUpdateV30MaterialListCreativeTemplate, BrandMaterialUpdateV30RequestMaterialListInnerMaterialComponent } from "../models";

export interface BrandMaterialUpdateV30RequestMaterialListInner {
  creative_is_aigc?: boolean;
  creative_template: BrandMaterialUpdateV30MaterialListCreativeTemplate;
  material_component: BrandMaterialUpdateV30RequestMaterialListInnerMaterialComponent;
  material_id?: number | string;
  material_name: string;
}


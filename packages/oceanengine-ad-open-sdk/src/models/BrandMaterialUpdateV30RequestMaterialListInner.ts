// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { BrandMaterialUpdateV30MaterialListCreativeTemplate, BrandMaterialUpdateV30RequestMaterialListInnerMaterialComponent } from "../models";

export interface BrandMaterialUpdateV30RequestMaterialListInner {
  creative_is_aigc?: boolean;
  creative_template: BrandMaterialUpdateV30MaterialListCreativeTemplate;
  material_component: BrandMaterialUpdateV30RequestMaterialListInnerMaterialComponent;
  material_id?: number;
  material_name: string;
}


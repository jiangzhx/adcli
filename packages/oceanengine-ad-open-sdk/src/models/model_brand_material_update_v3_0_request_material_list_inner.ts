// 由 oceanengine/ad_open_sdk_go models/model_brand_material_update_v3_0_request_material_list_inner.go 生成
// 不要手动编辑。

import type { BrandMaterialUpdateV30MaterialListCreativeTemplate, BrandMaterialUpdateV30RequestMaterialListInnerMaterialComponent } from "../models/index";

export interface BrandMaterialUpdateV30RequestMaterialListInner {
  creative_is_aigc?: boolean;
  creative_template: BrandMaterialUpdateV30MaterialListCreativeTemplate;
  material_component: BrandMaterialUpdateV30RequestMaterialListInnerMaterialComponent;
  material_id?: number | string;
  material_name: string;
}


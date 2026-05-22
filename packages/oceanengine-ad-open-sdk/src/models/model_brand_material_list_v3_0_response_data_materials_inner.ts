// Generated from oceanengine/ad_open_sdk_go models/model_brand_material_list_v3_0_response_data_materials_inner.go
// Do not edit manually.

import type { BrandMaterialListV30DataMaterialsCreativeDisplayMode, BrandMaterialListV30DataMaterialsCreativeIsAigc, BrandMaterialListV30DataMaterialsCreativeTemplate, BrandMaterialListV30DataMaterialsMaterialStatus, BrandMaterialListV30ResponseDataMaterialsInnerCategoryInfo, BrandMaterialListV30ResponseDataMaterialsInnerCreativeDataInner, BrandMaterialListV30ResponseDataMaterialsInnerMaterialComponent, BrandMaterialListV30ResponseDataMaterialsInnerTrackUrlGroupInfosInner, BrandMaterialListV30ResponseDataMaterialsInnerTrackUrlInfo } from "../models/index";

export interface BrandMaterialListV30ResponseDataMaterialsInner {
  category_info?: BrandMaterialListV30ResponseDataMaterialsInnerCategoryInfo;
  create_time?: string;
  creative_data?: BrandMaterialListV30ResponseDataMaterialsInnerCreativeDataInner[];
  creative_display_mode?: BrandMaterialListV30DataMaterialsCreativeDisplayMode;
  creative_is_aigc?: BrandMaterialListV30DataMaterialsCreativeIsAigc;
  creative_template?: BrandMaterialListV30DataMaterialsCreativeTemplate;
  date?: string[];
  end_time?: string;
  material_component?: BrandMaterialListV30ResponseDataMaterialsInnerMaterialComponent;
  material_id?: number | string;
  material_name?: string;
  material_status?: BrandMaterialListV30DataMaterialsMaterialStatus;
  order_id?: number | string;
  start_time?: string;
  track_url_group_infos?: BrandMaterialListV30ResponseDataMaterialsInnerTrackUrlGroupInfosInner[];
  track_url_info?: BrandMaterialListV30ResponseDataMaterialsInnerTrackUrlInfo;
}


// Generated from oceanengine/ad_open_sdk_go models/model_file_material_attributes_list_v2_filtering.go
// Do not edit manually.

import type { FileMaterialAttributesListV2FilteringMaterialProperties } from "../models/index";

export interface FileMaterialAttributesListV2Filtering {
  attributes_modify_time?: string;
  end_time?: string;
  material_ids?: (number | string)[];
  material_properties?: FileMaterialAttributesListV2FilteringMaterialProperties[];
  start_time?: string;
}


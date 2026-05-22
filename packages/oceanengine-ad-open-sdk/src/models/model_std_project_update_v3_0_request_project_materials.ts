// Generated from oceanengine/ad_open_sdk_go models/model_std_project_update_v3_0_request_project_materials.go
// Do not edit manually.

import type { StdProjectUpdateV30ProjectMaterialsAnchorRelatedType, StdProjectUpdateV30ProjectMaterialsOriginalVideoTitle, StdProjectUpdateV30ProjectMaterialsUlinkUrlType, StdProjectUpdateV30RequestProjectMaterialsAnchorMaterialListInner, StdProjectUpdateV30RequestProjectMaterialsComponentMaterialListInner, StdProjectUpdateV30RequestProjectMaterialsProductInfo } from "../models/index";

export interface StdProjectUpdateV30RequestProjectMaterials {
  anchor_material_list?: StdProjectUpdateV30RequestProjectMaterialsAnchorMaterialListInner[];
  anchor_related_type?: StdProjectUpdateV30ProjectMaterialsAnchorRelatedType;
  call_to_action_buttons?: string[];
  component_material_list?: StdProjectUpdateV30RequestProjectMaterialsComponentMaterialListInner[];
  external_url_material_list?: string[];
  open_url?: string;
  original_video_title?: StdProjectUpdateV30ProjectMaterialsOriginalVideoTitle;
  product_info?: StdProjectUpdateV30RequestProjectMaterialsProductInfo;
  ulink_url?: string;
  ulink_url_type?: StdProjectUpdateV30ProjectMaterialsUlinkUrlType;
  web_url_material_list?: string[];
}


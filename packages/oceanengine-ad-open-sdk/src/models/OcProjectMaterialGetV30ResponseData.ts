// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { OcProjectMaterialGetV30ResponseDataPageInfo, OcProjectMaterialGetV30ResponseDataPlayletSeriesUrlInfoInner, OcProjectMaterialGetV30ResponseDataProductInfo, OcProjectMaterialGetV30ResponseDataTitleMaterialListInner, OcProjectMaterialGetV30ResponseDataVideoMaterialListInner } from "../models";

export interface OcProjectMaterialGetV30ResponseData {
  call_to_action_buttons?: string[];
  page_info?: OcProjectMaterialGetV30ResponseDataPageInfo;
  playlet_series_url_info?: OcProjectMaterialGetV30ResponseDataPlayletSeriesUrlInfoInner[];
  product_info?: OcProjectMaterialGetV30ResponseDataProductInfo;
  title_material_list?: OcProjectMaterialGetV30ResponseDataTitleMaterialListInner[];
  video_material_list?: OcProjectMaterialGetV30ResponseDataVideoMaterialListInner[];
}


// Generated from oceanengine/ad_open_sdk_go models/model_brand_material_list_v3_0_response_data_materials_inner_material_component_common_external.go
// Do not edit manually.

import type { BrandMaterialListV30ResponseDataMaterialsInnerMaterialComponentCommonExternalCloseLoopInfo, BrandMaterialListV30ResponseDataMaterialsInnerMaterialComponentCommonExternalMicroAppInfo, BrandMaterialListV30ResponseDataMaterialsInnerMaterialComponentCommonExternalWechatMicroAppInfo } from "../models/index";

export interface BrandMaterialListV30ResponseDataMaterialsInnerMaterialComponentCommonExternal {
  close_loop_info?: BrandMaterialListV30ResponseDataMaterialsInnerMaterialComponentCommonExternalCloseLoopInfo;
  external_title?: string;
  external_url?: string;
  external_url_is_download?: number;
  is_comment_disable?: number;
  is_web_view?: number;
  micro_app_info?: BrandMaterialListV30ResponseDataMaterialsInnerMaterialComponentCommonExternalMicroAppInfo;
  micro_app_open_url_type?: number;
  open_url?: string;
  open_url_text?: string;
  wechat_micro_app_info?: BrandMaterialListV30ResponseDataMaterialsInnerMaterialComponentCommonExternalWechatMicroAppInfo;
}


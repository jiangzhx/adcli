// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { CanvasFloatElementType, FloatAppDownloadSpec, FloatEnterpriseWxSpec, FloatGhSpec, FloatWeappSpec } from "../models";

export interface CanvasFloatButtonSpecType {
  style_type?: number;
  image_id?: string;
  title?: string;
  title_color?: string;
  desc?: string;
  desc_color?: string;
  appear_type?: number;
  disappear_type?: number;
  forbid_page_list?: number[];
  element_type?: CanvasFloatElementType;
  app_download_spec?: FloatAppDownloadSpec;
  weapp_spec?: FloatWeappSpec;
  gh_spec?: FloatGhSpec;
  enterprise_wx_spec?: FloatEnterpriseWxSpec;
}


// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_side_bar_float_spec_spec.go
// Do not edit manually.

import type { CanvasSideBarFloatElementType, EnterpriseWxSpec, SideBarFloatTelSpec, WechatServiceSpec } from "../v3/index";

export interface SideBarFloatSpecSpec {
  wording?: string;
  title_color?: string;
  elem_type?: CanvasSideBarFloatElementType;
  tel_spec?: SideBarFloatTelSpec;
  wechat_service_spec?: WechatServiceSpec;
  enterprise_wx_spec?: EnterpriseWxSpec;
}


import type { CanvasSideBarFloatElementType, EnterpriseWxSpec, SideBarFloatTelSpec, WechatServiceSpec } from "../v3/index";
export interface SideBarFloatSpecSpec {
    wording?: string;
    title_color?: string;
    elem_type?: CanvasSideBarFloatElementType;
    tel_spec?: SideBarFloatTelSpec;
    wechat_service_spec?: WechatServiceSpec;
    enterprise_wx_spec?: EnterpriseWxSpec;
}

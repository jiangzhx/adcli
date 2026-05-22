import type { ComponentSpecStruct, ComponentsPageType } from "../v3/index";
export interface CreatePageReqListStruct {
    page_type?: ComponentsPageType;
    page_name?: string;
    page_title?: string;
    clipboard?: string;
    page_deeplink?: string;
    mobile_app_id?: string;
    bg_color?: string;
    bg_image_id?: string;
    component_spec_list?: ComponentSpecStruct[];
}

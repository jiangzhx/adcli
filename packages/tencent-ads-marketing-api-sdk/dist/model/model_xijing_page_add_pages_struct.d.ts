import type { TemplatesPageType } from "../model/index";
export interface XijingPageAddPagesStruct {
    page_type?: TemplatesPageType;
    page_name?: string;
    page_title?: string;
    clipboard?: string;
    page_deeplink?: string;
    mobile_app_id?: string;
    form_id?: string;
    page_template_id?: string;
    component_spec_list?: string[];
}

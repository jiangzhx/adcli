import type { XjConfigStruct } from "../model/index";
export interface XijingComplexTemplateGetResponseData {
    page_template_id?: string;
    page_template_name?: string;
    page_template_cover_url?: string;
    page_name?: string;
    page_title?: string;
    page_config?: XjConfigStruct[];
}

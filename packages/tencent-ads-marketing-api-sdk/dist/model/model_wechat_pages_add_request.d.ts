import type { PageElementsStruct, ShareContentSpec } from "../model/index";
export interface WechatPagesAddRequest {
    page_name?: string;
    page_template_id?: number | string;
    share_content_spec?: ShareContentSpec;
    account_id?: number | string;
    page_elements_spec_list?: PageElementsStruct[];
}

import type { CreatePageReqListStruct } from "../v3/index";
export interface XijingPageByComponentsAddRequest {
    account_id?: number | string;
    is_auto_submit?: number;
    pages?: CreatePageReqListStruct[];
}

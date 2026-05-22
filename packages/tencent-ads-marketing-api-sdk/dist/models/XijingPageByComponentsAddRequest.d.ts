import type { CreatePageReqListStruct } from "../models";
export interface XijingPageByComponentsAddRequest {
    account_id?: number | string;
    is_auto_submit?: number;
    pages?: CreatePageReqListStruct[];
}

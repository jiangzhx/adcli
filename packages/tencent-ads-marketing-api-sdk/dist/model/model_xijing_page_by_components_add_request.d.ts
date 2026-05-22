import type { XijingPageByComponentsAddPagesStruct } from "../model/index";
export interface XijingPageByComponentsAddRequest {
    account_id?: number | string;
    is_auto_submit?: number;
    pages?: XijingPageByComponentsAddPagesStruct[];
}

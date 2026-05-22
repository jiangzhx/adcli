import type { XijingPageAddPagesStruct } from "../model/index";
export interface XijingPageAddRequest {
    account_id?: number | string;
    is_auto_submit?: number;
    pages?: XijingPageAddPagesStruct[];
}

import type { ComponentPagesStruct } from "../v3/index";
export interface XijingPageAddRequest {
    account_id?: number | string;
    is_auto_submit?: number;
    pages?: ComponentPagesStruct[];
}

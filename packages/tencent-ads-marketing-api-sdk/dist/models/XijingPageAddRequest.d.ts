import type { ComponentPagesStruct } from "../models";
export interface XijingPageAddRequest {
    account_id?: number | string;
    is_auto_submit?: number;
    pages?: ComponentPagesStruct[];
}

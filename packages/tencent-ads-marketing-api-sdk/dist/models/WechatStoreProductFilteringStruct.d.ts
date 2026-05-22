import type { FilterOperator } from "../models";
export interface WechatStoreProductFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}

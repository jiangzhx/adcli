import type { FilterOperator } from "../v3/index";
export interface WechatStoreProductFilteringStruct {
    field?: string;
    operator?: FilterOperator;
    values?: string[];
}

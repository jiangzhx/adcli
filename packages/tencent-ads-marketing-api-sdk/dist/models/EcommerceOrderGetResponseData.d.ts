import type { EcommerceOrderListStruct, PageInfo } from "../models";
export interface EcommerceOrderGetResponseData {
    list?: EcommerceOrderListStruct[];
    page_info?: PageInfo;
}

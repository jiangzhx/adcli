import type { EcommerceOrderListStruct, PageInfo } from "../model/index";
export interface EcommerceOrderGetResponseData {
    list?: EcommerceOrderListStruct[];
    page_info?: PageInfo;
}

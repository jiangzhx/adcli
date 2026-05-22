import type { EcommerceOrderListStruct, PageInfo } from "../v3/index";
export interface EcommerceOrderGetResponseData {
    list?: EcommerceOrderListStruct[];
    page_info?: PageInfo;
}

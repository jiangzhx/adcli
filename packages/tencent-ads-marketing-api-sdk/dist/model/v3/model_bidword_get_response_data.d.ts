import type { BidwordGetListStruct, PageInfo } from "../v3/index";
export interface BidwordGetResponseData {
    list?: BidwordGetListStruct[];
    page_info?: PageInfo;
}

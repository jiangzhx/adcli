import type { BidwordGetListStruct, PageInfo } from "../models";
export interface BidwordGetResponseData {
    list?: BidwordGetListStruct[];
    page_info?: PageInfo;
}

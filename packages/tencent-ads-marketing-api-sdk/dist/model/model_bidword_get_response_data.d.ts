import type { BidwordGetListStruct, Conf } from "../model/index";
export interface BidwordGetResponseData {
    list?: BidwordGetListStruct[];
    page_info?: Conf;
}

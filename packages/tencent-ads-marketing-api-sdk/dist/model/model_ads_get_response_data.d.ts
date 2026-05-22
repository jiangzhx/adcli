import type { AdsGetListStruct, ConfPageSize500 } from "../model/index";
export interface AdsGetResponseData {
    list?: AdsGetListStruct[];
    page_info?: ConfPageSize500;
}

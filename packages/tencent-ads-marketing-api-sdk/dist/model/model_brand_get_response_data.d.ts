import type { BrandGetListStruct, PageInfo } from "../model/index";
export interface BrandGetResponseData {
    list?: BrandGetListStruct[];
    page_info?: PageInfo;
}

import type { BrandGetListStruct, PageInfo } from "../models";
export interface BrandGetResponseData {
    list?: BrandGetListStruct[];
    page_info?: PageInfo;
}

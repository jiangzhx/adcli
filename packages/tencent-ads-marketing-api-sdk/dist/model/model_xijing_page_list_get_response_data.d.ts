import type { PageInfo, PageStruct } from "../model/index";
export interface XijingPageListGetResponseData {
    list?: PageStruct[];
    page_info?: PageInfo;
    total_pages?: number;
    page_size?: number;
    page_index?: number;
}

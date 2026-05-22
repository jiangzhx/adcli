import type { Conf, DetailListStruct, Summary } from "../v3/index";
export interface BatchAsyncRequestSpecificationGetResponseData {
    summary?: Summary;
    list?: DetailListStruct[];
    page_info?: Conf;
}

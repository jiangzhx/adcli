import type { Conf, DetailListStruct, Summary } from "../model/index";
export interface BatchAsyncRequestSpecificationGetResponseData {
    summary?: Summary;
    list?: DetailListStruct[];
    page_info?: Conf;
}

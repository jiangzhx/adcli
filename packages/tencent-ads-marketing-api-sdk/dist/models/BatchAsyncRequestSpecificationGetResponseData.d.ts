import type { Conf, DetailListStruct, Summary } from "../models";
export interface BatchAsyncRequestSpecificationGetResponseData {
    summary?: Summary;
    list?: DetailListStruct[];
    page_info?: Conf;
}

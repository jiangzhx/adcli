import type { AsyncRequestTaskListStruct, Conf } from "../v3/index";
export interface BatchAsyncRequestsGetResponseData {
    list?: AsyncRequestTaskListStruct[];
    page_info?: Conf;
}

import type { AsyncRequestTaskListStruct, Conf } from "../models";
export interface BatchAsyncRequestsGetResponseData {
    list?: AsyncRequestTaskListStruct[];
    page_info?: Conf;
}

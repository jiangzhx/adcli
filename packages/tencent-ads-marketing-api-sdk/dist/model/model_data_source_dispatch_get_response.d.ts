import type { ApiErrorStruct, DataSourceDispatchGetResponseData } from "../model/index";
export interface DataSourceDispatchGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DataSourceDispatchGetResponseData;
}

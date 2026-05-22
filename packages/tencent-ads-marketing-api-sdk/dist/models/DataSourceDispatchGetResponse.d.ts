import type { ApiErrorStruct, DataSourceDispatchGetResponseData } from "../models";
export interface DataSourceDispatchGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DataSourceDispatchGetResponseData;
}

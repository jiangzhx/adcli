import type { ApiErrorStruct, DataSourceDispatchGetResponseData } from "../v3/index";
export interface DataSourceDispatchGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DataSourceDispatchGetResponseData;
}

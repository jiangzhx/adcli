import type { ApiErrorStruct, DataSourceDispatchUpdateResponseData } from "../model/index";
export interface DataSourceDispatchUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DataSourceDispatchUpdateResponseData;
}

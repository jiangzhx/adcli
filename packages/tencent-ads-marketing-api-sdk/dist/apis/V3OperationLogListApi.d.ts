import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OperationLogListGetResponseData } from "../models";
export interface V3OperationLogListApiGetRequest {
    accountId: number | string;
    operationObjectType: string;
    startDate: string;
    endDate: string;
    page: number;
    pageSize: number;
    objectId?: number | string;
    operatorPlatformList?: unknown;
    operationActionList?: unknown;
    fields?: unknown;
}
export declare class V3OperationLogListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3OperationLogListApiGetRequest): Promise<OperationLogListGetResponseData>;
    getWithHttpInfo(request: V3OperationLogListApiGetRequest): Promise<ApiResponse<OperationLogListGetResponseData>>;
}

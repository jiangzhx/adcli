import { ApiClient, type ApiResponse } from "./client";
import type { OperationLogListGetResponseData } from "../../model/v3/index";
export interface OperationLogListApiGetRequest {
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
export declare class OperationLogListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: OperationLogListApiGetRequest): Promise<OperationLogListGetResponseData>;
    getWithHttpInfo(request: OperationLogListApiGetRequest): Promise<ApiResponse<OperationLogListGetResponseData>>;
}

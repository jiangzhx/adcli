import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DataSetAddRequest, DataSetAddResponseData, DataSetGetResponseData } from "../models";
export interface DataSetApiAddRequest {
    data: DataSetAddRequest;
}
export interface DataSetApiGetRequest {
    accountId: number | string;
    userActionSetId?: number | string;
    dataSetId?: number | string;
    envType?: number;
    fields?: unknown;
}
export declare class DataSetApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: DataSetApiAddRequest): Promise<DataSetAddResponseData>;
    addWithHttpInfo(request: DataSetApiAddRequest): Promise<ApiResponse<DataSetAddResponseData>>;
    get(request: DataSetApiGetRequest): Promise<DataSetGetResponseData>;
    getWithHttpInfo(request: DataSetApiGetRequest): Promise<ApiResponse<DataSetGetResponseData>>;
}

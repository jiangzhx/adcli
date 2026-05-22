import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomAudienceReportsGetResponseData, DateRange, FilteringStruct } from "../models";
export interface CustomAudienceReportsApiGetRequest {
    accountId: number | string;
    filtering: FilteringStruct[];
    dateRange: DateRange;
    groupBy?: unknown;
    fields?: unknown;
}
export declare class CustomAudienceReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CustomAudienceReportsApiGetRequest): Promise<CustomAudienceReportsGetResponseData>;
    getWithHttpInfo(request: CustomAudienceReportsApiGetRequest): Promise<ApiResponse<CustomAudienceReportsGetResponseData>>;
}

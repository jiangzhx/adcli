import { ApiClient, type ApiResponse } from "./client";
import type { CustomAudienceReportsGetResponseData, DateRange, FilteringStruct } from "../model/index";
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

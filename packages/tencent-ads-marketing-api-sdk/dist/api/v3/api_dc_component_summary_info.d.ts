import { ApiClient, type ApiResponse } from "./client";
import type { DcComponentSummaryInfoGetResponseData } from "../../model/v3/index";
export interface DcComponentSummaryInfoApiGetRequest {
    accountId: number | string;
    componentSummaryInsightTypeList: string[];
    dynamicCreativeId?: number | string;
    fields?: unknown;
}
export declare class DcComponentSummaryInfoApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: DcComponentSummaryInfoApiGetRequest): Promise<DcComponentSummaryInfoGetResponseData>;
    getWithHttpInfo(request: DcComponentSummaryInfoApiGetRequest): Promise<ApiResponse<DcComponentSummaryInfoGetResponseData>>;
}

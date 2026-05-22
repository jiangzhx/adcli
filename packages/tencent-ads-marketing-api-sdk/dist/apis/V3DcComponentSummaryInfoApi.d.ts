import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DcComponentSummaryInfoGetResponseData } from "../models";
export interface V3DcComponentSummaryInfoApiGetRequest {
    accountId: number | string;
    componentSummaryInsightTypeList: string[];
    dynamicCreativeId?: number | string;
    fields?: unknown;
}
export declare class V3DcComponentSummaryInfoApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3DcComponentSummaryInfoApiGetRequest): Promise<DcComponentSummaryInfoGetResponseData>;
    getWithHttpInfo(request: V3DcComponentSummaryInfoApiGetRequest): Promise<ApiResponse<DcComponentSummaryInfoGetResponseData>>;
}

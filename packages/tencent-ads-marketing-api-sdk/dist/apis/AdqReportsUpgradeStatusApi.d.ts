import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdqReportsUpgradeStatusGetResponseData } from "../models";
export interface AdqReportsUpgradeStatusApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class AdqReportsUpgradeStatusApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdqReportsUpgradeStatusApiGetRequest): Promise<AdqReportsUpgradeStatusGetResponseData>;
    getWithHttpInfo(request: AdqReportsUpgradeStatusApiGetRequest): Promise<ApiResponse<AdqReportsUpgradeStatusGetResponseData>>;
}

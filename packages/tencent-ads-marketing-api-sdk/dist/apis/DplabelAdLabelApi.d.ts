import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DplabelAdLabelGetResponseData } from "../models";
export interface DplabelAdLabelApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class DplabelAdLabelApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: DplabelAdLabelApiGetRequest): Promise<DplabelAdLabelGetResponseData>;
    getWithHttpInfo(request: DplabelAdLabelApiGetRequest): Promise<ApiResponse<DplabelAdLabelGetResponseData>>;
}

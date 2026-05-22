import { ApiClient, type ApiResponse } from "./client";
import type { DplabelAdLabelGetResponseData } from "../model/index";
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

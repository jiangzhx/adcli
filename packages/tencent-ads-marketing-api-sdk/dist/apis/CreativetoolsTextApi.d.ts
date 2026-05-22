import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativetoolsTextGetResponseData } from "../models";
export interface CreativetoolsTextApiGetRequest {
    accountId: number | string;
    maxTextLength: number;
    categoryFirstLevel?: number;
    categorySecondLevel?: number;
    keyword?: string;
    filtering?: unknown;
    number?: number;
    fields?: unknown;
}
export declare class CreativetoolsTextApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CreativetoolsTextApiGetRequest): Promise<CreativetoolsTextGetResponseData>;
    getWithHttpInfo(request: CreativetoolsTextApiGetRequest): Promise<ApiResponse<CreativetoolsTextGetResponseData>>;
}

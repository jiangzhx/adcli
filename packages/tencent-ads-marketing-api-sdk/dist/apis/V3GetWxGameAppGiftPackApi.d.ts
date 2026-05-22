import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { GetWxGameAppGiftPackGetRequest, GetWxGameAppGiftPackGetResponseData } from "../models";
export interface V3GetWxGameAppGiftPackApiGetRequest {
    data: GetWxGameAppGiftPackGetRequest;
}
export declare class V3GetWxGameAppGiftPackApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3GetWxGameAppGiftPackApiGetRequest): Promise<GetWxGameAppGiftPackGetResponseData>;
    getWithHttpInfo(request: V3GetWxGameAppGiftPackApiGetRequest): Promise<ApiResponse<GetWxGameAppGiftPackGetResponseData>>;
}

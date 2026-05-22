import { ApiClient, type ApiResponse } from "./client";
import type { GetWxGameAppGiftPackGetRequest, GetWxGameAppGiftPackGetResponseData } from "../../model/v3/index";
export interface GetWxGameAppGiftPackApiGetRequest {
    data: GetWxGameAppGiftPackGetRequest;
}
export declare class GetWxGameAppGiftPackApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: GetWxGameAppGiftPackApiGetRequest): Promise<GetWxGameAppGiftPackGetResponseData>;
    getWithHttpInfo(request: GetWxGameAppGiftPackApiGetRequest): Promise<ApiResponse<GetWxGameAppGiftPackGetResponseData>>;
}

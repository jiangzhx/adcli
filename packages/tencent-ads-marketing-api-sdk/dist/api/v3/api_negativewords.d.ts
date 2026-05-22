import { ApiClient, type ApiResponse } from "./client";
import type { NegativewordsAddRequest, NegativewordsAddResponseData, NegativewordsGetResponseData, NegativewordsUpdateRequest, NegativewordsUpdateResponseData } from "../../model/v3/index";
export interface NegativewordsApiAddRequest {
    data: NegativewordsAddRequest;
}
export interface NegativewordsApiGetRequest {
    accountId: number | string;
    adgroupIds?: unknown;
    dynamicCreativeIds?: unknown;
    fields?: unknown;
}
export interface NegativewordsApiUpdateRequest {
    data: NegativewordsUpdateRequest;
}
export declare class NegativewordsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: NegativewordsApiAddRequest): Promise<NegativewordsAddResponseData>;
    addWithHttpInfo(request: NegativewordsApiAddRequest): Promise<ApiResponse<NegativewordsAddResponseData>>;
    get(request: NegativewordsApiGetRequest): Promise<NegativewordsGetResponseData>;
    getWithHttpInfo(request: NegativewordsApiGetRequest): Promise<ApiResponse<NegativewordsGetResponseData>>;
    update(request: NegativewordsApiUpdateRequest): Promise<NegativewordsUpdateResponseData>;
    updateWithHttpInfo(request: NegativewordsApiUpdateRequest): Promise<ApiResponse<NegativewordsUpdateResponseData>>;
}

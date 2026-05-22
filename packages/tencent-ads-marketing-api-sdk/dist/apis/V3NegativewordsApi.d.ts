import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { NegativewordsAddRequest, NegativewordsAddResponseData, NegativewordsGetResponseData, NegativewordsUpdateRequest, NegativewordsUpdateResponseData } from "../models";
export interface V3NegativewordsApiAddRequest {
    data: NegativewordsAddRequest;
}
export interface V3NegativewordsApiGetRequest {
    accountId: number | string;
    adgroupIds?: unknown;
    dynamicCreativeIds?: unknown;
    fields?: unknown;
}
export interface V3NegativewordsApiUpdateRequest {
    data: NegativewordsUpdateRequest;
}
export declare class V3NegativewordsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3NegativewordsApiAddRequest): Promise<NegativewordsAddResponseData>;
    addWithHttpInfo(request: V3NegativewordsApiAddRequest): Promise<ApiResponse<NegativewordsAddResponseData>>;
    get(request: V3NegativewordsApiGetRequest): Promise<NegativewordsGetResponseData>;
    getWithHttpInfo(request: V3NegativewordsApiGetRequest): Promise<ApiResponse<NegativewordsGetResponseData>>;
    update(request: V3NegativewordsApiUpdateRequest): Promise<NegativewordsUpdateResponseData>;
    updateWithHttpInfo(request: V3NegativewordsApiUpdateRequest): Promise<ApiResponse<NegativewordsUpdateResponseData>>;
}

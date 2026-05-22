import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CampaignNegativewordsAddRequest, CampaignNegativewordsAddResponseData, CampaignNegativewordsGetRequest, CampaignNegativewordsGetResponseData, CampaignNegativewordsUpdateRequest, CampaignNegativewordsUpdateResponseData } from "../models";
export interface CampaignNegativewordsApiAddRequest {
    data: CampaignNegativewordsAddRequest;
}
export interface CampaignNegativewordsApiGetRequest {
    data: CampaignNegativewordsGetRequest;
}
export interface CampaignNegativewordsApiUpdateRequest {
    data: CampaignNegativewordsUpdateRequest;
}
export declare class CampaignNegativewordsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: CampaignNegativewordsApiAddRequest): Promise<CampaignNegativewordsAddResponseData>;
    addWithHttpInfo(request: CampaignNegativewordsApiAddRequest): Promise<ApiResponse<CampaignNegativewordsAddResponseData>>;
    get(request: CampaignNegativewordsApiGetRequest): Promise<CampaignNegativewordsGetResponseData>;
    getWithHttpInfo(request: CampaignNegativewordsApiGetRequest): Promise<ApiResponse<CampaignNegativewordsGetResponseData>>;
    update(request: CampaignNegativewordsApiUpdateRequest): Promise<CampaignNegativewordsUpdateResponseData>;
    updateWithHttpInfo(request: CampaignNegativewordsApiUpdateRequest): Promise<ApiResponse<CampaignNegativewordsUpdateResponseData>>;
}

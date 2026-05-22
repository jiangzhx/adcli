import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { JointBudgetRulesAddRequest, JointBudgetRulesAddResponseData, JointBudgetRulesGetResponseData, JointBudgetRulesUpdateRequest, JointBudgetRulesUpdateResponseData } from "../models";
export interface V3JointBudgetRulesApiAddRequest {
    data: JointBudgetRulesAddRequest;
}
export interface V3JointBudgetRulesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface V3JointBudgetRulesApiUpdateRequest {
    data: JointBudgetRulesUpdateRequest;
}
export declare class V3JointBudgetRulesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3JointBudgetRulesApiAddRequest): Promise<JointBudgetRulesAddResponseData>;
    addWithHttpInfo(request: V3JointBudgetRulesApiAddRequest): Promise<ApiResponse<JointBudgetRulesAddResponseData>>;
    get(request: V3JointBudgetRulesApiGetRequest): Promise<JointBudgetRulesGetResponseData>;
    getWithHttpInfo(request: V3JointBudgetRulesApiGetRequest): Promise<ApiResponse<JointBudgetRulesGetResponseData>>;
    update(request: V3JointBudgetRulesApiUpdateRequest): Promise<JointBudgetRulesUpdateResponseData>;
    updateWithHttpInfo(request: V3JointBudgetRulesApiUpdateRequest): Promise<ApiResponse<JointBudgetRulesUpdateResponseData>>;
}

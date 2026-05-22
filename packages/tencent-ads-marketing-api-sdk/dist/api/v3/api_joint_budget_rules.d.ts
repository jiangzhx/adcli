import { ApiClient, type ApiResponse } from "./client";
import type { JointBudgetRulesAddRequest, JointBudgetRulesAddResponseData, JointBudgetRulesGetResponseData, JointBudgetRulesUpdateRequest, JointBudgetRulesUpdateResponseData } from "../../model/v3/index";
export interface JointBudgetRulesApiAddRequest {
    data: JointBudgetRulesAddRequest;
}
export interface JointBudgetRulesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface JointBudgetRulesApiUpdateRequest {
    data: JointBudgetRulesUpdateRequest;
}
export declare class JointBudgetRulesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: JointBudgetRulesApiAddRequest): Promise<JointBudgetRulesAddResponseData>;
    addWithHttpInfo(request: JointBudgetRulesApiAddRequest): Promise<ApiResponse<JointBudgetRulesAddResponseData>>;
    get(request: JointBudgetRulesApiGetRequest): Promise<JointBudgetRulesGetResponseData>;
    getWithHttpInfo(request: JointBudgetRulesApiGetRequest): Promise<ApiResponse<JointBudgetRulesGetResponseData>>;
    update(request: JointBudgetRulesApiUpdateRequest): Promise<JointBudgetRulesUpdateResponseData>;
    updateWithHttpInfo(request: JointBudgetRulesApiUpdateRequest): Promise<ApiResponse<JointBudgetRulesUpdateResponseData>>;
}

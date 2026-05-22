// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_joint_budget_rules.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { JointBudgetRulesAddRequest, JointBudgetRulesAddResponseData, JointBudgetRulesGetResponseData, JointBudgetRulesUpdateRequest, JointBudgetRulesUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

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


export class JointBudgetRulesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: JointBudgetRulesApiAddRequest): Promise<JointBudgetRulesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: JointBudgetRulesApiAddRequest): Promise<ApiResponse<JointBudgetRulesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<JointBudgetRulesAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/joint_budget_rules/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: JointBudgetRulesApiGetRequest): Promise<JointBudgetRulesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: JointBudgetRulesApiGetRequest): Promise<ApiResponse<JointBudgetRulesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<JointBudgetRulesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/joint_budget_rules/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: JointBudgetRulesApiUpdateRequest): Promise<JointBudgetRulesUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: JointBudgetRulesApiUpdateRequest): Promise<ApiResponse<JointBudgetRulesUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<JointBudgetRulesUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/joint_budget_rules/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}



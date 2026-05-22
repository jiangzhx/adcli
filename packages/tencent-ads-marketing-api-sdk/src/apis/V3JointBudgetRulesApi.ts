// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
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


export class V3JointBudgetRulesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3JointBudgetRulesApiAddRequest): Promise<JointBudgetRulesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3JointBudgetRulesApiAddRequest): Promise<ApiResponse<JointBudgetRulesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<JointBudgetRulesAddResponseData>({
      method: "POST",
      path: "/joint_budget_rules/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3JointBudgetRulesApiGetRequest): Promise<JointBudgetRulesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3JointBudgetRulesApiGetRequest): Promise<ApiResponse<JointBudgetRulesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<JointBudgetRulesGetResponseData>({
      method: "GET",
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

  async update(request: V3JointBudgetRulesApiUpdateRequest): Promise<JointBudgetRulesUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3JointBudgetRulesApiUpdateRequest): Promise<ApiResponse<JointBudgetRulesUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<JointBudgetRulesUpdateResponseData>({
      method: "POST",
      path: "/joint_budget_rules/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}



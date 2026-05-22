// Generated from tencentad/marketing-api-go-sdk pkg/api/api_user_action_sets.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { UserActionSetsAddRequest, UserActionSetsAddResponseData, UserActionSetsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface UserActionSetsApiAddRequest {
  data: UserActionSetsAddRequest;
}

export interface UserActionSetsApiGetRequest {
  accountId: number | string;
  userActionSetId?: number | string;
  type_?: unknown;
  mobileAppId?: number | string;
  wechatAppId?: string;
  name?: string;
  includePermission?: boolean;
  fields?: unknown;
}


export class UserActionSetsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: UserActionSetsApiAddRequest): Promise<UserActionSetsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: UserActionSetsApiAddRequest): Promise<ApiResponse<UserActionSetsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<UserActionSetsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/user_action_sets/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: UserActionSetsApiGetRequest): Promise<UserActionSetsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: UserActionSetsApiGetRequest): Promise<ApiResponse<UserActionSetsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<UserActionSetsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/user_action_sets/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "user_action_set_id", value: request.userActionSetId },
        { name: "type", value: request.type_, collectionFormat: "multi" },
        { name: "mobile_app_id", value: request.mobileAppId },
        { name: "wechat_app_id", value: request.wechatAppId },
        { name: "name", value: request.name },
        { name: "include_permission", value: request.includePermission },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}



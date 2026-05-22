// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_user_organization_authentication.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { UserOrganizationAuthenticationGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface UserOrganizationAuthenticationApiGetRequest {
  userToken: string;
  accountIdList: number[];
  fields?: unknown;
}


export class UserOrganizationAuthenticationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: UserOrganizationAuthenticationApiGetRequest): Promise<UserOrganizationAuthenticationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: UserOrganizationAuthenticationApiGetRequest): Promise<ApiResponse<UserOrganizationAuthenticationGetResponseData>> {
    if (request.userToken == null) {
      throw new ApiException("Missing the required parameter 'userToken' when calling get");
    }

    if (request.accountIdList == null) {
      throw new ApiException("Missing the required parameter 'accountIdList' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<UserOrganizationAuthenticationGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/user_organization_authentication/get",
      queryParams: [
        { name: "user_token", value: request.userToken },
        { name: "account_id_list", value: request.accountIdList, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}



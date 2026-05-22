// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UserOrganizationAuthenticationGetResponseData } from "../models";

export interface V3UserOrganizationAuthenticationApiGetRequest {
  userToken: string;
  accountIdList: number[];
  fields?: unknown;
}


export class V3UserOrganizationAuthenticationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3UserOrganizationAuthenticationApiGetRequest): Promise<UserOrganizationAuthenticationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3UserOrganizationAuthenticationApiGetRequest): Promise<ApiResponse<UserOrganizationAuthenticationGetResponseData>> {
    if (request.userToken == null) {
      throw new ApiException("Missing the required parameter 'userToken' when calling get");
    }

    if (request.accountIdList == null) {
      throw new ApiException("Missing the required parameter 'accountIdList' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<UserOrganizationAuthenticationGetResponseData>({
      method: "GET",
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



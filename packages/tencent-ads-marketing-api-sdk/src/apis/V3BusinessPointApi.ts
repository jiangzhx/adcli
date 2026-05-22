// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessPointGetResponseData } from "../models";

export interface V3BusinessPointApiGetRequest {
  siteSets: string[];
  accountId: number | string;
  fields?: unknown;
}


export class V3BusinessPointApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3BusinessPointApiGetRequest): Promise<BusinessPointGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3BusinessPointApiGetRequest): Promise<ApiResponse<BusinessPointGetResponseData>> {
    if (request.siteSets == null) {
      throw new ApiException("Missing the required parameter 'siteSets' when calling get");
    }

    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BusinessPointGetResponseData>({
      method: "GET",
      path: "/business_point/get",
      queryParams: [
        { name: "site_sets", value: request.siteSets, collectionFormat: "multi" },
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}



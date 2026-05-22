// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_leads_voip_call_token.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LeadsVoipCallTokenGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface LeadsVoipCallTokenApiGetRequest {
  accountId: number | string;
  userId: number | string;
  requestId?: string;
  fields?: unknown;
}


export class LeadsVoipCallTokenApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LeadsVoipCallTokenApiGetRequest): Promise<LeadsVoipCallTokenGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LeadsVoipCallTokenApiGetRequest): Promise<ApiResponse<LeadsVoipCallTokenGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.userId == null) {
      throw new ApiException("Missing the required parameter 'userId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsVoipCallTokenGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/leads_voip_call_token/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "user_id", value: request.userId },
        { name: "request_id", value: request.requestId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}



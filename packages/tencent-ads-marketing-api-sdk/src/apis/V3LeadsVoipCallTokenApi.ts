// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsVoipCallTokenGetResponseData } from "../models";

export interface V3LeadsVoipCallTokenApiGetRequest {
  accountId: number | string;
  userId: number | string;
  requestId?: string;
  fields?: unknown;
}


export class V3LeadsVoipCallTokenApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3LeadsVoipCallTokenApiGetRequest): Promise<LeadsVoipCallTokenGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3LeadsVoipCallTokenApiGetRequest): Promise<ApiResponse<LeadsVoipCallTokenGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.userId == null) {
      throw new ApiException("Missing the required parameter 'userId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsVoipCallTokenGetResponseData>({
      method: "GET",
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



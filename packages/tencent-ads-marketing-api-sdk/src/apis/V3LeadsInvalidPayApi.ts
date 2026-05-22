// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsInvalidPayGetResponseData } from "../models";

export interface V3LeadsInvalidPayApiGetRequest {
  accountId: number | string;
  month: string;
  fields?: unknown;
}


export class V3LeadsInvalidPayApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3LeadsInvalidPayApiGetRequest): Promise<LeadsInvalidPayGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3LeadsInvalidPayApiGetRequest): Promise<ApiResponse<LeadsInvalidPayGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.month == null) {
      throw new ApiException("Missing the required parameter 'month' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsInvalidPayGetResponseData>({
      method: "GET",
      path: "/leads_invalid_pay/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "month", value: request.month },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}



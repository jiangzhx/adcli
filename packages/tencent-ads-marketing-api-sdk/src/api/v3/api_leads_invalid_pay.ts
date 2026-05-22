// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_leads_invalid_pay.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LeadsInvalidPayGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface LeadsInvalidPayApiGetRequest {
  accountId: number | string;
  month: string;
  fields?: unknown;
}


export class LeadsInvalidPayApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LeadsInvalidPayApiGetRequest): Promise<LeadsInvalidPayGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LeadsInvalidPayApiGetRequest): Promise<ApiResponse<LeadsInvalidPayGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.month == null) {
      throw new ApiException("Missing the required parameter 'month' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsInvalidPayGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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



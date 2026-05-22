// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ElementAppealQuotaGetResponseData } from "../models";

export interface V3ElementAppealQuotaApiGetRequest {
  accountId: number | string;
  fields?: unknown;
}


export class V3ElementAppealQuotaApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ElementAppealQuotaApiGetRequest): Promise<ElementAppealQuotaGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ElementAppealQuotaApiGetRequest): Promise<ApiResponse<ElementAppealQuotaGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ElementAppealQuotaGetResponseData>({
      method: "GET",
      path: "/element_appeal_quota/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}



// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MarketingTargetTypesGetResponseData } from "../models";

export interface V3MarketingTargetTypesApiGetRequest {
  accountId?: number | string;
  organizationId?: number | string;
  fields?: unknown;
}


export class V3MarketingTargetTypesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3MarketingTargetTypesApiGetRequest): Promise<MarketingTargetTypesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3MarketingTargetTypesApiGetRequest): Promise<ApiResponse<MarketingTargetTypesGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<MarketingTargetTypesGetResponseData>({
      method: "GET",
      path: "/marketing_target_types/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "organization_id", value: request.organizationId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}



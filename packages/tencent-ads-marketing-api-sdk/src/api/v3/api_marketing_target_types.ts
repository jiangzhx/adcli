// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_marketing_target_types.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MarketingTargetTypesGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MarketingTargetTypesApiGetRequest {
  accountId?: number | string;
  organizationId?: number | string;
  fields?: unknown;
}


export class MarketingTargetTypesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: MarketingTargetTypesApiGetRequest): Promise<MarketingTargetTypesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: MarketingTargetTypesApiGetRequest): Promise<ApiResponse<MarketingTargetTypesGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<MarketingTargetTypesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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



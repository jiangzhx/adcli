// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_component_detail.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ComponentDetailGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ComponentDetailApiGetRequest {
  accountId?: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  organizationId?: number | string;
  adContext?: unknown;
  fields?: unknown;
}


export class ComponentDetailApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ComponentDetailApiGetRequest): Promise<ComponentDetailGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ComponentDetailApiGetRequest): Promise<ApiResponse<ComponentDetailGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<ComponentDetailGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/component_detail/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "organization_id", value: request.organizationId },
        { name: "ad_context", value: request.adContext },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}



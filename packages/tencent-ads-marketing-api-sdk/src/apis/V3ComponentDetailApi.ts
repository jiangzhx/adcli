// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComponentDetailGetResponseData } from "../models";

export interface V3ComponentDetailApiGetRequest {
  accountId?: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  organizationId?: number | string;
  adContext?: unknown;
  fields?: unknown;
}


export class V3ComponentDetailApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ComponentDetailApiGetRequest): Promise<ComponentDetailGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ComponentDetailApiGetRequest): Promise<ApiResponse<ComponentDetailGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<ComponentDetailGetResponseData>({
      method: "GET",
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



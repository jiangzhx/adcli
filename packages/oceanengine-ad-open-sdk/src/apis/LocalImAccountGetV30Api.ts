// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalImAccountGetV30QueryLifeAccountType, LocalImAccountGetV30Response } from "../models";


export interface OpenApiV30LocalImAccountGetGetRequest {
  lifeAccountId: number;
  queryLifeAccountType?: LocalImAccountGetV30QueryLifeAccountType;
  page?: number;
  pageSize?: number;
}

export class LocalImAccountGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalImAccountGetGet(request: OpenApiV30LocalImAccountGetGetRequest): Promise<LocalImAccountGetV30Response> {
    const response = await this.openApiV30LocalImAccountGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalImAccountGetGetWithHttpInfo(request: OpenApiV30LocalImAccountGetGetRequest): Promise<ApiResponse<LocalImAccountGetV30Response>> {
    if (request.lifeAccountId == null) {
      throw new ApiException("Missing the required parameter 'lifeAccountId' when calling openApiV30LocalImAccountGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalImAccountGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/im/account/get/",
      queryParams: [
        { name: "life_account_id", value: request.lifeAccountId },
        { name: "query_life_account_type", value: request.queryLifeAccountType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}



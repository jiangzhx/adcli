// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalLifeAdvertiserListV30Filtering, LocalLifeAdvertiserListV30Response } from "../models";


export interface OpenApiV30LocalLifeAdvertiserListGetRequest {
  lifeAccountId: number;
  filtering?: LocalLifeAdvertiserListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class LocalLifeAdvertiserListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalLifeAdvertiserListGet(request: OpenApiV30LocalLifeAdvertiserListGetRequest): Promise<LocalLifeAdvertiserListV30Response> {
    const response = await this.openApiV30LocalLifeAdvertiserListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalLifeAdvertiserListGetWithHttpInfo(request: OpenApiV30LocalLifeAdvertiserListGetRequest): Promise<ApiResponse<LocalLifeAdvertiserListV30Response>> {
    if (request.lifeAccountId == null) {
      throw new ApiException("Missing the required parameter 'lifeAccountId' when calling openApiV30LocalLifeAdvertiserListGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalLifeAdvertiserListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/life/advertiser/list/",
      queryParams: [
        { name: "life_account_id", value: request.lifeAccountId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


